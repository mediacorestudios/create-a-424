import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Separator } from "@/components/ui/separator";
import { Heart, ExternalLink } from "lucide-react";

export default function CreatorFooter() {
  const { ref, isVisible } = useScrollReveal();

  const quickLinks = [
    { label: "Shop", href: "#shop" },
    { label: "About", href: "#about" },
    { label: "Collabs", href: "#collabs" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { 
      label: "TikTok", 
      href: "https://tiktok.com", 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    },
    { 
      label: "Instagram", 
      href: "https://instagram.com", 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      label: "YouTube", 
      href: "https://youtube.com", 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    { 
      label: "Twitter", 
      href: "https://twitter.com", 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
  ];

  const legalLinks = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ];

  return (
    <footer 
      ref={ref}
      className={cn(
        "relative bg-[#1A1A1A] py-16 md:py-20 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {/* Subtle grain overlay */}
      <div className="grain-overlay opacity-30" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Top Section - 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">
          
          {/* Column 1 - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center md:items-start"
          >
            <motion.span 
              className="text-5xl font-bold text-white tracking-tight"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              JM
            </motion.span>
            <p className="mt-4 text-sm text-gray-400 font-light leading-relaxed max-w-xs">
              Curating authentic style for the modern creator. Where influence meets intention.
            </p>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium mb-6">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-base text-white hover:text-[#FF6B5B] transition-colors duration-300 font-light"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Column 3 - Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium mb-6">
              Connect
            </h4>
            <div className="flex flex-row gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    "border border-gray-700 text-white",
                    "hover:bg-white/10 hover:border-gray-600",
                    "transition-all duration-300"
                  )}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isVisible ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="my-12"
        >
          <Separator className="bg-gray-800" />
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p className="text-sm text-gray-500 font-light flex items-center gap-2">
            © 2024 Jonaca Martin
            <span className="hidden md:inline text-gray-700">•</span>
            <span className="hidden md:flex items-center gap-1 text-gray-600">
              Made with <Heart className="w-3 h-3 text-[#FF6B5B] fill-[#FF6B5B]" />
            </span>
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            {legalLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300 font-light"
                whileHover={{ y: -1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Subtle glow effect at top */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255, 107, 91, 0.3), transparent)"
        }}
      />
    </footer>
  );
}