"use client";

export default function SpecsGrid() {
    const specs = [
        { label: "ENGINE", value: "4.0L FLAT-6" },
        { label: "POWER", value: "518 HP" },
        { label: "TORQUE", value: "465 NM" },
        { label: "TRANS", value: "7-SP PDK" },
        { label: "0-100", value: "3.2 SEC" },
        { label: "NÜRBURG", value: "6:49.328" },
        { label: "DOWNFORCE", value: "860 KG" },
        { label: "V-MAX", value: "296 KM/H" },
    ];

    return (
        <section className="relative z-10 bg-black py-24 px-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-white mb-16 text-center tracking-widest">
                    TECHNICAL SPECIFICATIONS
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
                    {specs.map((spec, i) => (
                        <div key={i} className="bg-black p-8 flex flex-col items-center justify-center hover:bg-white/5 transition-colors duration-300 group">
                            <span className="text-gray-500 text-xs tracking-[0.2em] mb-2">{spec.label}</span>
                            <span className="text-2xl md:text-3xl font-display text-white group-hover:text-bugatti-gold transition-colors">
                                {spec.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
