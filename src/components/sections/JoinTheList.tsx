import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Send, Check } from "lucide-react";

export default function JoinTheList() {
  const { ref, isVisible } = useScrollReveal();
  const [email, setEmail] = useState("");
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <section
      id="join-the-list"
      ref={ref}
      className={cn(
        "relative py-24 md:py-32 bg-white transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="max-w-xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2
            className="text-[40px] font-bold tracking-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1A1A1A" }}
          >
            Get First Access
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280" }}
          >
            New drops, exclusive deals, and the stuff I'm actually excited about. No spam, ever.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input Group */}
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={cn(
                      "w-full py-4 pl-12 pr-4 text-base rounded-xl",
                      "border-2 border-gray-200 bg-white",
                      "focus:border-[#FF6B5B] focus:ring-0 focus:ring-offset-0",
                      "transition-all duration-300 ease-out",
                      "placeholder:text-gray-400"
                    )}
                    style={{ fontFamily: "'Inter', sans-serif", height: "56px" }}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className={cn(
                    "px-8 py-4 rounded-xl text-base font-medium",
                    "bg-[#FF6B5B] hover:bg-[#FF5A48] text-white",
                    "transition-all duration-300 ease-out",
                    "hover:scale-[1.02] hover:shadow-lg hover:shadow-[#FF6B5B]/25",
                    "active:scale-[0.98]",
                    "disabled:opacity-70 disabled:cursor-not-allowed"
                  )}
                  style={{ fontFamily: "'Inter', sans-serif", height: "56px" }}
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <span className="flex items-center gap-2">
                      Subscribe
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </div>

              {/* SMS Opt-in */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3 pt-2"
              >
                <Checkbox
                  id="sms-optin"
                  checked={smsOptIn}
                  onCheckedChange={(checked) => setSmsOptIn(checked as boolean)}
                  className={cn(
                    "w-4 h-4 rounded border-gray-300",
                    "data-[state=checked]:bg-[#FF6B5B] data-[state=checked]:border-[#FF6B5B]"
                  )}
                />
                <label
                  htmlFor="sms-optin"
                  className="text-xs cursor-pointer select-none"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#9CA3AF" }}
                >
                  Also send me SMS updates (optional)
                </label>
              </motion.div>

              {/* Social Proof */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center pt-4"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#9CA3AF" }}
              >
                Join 50,000+ others
              </motion.p>
            </form>
          ) : (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FF6B5B]/10 flex items-center justify-center"
              >
                <Check className="w-8 h-8 text-[#FF6B5B]" />
              </motion.div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1A1A1A" }}
              >
                You're in!
              </h3>
              <p
                className="text-base"
                style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280" }}
              >
                Check your inbox for a welcome surprise.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-50" />
    </section>
  );
}