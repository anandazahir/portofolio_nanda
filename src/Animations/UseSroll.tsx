import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

interface ScrollableElementProps {
  children: React.ReactNode;
  variants?: Variants;
  custom?: any; // Custom props for variants
  className?: string; // Additional classes

  onAnimationTrigger?: (state: boolean) => void; // Callback to notify parent about animation trigger
}

const defaultVariants: Variants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  closed: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const ScrollableElement: React.FC<ScrollableElementProps> = ({
  children,
  variants = defaultVariants,
  custom,
  className = "",

  onAnimationTrigger, // New callback prop
}) => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const ref = containerRef;
      if (!ref.current) return;

      const { top, bottom } = ref.current.getBoundingClientRect();
      const isVisible = top < window.innerHeight && bottom > 0;

      if (isVisible && !triggerAnimation) {
        setTriggerAnimation(true);
        if (onAnimationTrigger) onAnimationTrigger(true); // Notify parent
        window.removeEventListener("scroll", onScroll); // Remove listener after triggering
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Trigger on mount

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [triggerAnimation, onAnimationTrigger]);

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        initial="closed"
        animate={triggerAnimation ? "open" : "closed"}
        exit="closed"
        variants={variants}
        custom={custom}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollableElement;
