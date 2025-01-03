import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypingAnimation from "../Animations/TypingAnimation";
import DropdownList from "../Component/Dropdown";
import Divider from "../Component/Divider-X";
import { AnimatedButton } from "../Animations/AnimatedButton";
import ScrollableElement from "../Animations/UseSroll";

function Projects() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSet, setIsSet] = useState(true);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // Track active dropdown
  const [IsOpen, setIsOpen] = useState(false); // Track active dropdow
  const [activeButton, setActiveButton] = useState<string | null>(null); // Track the active button
  const isMobile = window.innerWidth < 1000;
  const variantSearchBar = {
    closed: {
      scale: 1,
      x: 0,
      y: 0,
      borderRadius: "50%",
      backgroundColor: "#FFFFFF",
      width: "fit-content",
      rotate: 0,
      transition: { duration: 1 },
    },
    open: {
      scale: 1,
      x: "0rem",
      y: "-2rem",
      borderRadius: "0.5rem",
      backgroundColor: "#1f2937",
      borderLeft: "2px solid #6b7280",
      borderBottom: "2px solid #6b7280",
      borderTop: "2px solid #6b7280",
      width: isMobile ? "85vw" : "47vw",
      rotate: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  // Variants for container and buttons with transition inside states
  const variantContainer = {
    closed: { opacity: 0, y: -100, transition: { duration: 1 } }, // Hidden above
    open: { opacity: 1, y: 0, transition: { duration: 1 } }, // Visible
  };

  const variantButton = {
    closed: { opacity: 0, y: -50, transition: { duration: 1 } },
    open: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const variantChild2 = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
    closed: {
      opacity: 0,
      y: 50, // Starts below
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  const handleDropdownClick = (dropdownName: string, buttonId: string) => {
    const isSameDropdown = activeDropdown === dropdownName; // Check if the same dropdown is clicked
    const willOpen = !isSameDropdown || !IsOpen;
    setActiveButton(activeButton === buttonId ? null : buttonId);

    if (activeDropdown !== null) {
      // Jika activeDropdown tidak null, pastikan setActiveDropdown memiliki delay lebih lama

      if (willOpen) {
        // Reset to false first, then open

        setIsOpen(false); // Reset immediately
        setTimeout(() => {
          setIsOpen(true);
        }, 500);

        setTimeout(() => {
          setActiveDropdown(isSameDropdown ? null : dropdownName);
        }, 600);
      } else {
        // Menutup dropdown

        setTimeout(() => {
          setIsOpen(false);
        }, 500);

        setTimeout(() => {
          setActiveDropdown(isSameDropdown ? null : dropdownName);
        }, 600);
        setTimeout(() => {
          setIsSet(isSameDropdown);
          console.log(isSet);
        }, 1000);
      }
    } else {
      setTimeout(() => {
        setIsOpen(true);
      }, 500);
      setIsSet(isSameDropdown);
      setActiveDropdown(isSameDropdown ? null : dropdownName);
    }
  };

  return (
    <div
      className="mt-40 lg:mt-40 text-white h-full w-full lg:w-[95vw] md:w-[90vw] flex flex-col items-center justify-center pl-8 lg:pl-0 pr-5 relative gap-20 "
      id="portofolio"
    >
      <ScrollableElement
        className={`border-solid border-gray-500 border-[5px] relative p-5 flex items-start rounded-lg flex-col w-full lg:w-[50%] ${
          isSet ? "h-[50vh] " : ""
        } `}
        variants={variantContainer}
        onAnimationTrigger={(state) => setIsScrolled(state)}
      >
        <div className="grid grid-cols-3 gap-2">
          <AnimatedButton
            onClick={() => handleDropdownClick("simgd", "button1")}
            className="dark:bg-gray-800 bg-gray-500"
            classNameText="text-slate-400 underline"
            isClick={activeButton === "button1"}
          >
            SIMGD
          </AnimatedButton>
          <AnimatedButton
            className="dark:bg-gray-800 bg-gray-500 col-span-2"
            classNameText="text-slate-500 underline"
            onClick={() => handleDropdownClick("profilesajen", "button2")}
            variants={variantButton}
            isClick={activeButton === "button2"}
          >
            Profile Desa Sajen
          </AnimatedButton>

          <motion.button
            className="p-3 underline bg-white text-black rounded-md col-span-2 w-28 cursor-pointer"
            variants={variantButton}
          >
            MIM Sajen
          </motion.button>
        </div>

        <motion.div
          className=" rounded-lg absolute  -top-3 p-3 -right-2 w-full "
          variants={variantSearchBar}
        >
          {isScrolled ? (
            <div>
              <TypingAnimation />
              <div className="bg-white w-fit p-3 rounded-r-lg absolute top-0 right-0">
                <i className="fa-solid fa-magnifying-glass text-black fa-l"></i>
              </div>
            </div>
          ) : (
            <div className="bg-white w-fit p-3 rounded-full">
              <i className="fa-solid fa-magnifying-glass text-black fa-l"></i>
            </div>
          )}
        </motion.div>
        <div className="w-full">
          <DropdownList
            title="2. PROFILE SAJEN"
            bg="gray-500"
            tops="0"
            isVisible={activeDropdown === "profilesajen"}
            setOpen={IsOpen}
            fontSize="l"
            className="border-solid dark:bg-gray-800 border-[2px] dark:border-gray-500 border-gray-800"
          >
            <div className="flex flex-col    gap-3 text-white p-3 justify-center">
              <img
                src="/simgd.png"
                alt="SIMGD"
                className="rounded-lg lg:w-[30vw] place-self-center"
              />
              <Divider lineColor="white" lineWidth="100%"></Divider>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex justify-between">
                <a
                  className="bg-black p-2 rounded-lg text-white flex gap-2"
                  href="/"
                >
                  <span className="font-semibold">Visit Link</span>
                  <img src="/arrow.svg" alt="" className="w-6 h-6 text-white" />
                </a>
                <div className="flex gap-2">
                  <div className="rounded-full bg-black p-2">
                    <img src="/Laravel.png" alt="" className="w-6 h-6" />
                  </div>
                  <div className="rounded-full bg-black p-2">
                    <img src="/tailwind.png" alt="" className="w-6 h-6" />
                  </div>
                  <div className="rounded-full bg-black p-2">
                    <img src="/MySQL.png" alt="" className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </DropdownList>
        </div>
      </ScrollableElement>

      {isSet ? (
        <AnimatePresence>
          <ScrollableElement
            variants={variantChild2}
            className="absolute right-0 -bottom-20 "
          >
            {" "}
            <motion.h1 className="font-custom text-5xl ">PROJECT</motion.h1>
          </ScrollableElement>
        </AnimatePresence>
      ) : (
        ""
      )}

      {!isSet && <Divider lineColor="white" lineWidth="80vw"></Divider>}
    </div>
  );
}

export default Projects;
