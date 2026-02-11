"use client";

import { motion } from "framer-motion";

export default function Features() {
    const features = [
        {
            title: "DRS SYSTEM",
            desc: "Drag Reduction System integrated into the rear wing for maximum straight-line speed."
        },
        {
            title: "LIGHTWEIGHT PLASTIC",
            desc: "Carbon fiber reinforced plastic (CFRP) used extensively for doors, wings, and roof."
        },
        {
            title: "WEISSACH PACKAGE",
            desc: "Optional package reducing weight further with carbon stabilizers and magnesium wheels."
        },
        {
            title: "4.0L BOXER ENGINE",
            desc: "High-revving naturally aspirated engine delivering instant throttle response."
        }
    ];

    return (
        <section className="bg-bugatti-black py-32 px-8 relative overflow-hidden">
            {/* Decorative background lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-20">
                    ENGINEERED ART
                </h2>

                <div className="grid md:grid-cols-2 gap-16">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="border-l border-bugatti-gold pl-8"
                        >
                            <h3 className="text-2xl font-display font-bold text-white mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 font-body leading-relaxed text-lg">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
