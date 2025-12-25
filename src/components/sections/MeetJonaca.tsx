import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, Camera, Sparkles } from "lucide-react";

export default function MeetJonaca() {
  const { ref, isVisible } = useScrollReveal();

  const socialLinks = [
    { icon: Heart, label: "TikTok", href: "#" },
    { icon: Camera, label: "Instagram", href: "#" },
    { icon: Sparkles, label: "YouTube", href: "#" },
  ];

  return (
    <section
      id="meet-jonaca"
      ref={ref}
      className={cn(
        "relative py-24 md:py-32 lg:py-40 bg-[#F5F3F0] overflow-hidden transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative lg:-ml-8 lg:-mt-8">
              {/* Decorative background element */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#FF6B5B]/10 rounded-3xl transform rotate-3" />
              
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="images/93c3b493-4776-4e3d-9b43-a365f9afe67d.webp"
                  alt="Jonaca - Lifestyle and creator"
                  className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover"
                />
                
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/20 via-transparent to-transparent" />
              </div>

              {/* Floating accent element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 lg:-right-12 glass-panel rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#FF6B5B] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1A1A1A]">Creator</p>
                    <p className="text-xs text-gray-500">& Curator</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative text-center lg:text-left"
          >
            {/* Coral accent line - desktop only */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF6B5B] via-[#FF6B5B]/50 to-transparent rounded-full" />
            
            <div className="lg:pl-8">
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-[40px] font-bold text-[#1A1A1A] tracking-tight mb-8"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Hey, I'm{" "}
                <span className="relative inline-block">
                  Jonaca
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={isVisible ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FF6B5B] rounded-full origin-left"
                  />
                </span>
              </motion.h2>

              {/* Bio text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4 mb-10"
              >
                <p className="text-lg md:text-[18px] leading-relaxed text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                  I started this journey because I believe everyone deserves access to products that actually work—without the endless scrolling and second-guessing. What began as sharing my favorite finds with friends turned into a community of thousands who trust my recommendations.
                </p>
                <p className="text-lg md:text-[18px] leading-relaxed text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Every single item in my shop has been personally tested, loved, and re-purchased. I'm obsessed with quality, sustainability, and finding those hidden gems that make everyday life feel a little more special.
                </p>
                <p className="text-lg md:text-[18px] leading-relaxed text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                  When I'm not curating, you'll find me exploring local coffee shops, experimenting with new skincare routines, or convincing my friends they need yet another candle. Welcome to my world—I'm so glad you're here.
                </p>
              </motion.div>

              {/* Social icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center",
                      "text-[#1A1A1A] transition-all duration-300",
                      "hover:border-[#FF6B5B] hover:text-[#FF6B5B] hover:shadow-lg hover:shadow-[#FF6B5B]/20"
                    )}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>

              {/* Optional CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-10"
              >
                <Button
                  variant="outline"
                  className={cn(
                    "px-8 py-6 text-base font-medium rounded-full",
                    "border-2 border-[#1A1A1A] text-[#1A1A1A]",
                    "hover:bg-[#1A1A1A] hover:text-white",
                    "transition-all duration-300"
                  )}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Let's Connect
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle grain overlay */}
      <div className="grain-overlay" />
    </section>
  );
}