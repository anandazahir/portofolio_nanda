import { useRef } from "react";
import DropdownList from "./Dropdown";
import { techStack, techStackVariants } from "../utils/utils";
import { motion } from "framer-motion";

function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
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
  );
}

export default TechStack;
