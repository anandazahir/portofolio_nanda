import DropdownList from "./Dropdown";
import { variantChild4, lineVariants, lineVariantsX } from "../utils/utils";
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
  );
}

export default Experience;
