import React from "react";
import { motion } from "framer-motion";
import heroImage01 from "../assets/heroImage01.JPEG";

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-center">
   
      <motion.img
        src={heroImage01} 
        alt="Emmanuel Linus"
        className="w-full h-full object-cover"
        loading="lazy"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

    
      <div className="absolute inset-0 bg-black/50"></div>

    
      <motion.div
        className="absolute inset-0 flex items-end justify-center pb-10 sm:pb-16 md:pb-20 lg:pb-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4 leading-snug md:leading-tight normal-case">
        Emmanuel Linus — CEO TalkMuch Global LTD
      </h2>

      </motion.div>
    </section>
  );
};

export default Hero;
