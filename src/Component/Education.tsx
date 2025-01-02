import DropdownList from "./Dropdown";
import DividerX from "./Divider-X";
import { motion } from "framer-motion";
import { variantChild2 } from "../utils/utils";

function Education() {
  return (
    <DropdownList
      title="Education"
      className="p-4 border dark:bg-gray-800 border-gray-700"
      bg="gray-500"
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
  );
}

export default Education;
