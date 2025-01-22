"use client";

import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <AuroraBackground className="relative w-screen h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
              type: "spring",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-5xl font-bold dark:text-white text-center">
                Discover the Best Talent, Anytime, Anywhere
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                Hire verified experts in just a few clicks.
            </div>
            
          </motion.div>
        </AuroraBackground>
        
      );
}
