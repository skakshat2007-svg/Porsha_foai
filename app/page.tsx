"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Navbar from "@/components/Navbar";
import ScrollCanvas from "@/components/ScrollCanvas";
import Experience from "@/components/Experience";
import SpecsGrid from "@/components/SpecsGrid";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-bugatti-gold selection:text-black">
      <Navbar />

      {/* 
        SCROLL CONTAINER
        Height 600vh ensures a long enough scroll distance 
        to play the 181 frames smoothly.
      */}
      <div ref={containerRef} className="relative h-[600vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <ScrollCanvas scrollYProgress={scrollYProgress} />
          <Experience scrollYProgress={scrollYProgress} />
        </div>
      </div>

      {/* STATIC CONTENT AFTER SCROLL */}
      <div className="relative z-10 bg-black">
        <SpecsGrid />
        <Features />
        <Footer />
      </div>
    </main>
  );
}
