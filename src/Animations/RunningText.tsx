"use client";

import React from "react";
import { motion } from "framer-motion";

const RunningText: React.FC = () => {
  const words = Array(100).fill("Thank You");

  return (
    <div className="overflow-hidden bg-white py-3">
      <motion.div
        className="whitespace-nowrap flex"
        animate={{
          x: [0, -1920], // Assuming a standard 1920px wide screen
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        whileHover={{ x: 0 }} // Stop the animation on hover
        whileTap={{ x: 0 }} // Stop the animation on tap
      >
        {words.map((word, index) => (
          <span
            key={index}
            className="text-xl font-bold text-blade font-custom mx-3"
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default RunningText;
