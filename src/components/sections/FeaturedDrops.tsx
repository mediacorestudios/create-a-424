import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Sparkles } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Glow Serum",
    tagline: "Your skin's new best friend",
    price: "$48",
    image: "images/a572538b-0329-43ba-b05d-1fd46a7b40b1.webp"
  },
  {
    id: 2,
    name: "Luna Hoops",
    tagline: "Everyday elegance, elevated",
    price: "$72",
    image: "images/a86adfa1-6f40-4192-a355-b06656f144df.webp"
  },
  {
    id: 3,
    name: "AirPod Case",
    tagline: "Protection meets aesthetic",
    price: "$34",
    image: "images/ae7a40bb-ea1b-4ec4-82cd-ae4f879ba6c7.webp"
  },
  {
    id: 4,
    name: "Amber Glow",
    tagline: "60 hours of cozy vibes",
    price: "$56",
    image: "images/b4868146-3a82-4c87-83a2-ce34d36b6b9d.webp"
  }
];

export default function FeaturedDrops() {
  const { ref, isVisible } = useScrollReveal();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="featured-drops"
      ref={ref}
      className={cn(
        "relative py-24 md:py-32 bg-white transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 
            className="text-[48px] leading-tight font-bold tracking-tight text-[#1A1A1A]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            My Current Obsessions
          </h2>
          <div className="mt-4 w-[40px] h-[3px] bg-[#FF6B5B] rounded-full" />
        </motion.div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden -mx-6 px-6">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px] snap-center"
              >
                <Card className="rounded-2xl shadow-md bg-white overflow-hidden border border-gray-100">
                  <div className="relative aspect-square overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                    <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors">
                      <Heart className="w-5 h-5 text-[#1A1A1A]" />
                    </button>
                  </div>
                  <div className="py-6 px-5">
                    <h3 
                      className="text-[18px] font-semibold text-[#1A1A1A] mb-1"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {product.name}
                    </h3>
                    <p 
                      className="text-[14px] text-gray-600 mb-3"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {product.tagline}
                    </p>
                    <p 
                      className="text-[20px] font-bold text-[#FF6B5B] mb-4"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {product.price}
                    </p>
                    <Button 
                      className="w-full bg-[#1A1A1A] hover:bg-[#FF6B5B] text-white rounded-xl py-3 font-medium transition-colors duration-300"
                    >
                      Get This
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: 3-Column Grid (showing 4 items) */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className="rounded-2xl shadow-md hover:shadow-xl bg-white overflow-hidden border border-gray-100 transition-shadow duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredCard === product.id ? 1.05 : 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <motion.button 
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart className={cn(
                      "w-5 h-5 transition-colors",
                      hoveredCard === product.id ? "text-[#FF6B5B]" : "text-[#1A1A1A]"
                    )} />
                  </motion.button>
                  {index === 0 && (
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#FF6B5B] text-white text-xs font-semibold rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Trending
                    </div>
                  )}
                </div>
                <div className="py-6 px-5">
                  <h3 
                    className="text-[18px] font-semibold text-[#1A1A1A] mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {product.name}
                  </h3>
                  <p 
                    className="text-[14px] text-gray-600 mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {product.tagline}
                  </p>
                  <p 
                    className="text-[20px] font-bold text-[#FF6B5B] mb-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {product.price}
                  </p>
                  <Button 
                    className="w-full bg-[#1A1A1A] hover:bg-[#FF6B5B] text-white rounded-xl py-3 font-medium transition-colors duration-300 group"
                  >
                    Get This
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-[#1A1A1A] font-semibold hover:text-[#FF6B5B] transition-colors group"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            View all my picks
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}