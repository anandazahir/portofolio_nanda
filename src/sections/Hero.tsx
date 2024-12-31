import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import TextTransition from "../Animations/textBox";
import RandomJapaneseText from "../Animations/RandomText";

interface Style {
  top: number;
  left: number;
  rotate: number;
}

const generateGridStyle = (
  index: number,
  rows: number,
  cols: number
): Style => {
  const isMobile = window.innerWidth < 900;

  let maxTop = isMobile ? 90 : 77;
  const minTop = 15;
  let maxLeft = isMobile ? 90 : 100;
  if (window.innerHeight < 640) {
    maxTop = 70;
    maxLeft = 100;
  }
  const row = Math.floor(index / cols);
  const col = index % cols;

  const cellWidth = maxLeft / cols;
  const cellHeight = (maxTop - minTop) / rows;

  const top = minTop + row * cellHeight + Math.random() * (cellHeight * 0.5);
  const left = col * cellWidth + Math.random() * (cellWidth * 0.5);
  const rotate = Math.random() * 60 - 30;

  return { top, left, rotate };
};

const Hero = () => {
  const containerRef = useRef(null);

  const text = "PORTOFOLIO";

  const randomStyles = useMemo(() => {
    const styles: Style[] = [];
    const rows = 3;
    const cols = Math.ceil(text.length / rows);
    text.split("").forEach((_, index) => {
      styles.push(generateGridStyle(index, rows, cols));
    });
    console.log(text);
    return styles;
  }, [text]);

  return (
    <div
      className="sm:mb-0 mb-10 h-sm:w-[100vw] w-[100vw] md:w-[87vw] lg:w-[95vw] sm:h-full h-[90vh]  flex justify-content-center items-center sm:pl-16 h-sm:pl-8 pl-8 z-20"
      style={{ touchAction: "pan-y" }}
    >
      <div
        className="w-full h-full flex flex-col place-content-center relative sm:py-0 py-10"
        ref={containerRef}
        style={{ touchAction: "pan-y" }}
      >
        <RandomJapaneseText
          text="Hi, I'm Nanda!"
          duration={1}
          useScroll={false}
          className="sm:text-6xl font-semibold text-[2rem] max-[400px]:text-[1.7rem] text-center text-sky-400  z-10 font-custom place-self-start"
        />

        <div className="flex gap-2">
          <h2 className="text-xl sm:text-2xl text-center text-gray-600 place-self-start z-10 font-custom flex">
            I'm a
          </h2>
          <TextTransition></TextTransition>
        </div>
        <motion.hr
          className="border-t-4 rounded-sm border-solid border-sky-400 z-10"
          initial={{ width: "0%" }}
          animate={{
            width: window.innerWidth < 900 ? "85%" : "43%", // Dynamically adjust width
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {text.split("").map((char, index) => {
          return (
            <motion.div
              key={index}
              className="absolute cursor-grab text-white font-black sm:text-[10rem] text-[6rem] h-sm:text-[6rem] z-0 font-custom"
              style={{
                top: `${randomStyles[index].top}%`,
                left: `${randomStyles[index].left}%`,
                transform: `rotate(${randomStyles[index].rotate}deg)`,
              }}
              drag
              dragConstraints={containerRef}
              initial={{
                y: -200, // Start off-screen above
                opacity: 0,
                rotate: 0,
              }}
              animate={{
                y: 0, // Fall to the intended position
                opacity: 1, // Fade in
                rotate: randomStyles[index].rotate, // Rotate slightly
              }}
              transition={{
                duration: 0.3 + index * 0.2, // Stagger the falling animations slightly
                ease: "easeOut", // Smooth easing for a falling effect
              }}
              whileDrag={{ scale: 1.2 }}
            >
              {char}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
