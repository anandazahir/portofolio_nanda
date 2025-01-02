import DropdownList from "./Dropdown";
import {
  variantChild4,
  lineVariants,
  lineVariantsX,
  ExperienceItem,
} from "../utils/utils";
import DividerX from "./Divider-X";
import { motion } from "framer-motion";

function Experience() {
  return (
    <DropdownList
      title="Experience"
      bg="transparent"
      className="p-0 h-full"
      classContainer="lg:col-start-3 lg:col-span-3 lg:row-start-3 md:col-start-1 md:col-end-4 md:row-start-5 row-start-9"
    >
      <div className="flex sm:flex-row flex-col sm:items-start items-center gap-20 relative h-full sm:justify-between">
        {ExperienceItem.map((item, index) => (
          <div
            className="dark:bg-gray-800 bg-gray-500 p-3 rounded-md flex flex-col z-10 gap-5 relative text-white border border-gray-700 lg:h-[85%] w-full"
            key={index}
          >
            <h2 className="font-custom text-sky-400 mb-5 lg:my-10">
              {item.company}
            </h2>
            <div className="relative text-white">
              <DividerX lineColor="rgb(209,213,219)" lineWidth="90%" />
              <span className="absolute -bottom-7 -left-1 font-semibold">
                {item.durationStart.split(" ")[0]}
              </span>
              <span className="absolute -bottom-12 -left-1 font-semibold">
                {item.durationStart.split(" ")[1]}
              </span>
              <span className="absolute -bottom-7 -right-1 font-semibold">
                {item.durationEnd.split(" ")[0]}
              </span>
              <span className="absolute -bottom-12 -right-1 font-semibold">
                {item.durationEnd.split(" ")[1]}
              </span>
            </div>
            <motion.p
              variants={variantChild4}
              className="text-[16px] mt-16 text-center font-semibold"
            >
              {item.title}
            </motion.p>
          </div>
        ))}

        <motion.hr
          style={{
            width: "100%",
            position: "absolute",
            top: "40%",
          }}
          variants={lineVariantsX}
          className="hidden sm:block border-solid border-[2px] dark:border-white border-black"
        />
        <motion.hr
          style={{
            width: "100%",
            position: "absolute",
            top: "40%",
          }}
          variants={lineVariants}
          className=" block sm:hidden rotate-[90deg] origin-center border-solid border-[2px] dark:border-white border-black"
        />
      </div>
    </DropdownList>
  );
}

export default Experience;
