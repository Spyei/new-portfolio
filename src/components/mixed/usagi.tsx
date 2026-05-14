"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const getRandomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

export default function UsagiManager() {
    const [imgSrc, setImgSrc] = useState("/usagi/photos/0.webp");
    const [size, setSize] = useState(82);
    const [mounted, setMounted] = useState(false);
    const [isFirstClick, setIsFirstClick] = useState(true);
    const [isSpecial, setIsSpecial] = useState(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const triggerSpecial = () => {
        setIsSpecial(true);
        const specialAudio = new Audio("/usagi/audios/special.mp3");
        audioRef.current = specialAudio;
        specialAudio.volume = 0.5;

        specialAudio.play();

        specialAudio.onended = () => {
            setIsSpecial(false);
            setSize(82);
            setImgSrc("/usagi/photos/0.webp");
            setIsFirstClick(true);
        };
    };

    const handleInteraction = () => {
        if (isSpecial) return;

        const newSize = size + 2;

        if (newSize >= 200) {
            triggerSpecial();
            return;
        }

        setSize(newSize);

        if (audioRef.current && !audioRef.current.paused) return;

        let nextAudio: string;
        let nextImage: string;

        if (isFirstClick) {
            nextAudio = "/usagi/audios/0.mp3";
            nextImage = "/usagi/photos/0.webp";
            setIsFirstClick(false);
        } else {
            nextAudio = `/usagi/audios/${getRandomInt(0, 6)}.mp3`;
            nextImage = `/usagi/photos/${getRandomInt(0, 5)}.webp`;
        }

        const audio = new Audio(nextAudio);
        audioRef.current = audio;
        audio.volume = 0.3;
        audio.play();

        setImgSrc(nextImage);
    };

    if (!mounted) return null;

    return (
        <>
            <AnimatePresence>
                {isSpecial && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm select-none pointer-events-auto cursor-default"
                    >
                        <motion.div
                            draggable={false}
                            initial={{ scale: 0.5, rotate: -10 }}
                            animate={{ scale: 1.2, rotate: 0 }}
                            transition={{ type: "spring", damping: 10 }}
                            className="relative w-screen h-screen z-99"
                        >
                            <Image
                                src="/usagi/photos/special.webp"
                                alt="una."
                                fill
                                className="object-contain pointer-events-none p-15"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="fixed bottom-2 right-2 z-50">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <button
                        type="button"
                        onClick={handleInteraction}
                        className="hover:cursor-pointer focus:outline-none active:scale-95 transition-transform"
                    >
                        <Image
                            src={imgSrc}
                            alt="Usagi"
                            width={500}
                            height={500}
                            draggable={false}
                            className="object-contain select-none pointer-events-none"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                transition: "width 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                            }}
                            priority
                        />
                    </button>
                </motion.div>
            </div>
        </>
    );
}