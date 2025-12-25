import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function WhyIRecommend() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="why-i-recommend"
      ref={ref}
      className={cn(
        "relative py-24 md:py-32 lg:py-40 overflow-hidden transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ backgroundColor: "#F5F3F0" }}
    >
      {/* Decorative floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 0.05, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full"
          style={{ backgroundColor: "#FF6B5B" }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 0.03, scale: 1 } : {}}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
          className="absolute top-1/2 -right-32 w-80 h-80 rounded-full"
          style={{ backgroundColor: "#FF6B5B" }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 0.04, scale: 1 } : {}}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }}
          className="absolute -bottom-16 left-1/3 w-64 h-64 rounded-full"
          style={{ backgroundColor: "#FF6B5B" }}
        />
      </div>

      {/* Grain overlay */}
      <div className="grain-overlay" />

      <div className="relative max-w-3xl mx-auto px-6 md:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isVisible ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-8"
            style={{ backgroundColor: "rgba(255, 107, 91, 0.1)" }}
          >
            <Heart className="w-6 h-6" style={{ color: "#FF6B5B" }} />
          </motion.div>
          
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
            style={{ 
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#1A1A1A"
            }}
          >
            Why I Only Share What I Actually Use
          </h2>
        </motion.div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          {/* Decorative quotation mark */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 0.15, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -top-8 -left-4 md:-left-8 text-[120px] md:text-[160px] leading-none font-serif select-none"
            style={{ 
              color: "#FF6B5B",
              fontFamily: "'DM Serif Display', serif"
            }}
          >
            "
          </motion.span>

          {/* Quote text */}
          <blockquote className="relative z-10 text-center px-4 md:px-12">
            <p
              className="text-xl md:text-2xl lg:text-[26px] leading-relaxed md:leading-relaxed italic"
              style={{ 
                fontFamily: "'DM Serif Display', serif",
                color: "#4A4A4A"
              }}
            >
              Every product in my collection has earned its place through real use, 
              genuine love, and countless recommendations to friends and family. 
              I believe in quality over quantity—if it doesn't make my life genuinely better, 
              it doesn't make the cut. This isn't about trends or sponsorships; 
              it's about sharing the things that have become essential to my daily life.
            </p>
          </blockquote>

          {/* Decorative elements */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center mt-12 md:mt-16"
          >
            <div 
              className="w-20 h-px"
              style={{ backgroundColor: "#D1D1D1" }}
            />
          </motion.div>

          {/* Author attribution */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col items-center mt-6"
          >
            <span
              className="text-sm tracking-[0.25em] uppercase font-medium"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                color: "#1A1A1A"
              }}
            >
              Jonaca
            </span>
            <motion.div
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1.1, type: "spring" }}
              className="mt-3"
            >
              <Sparkles 
                className="w-4 h-4" 
                style={{ color: "#FF6B5B" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom decorative accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 0.3, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 1.3 + i * 0.1 }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#FF6B5B" }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}