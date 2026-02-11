"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

interface ScrollCanvasProps {
    scrollYProgress: MotionValue<number>;
}

export default function ScrollCanvas({ scrollYProgress }: ScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const totalFrames = 181;
        const loadedImages: HTMLImageElement[] = [];

        // Preload all images
        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            img.src = `/images/buggati-sequence/${i}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalFrames) {
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    const drawFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const img = images[index];

        if (!canvas || !ctx || !img) return;

        // High DPI scaling
        const dpr = window.devicePixelRatio || 1;

        // Check if canvas size matches window
        if (canvas.width !== window.innerWidth * dpr || canvas.height !== window.innerHeight * dpr) {
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
        }

        // Clear and draw
        // Calculate containment logic
        const canvasRatio = window.innerWidth / window.innerHeight;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawHeight = window.innerHeight;
            drawWidth = drawHeight * imgRatio;
            offsetX = (window.innerWidth - drawWidth) / 2;
            offsetY = 0;
        } else {
            drawWidth = window.innerWidth;
            drawHeight = drawWidth / imgRatio;
            offsetX = 0;
            offsetY = (window.innerHeight - drawHeight) / 2;
        }

        // We don't need clearRect if we cover the whole screen, but good practice
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Listen to scroll changes
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;
        const frameIndex = Math.min(
            180,
            Math.max(0, Math.floor(latest * 180))
        );
        requestAnimationFrame(() => drawFrame(frameIndex));
    });

    // Initial draw once loaded
    useEffect(() => {
        if (isLoaded) {
            drawFrame(0);
        }
    }, [isLoaded]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (isLoaded) {
                const currentProgress = scrollYProgress.get();
                const frameIndex = Math.min(180, Math.max(0, Math.floor(currentProgress * 180)));
                drawFrame(frameIndex);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded]);

    return (
        <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-black overflow-hidden pointer-events-none">
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-50 bg-black">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-bugatti-gold animate-[width_2s_ease-in-out_infinite]" style={{ width: '50%' }}></div>
                        </div>
                        <span className="text-bugatti-gold font-display text-sm tracking-[0.2em] animate-pulse">
                            INITIALIZING SYSTEMS
                        </span>
                    </div>
                </div>
            )}
            <canvas
                ref={canvasRef}
                className="w-full h-full object-contain"
                style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.8s ease-out" }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#000000_130%)]" />
        </div>
    );
}
