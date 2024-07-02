"use client";
import { cn } from "@/utils/cn";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { MouseEvent, ReactNode } from "react";

export const HeroHighlight = ({
    children,
    className,
    containerClassName,
}: {
    children: ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: MouseEvent<HTMLDivElement>) {
        if (!currentTarget) return;
        const { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    return (
        <div
            className={cn(
                "relative bg-white w-full group",
                containerClassName
            )}
            onMouseMove={handleMouseMove}
        >
            <div className="absolute inset-0 bg-dot-thick-neutral-300 pointer-events-none" />
            <motion.div
                className="pointer-events-none bg-dot-thick-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                    maskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                }}
            />

            <div className={cn("relative z-20", className)}>{children}</div>
        </div>
    );
};

export const Highlight = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <motion.span
            initial={{
                backgroundSize: "0% 100%",
            }}
            animate={{
                backgroundSize: "100% 100%",
            }}
            transition={{
                duration: 1,
                ease: "linear",
                delay: 0.5,
            }}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                display: "inline",
            }}
            className={cn(
                `relative inline-block py-1 px-1 text-black font-semibold rounded-lg bg-gradient-to-r from-indigo-400 to-purple-400`,
                className
            )}
        >
            {children}
        </motion.span>
    );
};
