import React from "react";
import { motion } from "framer-motion";

const BiographySection = ({ text, imgSrc, reverse }) => {
  return (
    <motion.div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center my-12 gap-6`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="md:w-1/2 text-white text-lg leading-relaxed px-4">
        <p>{text}</p>
      </div>

      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={imgSrc}
          alt="Biography Illustration"
          className="rounded-lg shadow-md w-[90%] h-auto object-cover"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
};

export default BiographySection;
