import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Play, Users, Award } from "lucide-react";

export default function SocialProofBar() {
  const { ref, isVisible } = useScrollReveal();
  const [animatedNumbers, setAnimatedNumbers] = useState({
    views: 0,
    community: 0,
    collabs: 0
  });

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setAnimatedNumbers({
          views: Math.floor(2.4 * easeOut * 10) / 10,
          community: Math.floor(150 * easeOut),
          collabs: Math.floor(50 * easeOut)
        });
        
        if (step >= steps) {
          clearInterval(timer);
          setAnimatedNumbers({ views: 2.4, community: 150, collabs: 50 });
        }
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    {
      number: `${animatedNumbers.views.toFixed(1)}M+`,
      label: "TikTok Views",
      icon: Play
    },
    {
      number: `${animatedNumbers.community}K+`,
      label: "Community",
      icon: Users
    },
    {
      number: `${animatedNumbers.collabs}+`,
      label: "Brand Collabs",
      icon: Award
    }
  ];

  return (
    <section
      id="socialproofbar"
      ref={ref}
      className={cn(
        "relative py-16 md:py-20 overflow-hidden transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ backgroundColor: "#1A1A1A" }}
    >
      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(26, 26, 26, 1) 0%, rgba(35, 35, 35, 1) 50%, rgba(26, 26, 26, 1) 100%)"
        }}
      />
      
      {/* Subtle grain texture */}
      <div className="grain-overlay" />
      
      {/* Sparkle particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? "#FF6B5B" : "rgba(255, 255, 255, 0.6)"
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Desktop: Horizontal layout */}
        <div className="hidden md:flex justify-around items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative">
                {/* Glow effect behind number */}
                <div 
                  className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundColor: "#FF6B5B" }}
                />
                
                <motion.p
                  className="relative font-bold text-white tracking-tight"
                  style={{ 
                    fontSize: "56px",
                    fontFamily: "'Space Grotesk', sans-serif",
                    lineHeight: 1
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.p>
              </div>
              
              <div className="flex items-center justify-center gap-2 mt-3">
                <stat.icon 
                  className="w-4 h-4 transition-colors duration-300"
                  style={{ color: "#FF6B5B" }}
                />
                <p 
                  className="text-sm uppercase tracking-widest"
                  style={{ 
                    color: "rgba(156, 163, 175, 1)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    letterSpacing: "0.1em"
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical stack */}
        <div className="flex md:hidden flex-col items-center space-y-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative">
                <div 
                  className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundColor: "#FF6B5B" }}
                />
                
                <motion.p
                  className="relative font-bold text-white tracking-tight"
                  style={{ 
                    fontSize: "48px",
                    fontFamily: "'Space Grotesk', sans-serif",
                    lineHeight: 1
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.p>
              </div>
              
              <div className="flex items-center justify-center gap-2 mt-2">
                <stat.icon 
                  className="w-4 h-4"
                  style={{ color: "#FF6B5B" }}
                />
                <p 
                  className="uppercase tracking-widest"
                  style={{ 
                    color: "rgba(156, 163, 175, 1)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    letterSpacing: "0.1em"
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-32"
        style={{
          background: "linear-gradient(90deg, transparent, #FF6B5B, transparent)"
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isVisible ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </section>
  );
}