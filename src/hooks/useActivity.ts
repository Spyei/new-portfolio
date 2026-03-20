import type { ConnectionStatus, LanyardData } from "@/types";
import { useEffect, useRef, useState } from "react";

const LANYARD_WS = "wss://api.lanyard.rest/socket";
const HEARTBEAT_INTERVAL = 30_000;

interface UseDiscordActivityOptions {
    userId: string;
    autoReconnect?: boolean;
}

export function useDiscordActivity({ userId, autoReconnect = true }: UseDiscordActivityOptions) {
    const [data, setData] = useState<LanyardData | null>(null);
    const [status, setStatus] = useState<ConnectionStatus>("connecting");

    const wsRef = useRef<WebSocket | null>(null);
    const heartbeatRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const reconnectRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const mountedRef = useRef(true);

    useEffect(() => {
        mountedRef.current = true;
        connect();

        return () => {
            mountedRef.current = false;
            cleanup();
        };
    }, [userId]);

    function cleanup() {
        if (heartbeatRef.current) clearInterval(heartbeatRef.current);
        if (reconnectRef.current) clearTimeout(reconnectRef.current);

        if (wsRef.current) {
            wsRef.current.onclose = null;
            wsRef.current.close();
        }
    }

    function connect() {
        if (!mountedRef.current) return;
        setStatus("connecting");

        const ws = new WebSocket(LANYARD_WS);
        wsRef.current = ws;

        ws.onopen = () => {
            ws.send(JSON.stringify({ op: 2, d: { subscribe_to_id: userId } }));
        };

        ws.onmessage = (event) => {
            try {
                const msg = JSON.parse(event.data as string);

                if (msg.op === 1) {
                    const interval = msg.d?.heartbeat_interval ?? HEARTBEAT_INTERVAL;
                
                    heartbeatRef.current = setInterval(() => {
                        if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify({ op: 3 }));
                    }, interval);
                }

                if (msg.op === 0 && mountedRef.current) {
                    setData(msg.d);
                    setStatus("connected");
                }
            } catch {
                console.error("Failed to parse message", event.data);
            }
        };

        ws.onerror = () => {
            if (mountedRef.current) setStatus("error");
        };

        ws.onclose = () => {
            if (heartbeatRef.current) clearInterval(heartbeatRef.current);
            if (!mountedRef.current) return;

            setStatus("disconnected");
            
            if (autoReconnect) {
                reconnectRef.current = setTimeout(connect, 3_000);
            }
        };
    }

    return { data, status };
}
