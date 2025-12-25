import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function CreatorHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Shop", href: "#shop" },
    { label: "About", href: "#about" },
    { label: "Collabs", href: "#collabs" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          "h-[72px] md:h-[88px]",
          "px-6 md:px-12",
          isScrolled
            ? "backdrop-blur-xl bg-white/70 border-b border-[#1A1A1A]/5 shadow-[0_4px_30px_rgba(0,0,0,0.05)]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="h-full max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - Left */}
          <motion.a
            href="#"
            className="relative group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span
              className={cn(
                "font-bold text-2xl md:text-3xl tracking-tight transition-colors duration-300",
                "text-[#1A1A1A]"
              )}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              JM
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 h-[2px] bg-[#FF6B5B] origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ width: "100%" }}
            />
          </motion.a>

          {/* Navigation - Center (Desktop) */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium tracking-wide uppercase",
                  "text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors duration-300"
                )}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-[1px] bg-[#FF6B5B] origin-center"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={cn(
                "relative p-2.5 rounded-full transition-all duration-300",
                "hover:bg-[#1A1A1A]/5",
                "focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]/30"
              )}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5 text-[#1A1A1A]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5 text-[#1A1A1A]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Shop Now CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button
                className={cn(
                  "hidden sm:flex items-center gap-2",
                  "bg-[#FF6B5B] hover:bg-[#FF6B5B]/90 text-white",
                  "px-6 py-2.5 rounded-full font-medium text-sm tracking-wide",
                  "shadow-[0_4px_20px_rgba(255,107,91,0.3)] hover:shadow-[0_6px_30px_rgba(255,107,91,0.4)]",
                  "transition-all duration-300"
                )}
                asChild
              >
                <motion.a
                  href="#shop"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Shop Now
                </motion.a>
              </Button>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden p-2.5 rounded-full transition-all duration-300",
                "hover:bg-[#1A1A1A]/5",
                "focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]/30"
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-[#1A1A1A]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-[#1A1A1A]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-[#1A1A1A]/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Panel */}
            <motion.nav
              className={cn(
                "absolute top-[72px] left-0 right-0",
                "bg-white/95 backdrop-blur-xl",
                "border-b border-[#1A1A1A]/5",
                "shadow-[0_20px_60px_rgba(0,0,0,0.1)]",
                "px-6 py-8"
              )}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "text-2xl font-medium tracking-tight",
                      "text-[#1A1A1A] hover:text-[#FF6B5B]",
                      "transition-colors duration-300"
                    )}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="pt-4 border-t border-[#1A1A1A]/10"
                >
                  <Button
                    className={cn(
                      "w-full flex items-center justify-center gap-2",
                      "bg-[#FF6B5B] hover:bg-[#FF6B5B]/90 text-white",
                      "px-8 py-4 rounded-full font-medium text-base tracking-wide",
                      "shadow-[0_4px_20px_rgba(255,107,91,0.3)]",
                      "transition-all duration-300"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                    asChild
                  >
                    <a href="#shop">Shop Now</a>
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}