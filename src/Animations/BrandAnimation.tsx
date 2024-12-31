"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  classNameText?: string;
}

export const BrandAnimation: React.FC<AnimatedButtonProps> = ({
  children,
  className = "",
  classNameText = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      className={`relative p-3 text-white rounded-md cursor-pointer ${className}`}
      onHoverStart={() => {
        setIsHovered(true);
      }}
      onHoverEnd={() => {
        setIsHovered(false);
      }}
      onFocus={() => {
        setIsHovered(true);
      }}
      whileTap={{ scale: 0.95 }}
      href="/"
    >
      <motion.span
        className={`absolute top-3  inset-3 text-sky-400 z-10 ${classNameText}`}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ originY: isHovered ? 1 : 0, borderRadius: "0.375rem" }}
      >
        {children}
      </motion.span>

      <span className={`relative z-0 text-white ${classNameText}`}>
        {children}
      </span>
    </motion.a>
  );
};
