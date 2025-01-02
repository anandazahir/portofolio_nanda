import RandomJapaneseText from "../Animations/RandomText";

import DividerY from "../Component/Divider-Y";
import DividerX from "../Component/Divider-X";
import Image from "../Component/Image";
import Introduction from "../Component/Introduction";
import TechStack from "../Component/TechStack";
import Education from "../Component/Education";
import Experience from "../Component/Experience";
import { useTheme } from "../Component/ThemeContext";

function About_Me() {
  const { isDarkMode } = useTheme();
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
        <Image></Image>
        {/* Divider Y (Row Span 3 in lg) */}
        <DividerY
          lineWidth="100%"
          lineColor={isDarkMode ? "white" : "black"}
          className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-span-3 md:col-start-2 md:col-end-3 md:row-start-1 h-full md:flex hidden"
        />

        {/* Row 1: Introduction */}
        <Introduction></Introduction>
        {/* Divider Y (Column 4 in lg) */}
        <DividerY
          lineWidth="100%"
          lineColor={isDarkMode ? "white" : "black"}
          className="lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-span-1 md:col-start-2 md:col-end-3 md:row-start-3 lg:flex hidden h-full"
        />

        {/* Row 1: Tech Stack */}
        <TechStack></TechStack>
        {/* Row 2: Divider X */}
        <DividerX
          lineWidth="100%"
          lineColor={isDarkMode ? "white" : "black"}
          className="lg:col-start-1 lg:col-end-2 lg:row-start-2 md:col-start-1 md:col-end-4 md:row-start-2 row-start-2"
        />
        <DividerX
          lineWidth="100%"
          lineColor={isDarkMode ? "white" : "black"}
          className="lg:col-start-3 lg:col-end-6 lg:row-start-2 md:col-start-1 md:col-end-4 md:row-start-4 row-start-4"
        />
        <DividerX
          lineWidth="100%"
          lineColor={isDarkMode ? "white" : "black"}
          className="lg:hidden md:col-start-1 md:col-end-4 md:row-start-6 row-start-2 row-start-6"
        />
        <DividerX
          lineWidth="100%"
          lineColor={isDarkMode ? "white" : "black"}
          className="sm:hidden row-start-8"
        />
        <DividerX
          lineWidth="100%"
          lineColor={isDarkMode ? "white" : "black"}
          className="sm:hidden row-start-10"
        />
        {/* Row 3: Education */}
        <Education></Education>
        {/* Row 3: Experience */}
        <Experience></Experience>
      </div>
    </div>
  );
}

export default About_Me;
