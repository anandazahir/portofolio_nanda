"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  classNameText?: string;
  variants?: any;
  isClick?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  onClick,
  children,
  className = "",
  classNameText = "",
  variants,
  isClick = false, // Default to false
}) => {
  const [isHovered, setIsHovered] = useState(isClick);

  useEffect(() => {
    setIsHovered(isClick);
  }, [isClick]);

  return (
    <motion.button
      className={`relative p-3 text-white rounded-md cursor-pointer ${className}`}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      variants={variants}
    >
      <motion.div
        className={`absolute inset-0 bg-sky-400 z-0 `}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ originX: isHovered ? 0 : 1, borderRadius: "0.375rem" }}
      />

      <span
        className={`relative z-10 ${
          isHovered ? "text-slate-800" : "text-slate-100"
        } ${classNameText}`}
      >
        {children}
      </span>
    </motion.button>
  );
};
