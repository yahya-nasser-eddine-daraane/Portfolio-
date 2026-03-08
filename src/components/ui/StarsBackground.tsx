"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
}

export const StarsBackground = () => {
    const [stars, setStars] = useState<Star[]>([]);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const generatedStars = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 3 + 2,
        }));
        setStars(generatedStars);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            {stars.map((star) => (
                <StarItem key={star.id} star={star} springX={springX} springY={springY} />
            ))}
        </div>
    );
};

const StarItem = ({ star, springX, springY }: { star: Star; springX: any; springY: any }) => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = () => {
            // Small parallax effect based on mouse spring position
            const dx = (springX.get() - window.innerWidth / 2) * (star.size / 100);
            const dy = (springY.get() - window.innerHeight / 2) * (star.size / 100);
            setOffset({ x: dx, y: dy });
        };

        const unsubscribeX = springX.on("change", updatePosition);
        const unsubscribeY = springY.on("change", updatePosition);

        return () => {
            unsubscribeX();
            unsubscribeY();
        };
    }, [springX, springY, star.size]);

    return (
        <motion.div
            className="absolute bg-white rounded-full shadow-[0_0_2px_rgba(255,255,255,0.8)]"
            style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                x: offset.x,
                y: offset.y,
            }}
            animate={{
                opacity: [0.3, 0.9, 0.3],
                scale: [1, 1.2, 1],
            }}
            transition={{
                duration: star.duration,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
};
