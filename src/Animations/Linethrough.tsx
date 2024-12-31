import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  bg?: string; // Optional background color prop
  className?: string; // Optional className for text
};

const HoverLineThroughText: React.FC<Props> = ({
  title,
  bg = "bg-sky-400", // Default Tailwind background class
  className, // Default text class
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const lineVariants = {
    hidden: { scaleX: 0, transformOrigin: "right" },
    visible: { scaleX: 1, transformOrigin: "left" },
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500); // Reset after animation
  };

  const currentAnimationState = isClicked
    ? "visible"
    : isHovered
    ? "visible"
    : isFocused
    ? "visible"
    : "hidden";

  return (
    <motion.div
      className="relative inline-block cursor-pointer sm:w-fit w-full"
      initial="hidden"
      whileHover="visible"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0} // Make it focusable
    >
      <span className={className}>{title}</span>

      <motion.div
        className={`absolute left-0 bottom-[34%] h-[3.5px] w-full ${bg}`}
        variants={lineVariants}
        initial="hidden"
        animate={currentAnimationState}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default HoverLineThroughText;
