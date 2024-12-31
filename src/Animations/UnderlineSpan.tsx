import React, { useState } from "react";
import { motion } from "framer-motion";

type UnderlineSpanProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  lineWidth?: string; // Custom width for the underline
  lineHeight?: string; // Custom height for the underline
};

const UnderlineSpan: React.FC<UnderlineSpanProps> = ({
  children,
  className = "",
  onClick,
  lineWidth = "100%", // Default underline width
  lineHeight = "2px", // Default underline height
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    if (onClick) onClick();
  };

  return (
    <motion.span
      className={`font-bold focus-visible cursor-pointer ${className}`}
      onClick={handleClick}
      initial={{
        backgroundSize: `0% ${lineHeight}`,
        backgroundPosition: "center right",
      }}
      animate={
        isClicked
          ? {
              backgroundSize: `${lineWidth} ${lineHeight}`,
              backgroundPosition: "center left",
            }
          : {}
      }
      whileHover={{
        backgroundSize: `${lineWidth} ${lineHeight}`,
        backgroundPosition: "center left",
      }}
      whileFocus={{
        backgroundSize: `${lineWidth} ${lineHeight}`,
        backgroundPosition: "center left",
      }}
      whileTap={{
        backgroundSize: `${lineWidth} ${lineHeight}`,
        backgroundPosition: "center left",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        display: "inline-block",
        backgroundImage: "linear-gradient(to right, #38bdf8, #38bdf8)",
        backgroundPosition: "center left",
        backgroundRepeat: "no-repeat",
        backgroundSize: `0% ${lineHeight}`,
      }}
    >
      {children}
    </motion.span>
  );
};

export default UnderlineSpan;
