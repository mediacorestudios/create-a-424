import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export default function CreatorHero() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      id="creator-hero"
      ref={ref}
      className={cn(
        "relative min-h-screen flex items-center transition-all duration-700 overflow-hidden",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F3F0 100%)",
      }}
    >
      {/* Subtle grain overlay */}
      <div className="grain-overlay" />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Mobile: Image first */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            animate={isVisible ? { opacity: 1, y: 0, rotate: -2 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:hidden flex justify-center"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl bg-[#F5F3F0] transform translate-x-4 translate-y-4"
                style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              />
              <div
                className="relative rounded-3xl overflow-hidden bg-[#F5F3F0]"
                style={{
                  boxShadow:
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                }}
              >
                <img
                  src="images/e7adeaa6-fd0d-454b-96a6-96f9aca903ef.webp"
                  alt="Jonaca Martin"
                  className="w-full max-w-[320px] h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
          {/* Left side - Typography (60% on desktop) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-2 md:space-y-4"
            >
              {/* JONACA - Filled */}
              <h1
                className="font-bold tracking-tight text-[#1A1A1A] leading-none"
                style={{
                  fontSize: "clamp(64px, 12vw, 140px)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                }}
              >
                JONACA
              </h1>
              {/* MARTIN. - Outline only */}
              <h1
                className="leading-none"
                style={{
                  fontSize: "clamp(56px, 10vw, 120px)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "transparent",
                  WebkitTextStroke: "2px #1A1A1A",
                }}
              >
                MARTIN.
              </h1>
            </motion.div>
            {/* Positioning line */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-8 md:mt-12 text-[#1A1A1A] font-light text-lg md:text-xl tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Creator. Curator. Obsessed with what works.
            </motion.p>
            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center lg:items-start gap-6"
            >
              <Button
                className="group relative py-6 px-10 text-lg font-medium text-white rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#FF6B5B",
                  boxShadow:
                    "0 10px 40px -10px rgba(255, 107, 91, 0.5), 0 4px 6px -2px rgba(255, 107, 91, 0.3)",
                }}
              >
                Shop My Picks
                <ArrowRight className="ml-2 w-5 h-5 inline-block transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <a
                href="#"
                className="group flex items-center gap-2 text-[#1A1A1A] font-medium text-base hover:text-[#FF6B5B] transition-colors duration-300"
              >
                Follow on TikTok
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
          {/* Right side - Image (40% on desktop, hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 0 }}
            animate={isVisible ? { opacity: 1, y: 0, rotate: -2 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Layered shadow background */}
              <div
                className="absolute inset-0 rounded-3xl bg-[#F5F3F0] transform translate-x-6 translate-y-6"
                style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
              />
              <div
                className="absolute inset-0 rounded-3xl bg-[#EAE7E3] transform translate-x-3 translate-y-3"
                style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              />
              {/* Main image container */}
              <div
                className="relative rounded-3xl overflow-hidden bg-[#F5F3F0]"
                style={{
                  boxShadow:
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                }}
              >
                <img
                  src="images/e7adeaa6-fd0d-454b-96a6-96f9aca903ef.webp"
                  alt="Jonaca Martin"
                  className="w-full max-w-[400px] xl:max-w-[480px] h-auto object-cover"
                />
                {/* Subtle overlay gradient */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 60%, rgba(245, 243, 240, 0.3) 100%)",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.5 } : {}}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2 text-[#1A1A1A]/40">
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#1A1A1A]/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}