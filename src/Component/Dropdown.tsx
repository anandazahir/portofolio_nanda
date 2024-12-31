import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import RandomJapaneseText from "../Animations/RandomText";
import ScrollableElement from "../Animations/UseSroll";

interface DropdownProps {
  children: React.ReactNode;
  bg?: string;
  title: string;
  setOpen?: boolean;
  className?: string;
  tops?: string;
  isVisible?: boolean;
  fontSize?: string;
  classContainer?: string;
}

// Additional type for child props
interface ChildProps {
  isOpen?: boolean;
}

const DropdownList: React.FC<DropdownProps> = ({
  children,
  bg = "sky-400",
  title,
  setOpen = true,
  className,
  tops = "4",
  isVisible = true,
  fontSize = "2xl",
  classContainer,
}) => {
  const [isOpen, setIsOpen] = useState(setOpen);
  const [shouldRender, setShouldRender] = useState(setOpen);

  useEffect(() => {
    if (setOpen) {
      setIsOpen(true);
      setShouldRender(true);
    } else {
      setIsOpen(false);
      // Delay unmounting for animation
      setTimeout(() => setShouldRender(false), 300); // Match animation duration
    }
  }, [setOpen]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      setShouldRender(true);
    } else {
      setTimeout(() => setShouldRender(false), 300); // Match animation duration
    }
  };

  const containerVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  const textVariants = {
    open: { opacity: 1, y: 0, duration: 1, easeInOut },
    closed: { opacity: 0, y: -50, duration: 2, easeInOut },
  };

  return (
    isVisible && (
      <motion.div
        className={`text-white relative w-full ${classContainer}`}
        variants={textVariants}
        initial="closed"
        animate={isVisible ? "open" : "closed"}
      >
        <RandomJapaneseText
          text={title}
          duration={0.3}
          useScroll={true}
          className={`text-${fontSize} my-4 font-custom`}
        />
        <button
          onClick={toggleDropdown}
          className={`absolute top-${tops} right-0 cursor-pointer w-10 bg-white w-fit rounded-full`}
        >
          <motion.i
            className="fa-solid fa-circle-chevron-down text-gray-800 fa-xl"
            variants={iconVariants}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          ></motion.i>
        </button>

        <AnimatePresence>
          {shouldRender && (
            <motion.div
              key="dropdown"
              initial="closed"
              animate="open"
              exit="closed"
              variants={containerVariants}
              className={`bg-${bg} rounded-lg overflow-hidden w-full  ${className}`}
            >
              <ScrollableElement className="h-full">
                {React.Children.map(children, (child) => {
                  if (React.isValidElement<ChildProps>(child)) {
                    return React.cloneElement(child, { isOpen });
                  }
                  return child;
                })}
              </ScrollableElement>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    )
  );
};

export default DropdownList;
