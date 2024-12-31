import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TextTransition = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Front-End Developer",
    "Web Developer",
    "Graphic Designer",
    "Motion Designer",
  ];

  const handleNextText = () => {
    setTimeout(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Delay 3 detik
  };

  return (
    <div className="relative flex items-center justify-center h-full lg:w-[35vw] 2xl:w-[35vw] xl:w-[35vw] w-[66vw] max-[400px]:w-[65vw]  md:w-[50vw] bg-transparent ">
      <div className="relative w-full h-full overflow-hidden">
        {/* Text Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={textIndex}
            className="absolute w-fit text-center font-semibold  sm:text-2xl  text-[17px] text-gray-600  font-custom z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {texts[textIndex]}
          </motion.div>
        </AnimatePresence>

        {/* Box Animation */}
        <motion.div
          key={`box-${textIndex}`}
          className="absolute top-0 left-0 h-6 w-full bg-sky-400 z-20"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5 }}
          onAnimationComplete={() => handleNextText()}
        ></motion.div>
      </div>
    </div>
  );
};

export default TextTransition;
