"use client";

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-bugatti-black/50 border-b border-white/10"
        >
            <div className="flex items-center gap-4">
                <span className="text-2xl font-display font-bold tracking-widest text-white">
                    PORSCHE
                </span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-body tracking-wider text-gray-300">
                <a href="#" className="hover:text-bugatti-gold transition-colors">MODELS</a>
                <a href="#" className="hover:text-bugatti-gold transition-colors">BRAND</a>
                <a href="#" className="hover:text-bugatti-gold transition-colors">OWNERSHIP</a>
            </div>

            <button className="px-6 py-2 text-xs font-bold tracking-widest text-black bg-bugatti-gold hover:bg-white transition-colors duration-300 transform hover:scale-105">
                INQUIRE NOW
            </button>
        </motion.nav>
    );
}
