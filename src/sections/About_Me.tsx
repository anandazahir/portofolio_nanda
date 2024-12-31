import React, { useRef } from "react";
import RandomJapaneseText from "../Animations/RandomText";
import { motion, Variants } from "framer-motion";
import ScrollableElement from "../Animations/UseSroll";
import DropdownList from "../Component/Dropdown";

import DividerY from "../Component/Divider-Y";
import DividerX from "../Component/Divider-X";

function About_Me() {
  const techStack = [
    {
      name: "Reactjs",
      style: {
        top: "83.1148%",
        left: "47.2385%",
        transform: "rotate(18.1042deg)",
      },
    },
    {
      name: "Tailwindcss",
      style: {
        top: "54.0783%",
        left: "1.6394%",
        transform: "rotate(-24.9739deg)",
      },
    },
    {
      name: "Laravel",
      style: {
        top: "1.532%",
        left: "5.0947%",
        transform: "rotate(12.5156deg)",
      },
    },
    {
      name: "Nextjs",
      style: {
        top: "30.3903%",
        left: "10.6405%",
        transform: "rotate(-16.2246deg)",
      },
    },
    {
      name: "MySQL",
      style: {
        top: "81.9333%",
        left: "1.6344%",
        transform: "rotate(-2.0139deg)",
      },
    },
    {
      name: "Figma",
      style: {
        top: "60.0318%",
        left: "65.2117%",
        transform: "rotate(1.47224deg)",
      },
    },
    {
      name: "Git",
      style: {
        top: "5%",
        left: "79.4529%",
        transform: "rotate(-26.3525deg)",
      },
    },
    {
      name: "TypeScript",
      style: {
        top: "20.0874%",
        left: "43.6673%",
        transform: "rotate(60.35624deg)",
      },
    },
  ];

  interface UnderlineSpanProps {
    children: React.ReactNode;
    className?: string;
  }

  const UnderlineSpan: React.FC<UnderlineSpanProps> = ({
    children,
    className = "",
  }) => {
    return (
      <motion.span
        className={`font-bold focus-visible cursor-pointer ${className}`}
        initial={{
          backgroundSize: "0% 2px",
          backgroundPosition: "center right",
        }}
        whileHover={{
          backgroundSize: "100% 2px",
          backgroundPosition: "center left",
        }}
        whileFocus={{
          backgroundSize: "100% 2px",
          backgroundPosition: "center left",
        }}
        whileTap={{
          backgroundSize: "100% 2px",
          backgroundPosition: "center left",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          display: "inline-block",
          backgroundImage: "linear-gradient(to right, black, black)",
          backgroundPosition: "center left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "0% 2px",
        }}
      >
        {children}
      </motion.span>
    );
  };

  const techStackVariants: Variants = {
    open: (custom: { index: number; techStack: typeof techStack }) => {
      const { index, techStack } = custom;

      const rotation = techStack[index]?.style.transform
        ? parseFloat(
            techStack[index].style.transform.match(/-?\d+(\.\d+)?/g)?.[0] || "0"
          )
        : 0;

      return {
        y: 0,
        rotate: rotation,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      };
    },
    closed: {
      y: -100,
      rotate: 0,
      transition: { duration: 0.3 },
    },
  };

  const variantChild2 = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
    closed: {
      opacity: 0,
      y: 50, // Starts below
      transition: { duration: 0.2 },
    },
  };

  const variantChild4 = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      opacity: 0,
      y: 50, // Starts below
    },
  };

  const lineVariants = {
    open: {
      scaleY: 1, // Vertical scaling
      opacity: 1,
      rotate: 90,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
    closed: {
      scaleY: 0, // Collapsed height
      opacity: 0,
      rotate: 90,
      transition: { duration: 0.1, ease: "easeIn" },
    },
  };

  const lineVariantsX = {
    open: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
    closed: {
      scaleX: 0,
      opacity: 0,
      transition: { duration: 0.1, ease: "easeIn" },
    },
  };

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full w-[100vw] md:w-[87vw] lg:w-[95vw] mt-24 sm:mt-0">
      <div
        className="bg-sky-400 text-black w-fit p-2 rounded-r-md mb-8"
        id="resume"
      >
        <RandomJapaneseText
          text="Resume."
          useScroll={true}
          className="text-xl font-custom font-[600]"
          duration={0.3}
        ></RandomJapaneseText>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[1fr_auto_1fr] lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-5 pl-8 pr-5 relative">
        {/* Row 1: Image */}
        <ScrollableElement className="text-white lg:col-start-1 lg:col-end-2 lg:row-start-1 md:col-start-1 md:col-end-2 md:row-start-1 flex items-center justify-center md:bg-[url('./assets/foto_nanda.JPG')] md:bg-cover md:bg-no-repeat bg-none sm:rounded-lg rounded-[0px]">
          <RandomJapaneseText
            text="Nanda"
            useScroll={true}
            duration={0.5}
            className="absolute z-0 rotate-90 origin-center top-24 -left-24 md:-left-24 text-6xl text-sky-400 font-custom xl:top-36 lg:top-24"
          />
          <ScrollableElement className="block sm:hidden">
            <img
              src="src/assets/Foto_Nanda.JPG"
              className="rounded-lg md:h-[40vh] md:w-[40vw] lg:h-[40vh] lg:w-[40vw] xl:w-[30vw] xl:h-[60vh] w-[90vw]"
              alt="foto_nanda"
            />
          </ScrollableElement>
        </ScrollableElement>

        {/* Divider Y (Row Span 3 in lg) */}
        <DividerY
          lineWidth="100%"
          lineColor="white"
          className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-span-3 md:col-start-2 md:col-end-3 md:row-start-1 h-full md:flex hidden"
        />

        {/* Row 1: Introduction */}
        <DropdownList
          title="Introduction"
          setOpen={true}
          className="p-4 border border-gray-700 flex items-center"
          bg="gray-800"
          classContainer="lg:col-start-3 lg:col-end-4 lg:row-start-1 md:col-start-3 md:col-end-4 md:row-start-1 row-start-3"
        >
          <p className="text-white md:text-[20px] lg:text-xl text-center font-helvetica lg:my-10 xl:my-12">
            Hello, I'm <UnderlineSpan>Ananda Muhammad Zahir</UnderlineSpan>{" "}
            commonly called <UnderlineSpan>Nanda</UnderlineSpan>, and I'm from
            South Tangerang, Indonesia. I am a{" "}
            <UnderlineSpan>Front-End Developer</UnderlineSpan> who prioritises
            authentic work ethic and creativity to meet client satisfaction. I
            have experience for my projects.
          </p>
        </DropdownList>

        {/* Divider Y (Column 4 in lg) */}
        <DividerY
          lineWidth="100%"
          lineColor="white"
          className="lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-span-1 md:col-start-2 md:col-end-3 md:row-start-3 lg:flex hidden h-full"
        />

        {/* Row 1: Tech Stack */}
        <DropdownList
          title="Tech Stack"
          bg="gray-800"
          setOpen={true}
          className="p-4 border border-gray-700 sm:h-[85%]"
          classContainer="lg:col-start-5 lg:col-end-6 lg:row-start-1 md:col-start-1 md:col-end-2 md:row-start-3 h-full row-start-5"
        >
          <div className="relative   sm:h-[100%] h-[60vh]" ref={containerRef}>
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={techStackVariants}
                style={tech.style}
                drag
                dragConstraints={containerRef}
                custom={{ index, techStack }}
                className="w-fit absolute p-3 rounded-md text-white bg-black underline font-helvetica font-base md:text-4xl lg:text-4xl text-5xl cursor-grab"
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </DropdownList>

        {/* Row 2: Divider X */}
        <DividerX
          lineWidth="100%"
          lineColor="white"
          className="lg:col-start-1 lg:col-end-2 lg:row-start-2 md:col-start-1 md:col-end-4 md:row-start-2 row-start-2"
        />
        <DividerX
          lineWidth="100%"
          lineColor="white"
          className="lg:col-start-3 lg:col-end-6 lg:row-start-2 md:col-start-1 md:col-end-4 md:row-start-4 row-start-4"
        />
        <DividerX
          lineWidth="100%"
          lineColor="white"
          className="lg:hidden md:col-start-1 md:col-end-4 md:row-start-6 row-start-2 row-start-6"
        />
        <DividerX
          lineWidth="100%"
          lineColor="white"
          className="sm:hidden row-start-8"
        />
        <DividerX
          lineWidth="100%"
          lineColor="white"
          className="sm:hidden row-start-10"
        />
        {/* Row 3: Education */}
        <DropdownList
          title="Education"
          className="p-4 border border-gray-700"
          bg="gray-800"
          classContainer="lg:col-start-1 lg:col-end-2 lg:row-start-3 md:col-start-3 md:col-end-4 md:row-start-3 row-start-7"
        >
          <div className="flex flex-col relative gap-10">
            <div className="text-white text-xl font-semibold font-helvetica">
              2021 - 2024
            </div>
            <DividerX lineColor="rgb(209, 213, 219)" lineWidth="100%" />
            <motion.h3
              variants={variantChild2}
              className="text-4xl  font-custom text-sky-400"
            >
              Diponegoro University
            </motion.h3>
            <motion.div
              className="text-white  text-xl w-fit p-1 rounded-md font-helvetica font-black"
              variants={variantChild2}
            >
              Computer Engineering
            </motion.div>
            <i className="absolute right-0 top-4 fa-solid fa-user-graduate absolute fa-2xl text-gray-500" />
          </div>
        </DropdownList>

        {/* Row 3: Experience */}
        <DropdownList
          title="Experience"
          bg="transparent"
          className="p-0 h-full"
          classContainer="lg:col-start-3 lg:col-span-3 lg:row-start-3 md:col-start-1 md:col-end-4 md:row-start-5 row-start-9"
        >
          <div className="flex sm:flex-row flex-col sm:items-start items-center gap-20 relative h-full sm:justify-between">
            <div className="bg-gray-800 p-3 rounded-md flex flex-col z-10 gap-5 relative text-white border border-gray-700 lg:h-[85%] w-full">
              <h2 className="font-custom text-sky-400 mb-5 lg:my-10">
                Jakarta Smart City
              </h2>
              <div className="relative text-white">
                <DividerX lineColor="rgb(209,213,219)" lineWidth="90%" />
                <span className="absolute -bottom-7 -left-1 font-semibold">
                  January
                </span>
                <span className="absolute -bottom-12 -left-1 font-semibold">
                  2023
                </span>
                <span className="absolute -bottom-7 -right-1 font-semibold">
                  February
                </span>
                <span className="absolute -bottom-12 -right-1 font-semibold">
                  2023
                </span>
              </div>
              <motion.p
                variants={variantChild4}
                className="text-[16px] mt-16 text-center font-semibold"
              >
                Internship Network Field Engineer
              </motion.p>
            </div>
            <motion.hr
              style={{
                border: "2px solid white",
                width: "100%",
                position: "absolute",
                top: "40%",
              }}
              variants={lineVariantsX}
              className="hidden sm:block"
            />
            <motion.hr
              style={{
                border: "2px solid white",
                width: "100%",
                position: "absolute",
                top: "40%",
              }}
              variants={lineVariants}
              className=" block sm:hidden rotate-[90deg] origin-center "
            />

            <div className="bg-gray-800 p-3 rounded-md flex flex-col z-10 gap-5 relative text-white border border-gray-700 lg:h-[85%] w-full">
              <h2 className="font-custom text-sky-400 mb-5 lg:my-10">
                PT Garbantara Depo
              </h2>
              <div className="relative text-white">
                <DividerX lineColor="rgb(209,213,219)" lineWidth="90%" />
                <span className="absolute -bottom-7 -left-1 font-semibold">
                  June
                </span>
                <span className="absolute -bottom-12 -left-1 font-semibold">
                  2023
                </span>
                <span className="absolute -bottom-7 -right-1 font-semibold">
                  August
                </span>
                <span className="absolute -bottom-12 -right-1 font-semibold">
                  2024
                </span>
              </div>
              <motion.p
                variants={variantChild4}
                className="text-[16px] mt-16 text-center font-semibold"
              >
                FrontEnd Developer
              </motion.p>
            </div>
          </div>
        </DropdownList>
      </div>
    </div>
  );
}

export default About_Me;
