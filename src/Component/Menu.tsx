import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, SVGMotionProps } from "framer-motion";

import { link } from "../utils/utils";
import SwitchTheme from "../Animations/Test";
import UnderlineSpan from "../Animations/UnderlineSpan";
import { useTheme } from "./ThemeContext";

const variantItem = {
  open: { y: 0, opacity: 1 },
  closed: { y: 50, opacity: 0 },
};

const menu = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

interface MenuItemProps {
  isOpen: boolean;
  toggle: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ isOpen, toggle }) => {
  const handleItemClick = (callback: () => void) => {
    setTimeout(() => {
      callback();
    }, 300); // Delay untuk memungkinkan animasi selesai
  };
  const { isDarkMode } = useTheme();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          variants={menu}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          exit="closed"
          className="p-6 absolute top-28 h-sm:top-12 right-[57px] h-sm:right-[250px] flex flex-col gap-10 w-fit"
        >
          {link.map((item, index) => (
            <motion.li
              key={index}
              className="list-none mb-10 h-sm:mb-0 cursor-pointer text-center"
              variants={variantItem}
              onClick={() => handleItemClick(toggle)}
            >
              <a href={item.link}>
                <UnderlineSpan
                  className="sm:text-base text-2xl font-semibold dark:text-white font-helvetica"
                  lineHeight="4px"
                >
                  {item.title}
                </UnderlineSpan>
              </a>
            </motion.li>
          ))}
          <motion.li
            className="flex gap-8 w-full justify-center mt-24 h-sm:mt-0"
            variants={variantItem}
          >
            <SwitchTheme width="2em" height="2rem" />
            <a
              href="https://github.com/anandazahir"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-0"
            >
              <i className="fa-brands fa-github dark:text-white hover:text-sky-400 text-[3rem]"></i>
            </a>
            <a
              href="https://linkedin.com/in/anandazahir"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin dark:text-white hover:text-sky-400 text-[3rem]"></i>
            </a>
          </motion.li>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

type PathProps = SVGMotionProps<SVGPathElement> & { d?: string };

const Path: React.FC<PathProps> = (props) => {
  const { isDarkMode } = useTheme(); // Call the useTheme hook at the top level

  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={isDarkMode ? "hsl(0, 0.00%, 98.00%)" : "hsl(0, 0.00%, 20.00%)"} // Dynamic stroke color
      strokeLinecap="round"
      {...props} // Spread any additional props
    />
  );
};

const sidebar = {
  open: {
    y: -48,
    x: 20,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
    },
  },
  closed: {
    y: "-300%",
    x: 20,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const MenuToggle: React.FC<{ toggle: () => void }> = ({ toggle }) => (
  <button
    onClick={toggle}
    aria-label="Toggle Menu"
    className={`absolute top-[10px] right-[0] w-[50px] h-[50px] rounded-full text-white dark:hover:bg-white/20 hover:bg-black/20`}
  >
    <svg width="20" height="20" viewBox="0 0 23 23" className="mx-4">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

export const Menu: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Adjust this value to match your animation duration
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const toggleOpen = () => {
    setIsAnimating(true);
    setOpen((prevState) => !prevState);
  };

  return (
    <motion.nav
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="fixed top-12 right-5 h-10 w-fit sm:hidden h-sm:block z-40"
    >
      <AnimatePresence>
        {(isOpen || isAnimating) && (
          <motion.div
            className="absolute top-0 right-0 w-screen h-screen dark:bg-white/10 bg-black/10 backdrop-blur-md"
            variants={sidebar}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
          />
        )}
      </AnimatePresence>
      <MenuItem isOpen={isOpen} toggle={toggleOpen} />
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
};
