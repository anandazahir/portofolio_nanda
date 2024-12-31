import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface DividerProps {
  lineWidth?: string;
  lineColor?: string;
  rhombusSize?: string;
  duration?: number;
  triggerAnimation?: boolean;
  className?: string;
}

const DividerY: React.FC<DividerProps> = ({
  lineWidth = "200px",
  lineColor = "black",
  rhombusSize = "16px",
  duration = 0.6,
  triggerAnimation: externalTrigger,
  className,
}) => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (externalTrigger !== undefined) {
      setTriggerAnimation(externalTrigger);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggerAnimation(true);
        }
      },
      { threshold: 0.5 }
    );

    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }

    return () => {
      if (dividerRef.current) {
        observer.unobserve(dividerRef.current);
      }
    };
  }, [externalTrigger]);

  const lineVariants = {
    open: {
      scaleY: 1,
      transition: { duration, ease: "easeOut" },
    },
    closed: {
      scaleY: 0,
      transition: { duration, ease: "easeIn" },
    },
  };

  const rhombusVariants = {
    open: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.3 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div
      ref={dividerRef}
      className={`flex flex-col justify-center items-center m-0 p-0 relative ${className}`}
    >
      <motion.div
        className="rotate-45"
        style={{
          width: rhombusSize,
          height: rhombusSize,
          backgroundColor: lineColor,
        }}
        variants={rhombusVariants}
        initial="closed"
        animate={triggerAnimation ? "open" : "closed"}
      />
      <motion.div
        className="w-[2px] origin-center"
        style={{ height: lineWidth, backgroundColor: lineColor }}
        variants={lineVariants}
        initial="closed"
        animate={triggerAnimation ? "open" : "closed"}
      />
      <motion.div
        className="rotate-45"
        style={{
          width: rhombusSize,
          height: rhombusSize,
          backgroundColor: lineColor,
        }}
        variants={rhombusVariants}
        initial="closed"
        animate={triggerAnimation ? "open" : "closed"}
      />
    </div>
  );
};

export default DividerY;
