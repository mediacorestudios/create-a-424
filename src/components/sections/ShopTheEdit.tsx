import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  image: string;
  aspectRatio: "square" | "portrait";
}

const products: Product[] = [
  {
    id: 1,
    name: "Minimal Outfit Set",
    image: "images/601408a7-0d0e-426d-b355-12a2c6d58e0c.webp",
    aspectRatio: "portrait"
  },
  {
    id: 2,
    name: "Rose Glow Palette",
    image: "images/c16562fe-9669-4c61-982d-b9c2403f6937.webp",
    aspectRatio: "square"
  },
  {
    id: 3,
    name: "Daily Wellness",
    image: "images/09e0fd94-56bf-482e-908b-150627806534.webp",
    aspectRatio: "portrait"
  },
  {
    id: 4,
    name: "Storage Essentials",
    image: "images/8d3d6aeb-7191-4895-8133-c0a2e8c524a2.webp",
    aspectRatio: "square"
  },
  {
    id: 5,
    name: "Active Gear",
    image: "images/ecfdde24-91b5-49c9-9288-bea9f4dfe78e.webp",
    aspectRatio: "square"
  },
  {
    id: 6,
    name: "Tech Case",
    image: "images/1a47a44c-b073-4597-b488-6d77891927db.webp",
    aspectRatio: "portrait"
  },
  {
    id: 7,
    name: "Leather Tote",
    image: "images/c7af0099-23ed-48ff-975f-ed496cc5ad42.webp",
    aspectRatio: "square"
  },
  {
    id: 8,
    name: "Retro Shades",
    image: "images/e70819db-f627-42f4-b1b3-30b9ab852fb1.webp",
    aspectRatio: "portrait"
  }
];

export default function ShopTheEdit() {
  const { ref, isVisible } = useScrollReveal();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section
      id="shop-the-edit"
      ref={ref}
      className={cn(
        "relative py-24 md:py-32 bg-white transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[48px] md:text-[56px] lg:text-[64px] font-bold text-[#1A1A1A] leading-[1.1] tracking-[-0.02em]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The Full Edit
          </motion.h2>
          
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="group flex items-center gap-2 mt-4 sm:mt-0 text-[#1A1A1A] font-medium text-lg hover:text-[#FF6B5B] transition-colors duration-300"
          >
            <span>View All</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </div>

        {/* Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="columns-2 lg:columns-4 gap-4 space-y-4"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="break-inside-avoid"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded-xl cursor-pointer group",
                  product.aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
                )}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredId === product.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-[2px] flex flex-col items-center justify-center"
                >
                  <motion.span
                    initial={false}
                    animate={{
                      y: hoveredId === product.id ? 0 : 10,
                      opacity: hoveredId === product.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    className="text-white text-lg md:text-xl font-semibold text-center px-4 mb-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {product.name}
                  </motion.span>
                  
                  <motion.button
                    initial={false}
                    animate={{
                      y: hoveredId === product.id ? 0 : 10,
                      opacity: hoveredId === product.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="px-6 py-2 bg-white text-[#1A1A1A] text-sm font-medium rounded-full hover:bg-[#FF6B5B] hover:text-white transition-colors duration-300"
                  >
                    Shop
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mt-16 md:mt-20"
        >
          <Button
            variant="outline"
            className="group relative px-10 py-6 h-auto text-base font-semibold border-2 border-[#1A1A1A] text-[#1A1A1A] bg-transparent rounded-full hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Browse All Products
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </motion.div>
      </div>

      {/* Subtle grain overlay */}
      <div className="grain-overlay pointer-events-none" />
    </section>
  );
}