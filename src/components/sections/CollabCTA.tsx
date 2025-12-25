import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Sparkles, Send } from "lucide-react";

export default function CollabCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="collab-cta"
      ref={ref}
      className={cn(
        "relative py-16 md:py-20 overflow-hidden transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ backgroundColor: "#FF6B5B" }}
    >
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="geometric-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="white" />
              <rect x="10" y="10" width="8" height="8" fill="none" stroke="white" strokeWidth="1" transform="rotate(45 14 14)" />
              <polygon points="50,15 55,25 45,25" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
        </svg>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-8 left-[10%] w-16 h-16 rounded-full bg-white/10 blur-xl"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-12 right-[15%] w-24 h-24 rounded-full bg-white/5 blur-2xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Sparkle Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center justify-center mb-6"
        >
          <Sparkles className="w-8 h-8 text-white/80" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-[36px] font-bold text-white mb-4 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Let's Work Together
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-[18px] text-white/90 mb-10 max-w-md mx-auto leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Brands I believe in, partnerships that make sense.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className={cn(
              "rounded-full px-8 py-6 text-base font-semibold",
              "bg-white text-[#1A1A1A] hover:bg-white/95",
              "shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15",
              "transform transition-all duration-300 hover:scale-105",
              "w-full sm:w-auto"
            )}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            View Collabs
          </Button>

          <Button
            size="lg"
            variant="outline"
            className={cn(
              "rounded-full px-8 py-6 text-base font-semibold",
              "bg-transparent text-white border-2 border-white",
              "hover:bg-white/10 hover:border-white",
              "transform transition-all duration-300 hover:scale-105",
              "w-full sm:w-auto"
            )}
          >
            <Send className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-white/10 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-white/10 rounded-br-3xl" />
    </section>
  );
}