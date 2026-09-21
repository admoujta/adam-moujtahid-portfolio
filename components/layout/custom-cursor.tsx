"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function CustomCursor() {
    const isVisibleRef = useRef(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) return;

        document.documentElement.classList.add("custom-cursor-enabled");
        document.documentElement.style.cursor = "none";
        
        const frameId = requestAnimationFrame(() => {
            setIsEnabled(true);
        });

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisibleRef.current) {
                isVisibleRef.current = true;
                setIsVisible(true);
            }
        };

        const isInteractive = (el: HTMLElement): boolean => {
            const tag = el.tagName.toLowerCase();
            if (tag === "button" || tag === "a" || tag === "input" || tag === "select" || tag === "textarea") return true;
            if (el.closest("button") || el.closest("a")) return true;
            if (el.getAttribute("role") === "button") return true;
            if (el.classList.contains("cursor-pointer")) return true;
            if (el.dataset.cursor === "pointer") return true;
            return false;
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            setIsHovering(isInteractive(target));
        };

        const handleMouseLeave = () => {
            isVisibleRef.current = false;
            setIsVisible(false);
        };
        const handleMouseEnter = () => {
            isVisibleRef.current = true;
            setIsVisible(true);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            cancelAnimationFrame(frameId);
            document.documentElement.classList.remove("custom-cursor-enabled");
            document.documentElement.style.cursor = "";
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [cursorX, cursorY]);

    if (!isEnabled) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none hidden md:flex items-center justify-center mix-blend-difference will-change-transform"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: "-50%",
                translateY: "-50%",
                opacity: isVisible ? 1 : 0,
                zIndex: 999999,
            }}
        >
            <motion.div
                className={cn(
                    "rounded-full flex items-center justify-center transition-colors duration-300",
                    isHovering ? "bg-white/15 border border-white/80" : "bg-transparent border border-white/55"
                )}
                animate={{
                    width: isHovering ? 40 : 24,
                    height: isHovering ? 40 : 24,
                }}
                transition={{ duration: 0.18, ease: "easeOut" }}
            >
                <motion.div
                    className="h-1 w-1 rounded-full bg-white"
                    animate={{
                        scale: isHovering ? 1.15 : 1,
                        opacity: 1,
                    }}
                    transition={{ duration: 0.18 }}
                />
            </motion.div>
        </motion.div>
    );
}
