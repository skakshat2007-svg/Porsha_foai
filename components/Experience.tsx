"use client";

import { MotionValue, motion, useTransform } from "framer-motion";

interface ExperienceProps {
    scrollYProgress: MotionValue<number>;
}

export default function Experience({ scrollYProgress }: ExperienceProps) {
    // Phase 1: Hero (0 - 0.3)
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

    // Phase 2: Design (0.33 - 0.66)
    const designOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
    const designY = useTransform(scrollYProgress, [0.3, 0.4], [50, 0]);

    // Phase 3: Powertrain (0.66 - 0.9)
    const powerOpacity = useTransform(scrollYProgress, [0.6, 0.7, 0.9, 1], [0, 1, 1, 0]);
    const powerX = useTransform(scrollYProgress, [0.6, 0.7], [50, 0]);

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-10 flex flex-col justify-center px-8 md:px-24">

            {/* SECTION 1: HERO */}
            <motion.div
                style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
                className="absolute top-1/2 -translate-y-1/2 left-8 md:left-24 max-w-2xl"
            >
                <h3 className="text-bugatti-gold tracking-[0.3em] font-body text-sm mb-4 border-l-2 border-bugatti-gold pl-4">
                    BORN IN FLACHT
                </h3>
                <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 leading-tight text-glow">
                    PORSCHE <br /> 911 GT3 RS
                </h1>
                <div className="flex items-center gap-8 mb-8">
                    <div className="text-white/80 font-body tracking-wider border border-white/20 px-4 py-2 bg-black/40 backdrop-blur-sm">
                        PRICE: <span className="text-white font-bold">€300,000</span>
                    </div>
                    <div className="h-px w-20 bg-bugatti-gold/50"></div>
                </div>
                <p className="text-xl md:text-2xl font-body text-gray-300 max-w-lg mb-10">
                    “Motorsport Technology, Street Legal”
                </p>
            </motion.div>

            {/* SECTION 2: DESIGN */}
            <motion.div
                style={{ opacity: designOpacity, y: designY }}
                className="absolute top-1/2 -translate-y-1/2 right-8 md:right-24 max-w-xl text-right"
            >
                <div className="mb-6 flex justify-end">
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
                        DESIGN
                    </h2>
                </div>
                <div className="bg-black/60 backdrop-blur-md p-8 border-r-2 border-bugatti-gold relative">
                    {/* Decorative corners */}
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-bugatti-gold"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-bugatti-gold"></div>

                    <p className="text-lg md:text-xl font-body text-gray-200 leading-relaxed">
                        Intelligent lightweight construction, active aerodynamics with DRS, and extreme downforce.
                        The 911 GT3 RS is designed for maximum performance on the track.
                    </p>
                </div>
            </motion.div>

            {/* SECTION 3: POWERTRAIN */}
            <motion.div
                style={{ opacity: powerOpacity, x: powerX }}
                className="absolute top-1/2 -translate-y-1/2 right-8 md:right-24 text-right bg-black/80 backdrop-blur-lg p-10 border border-white/10"
            >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 border-b border-bugatti-gold/30 pb-4 inline-block">
                    POWERTRAIN
                </h2>

                <div className="space-y-6 font-body tracking-wider">
                    <div className="flex justify-between items-center gap-12">
                        <span className="text-gray-400">ENGINE</span>
                        <span className="text-xl text-white font-bold">4.0L FLAT-6 NA</span>
                    </div>
                    <div className="flex justify-between items-center gap-12">
                        <span className="text-gray-400">POWER</span>
                        <span className="text-xl text-bugatti-gold font-bold text-glow">518 HP</span>
                    </div>
                    <div className="flex justify-between items-center gap-12">
                        <span className="text-gray-400">TOP SPEED</span>
                        <span className="text-xl text-white font-bold">296 KM/H</span>
                    </div>
                    <div className="flex justify-between items-center gap-12">
                        <span className="text-gray-400">0–100 KM/H</span>
                        <span className="text-xl text-white font-bold">3.2s</span>
                    </div>
                </div>
            </motion.div>

            {/* Persistent Scroll Indicator */}
            <motion.div
                style={{ opacity: useTransform(scrollYProgress, [0.9, 1], [1, 0]) }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] tracking-[0.3em] text-white/50">SCROLL TO EXPLORE</span>
                <div className="w-px h-12 bg-gradient-to-b from-bugatti-gold to-transparent"></div>
            </motion.div>

        </div>
    );
}
