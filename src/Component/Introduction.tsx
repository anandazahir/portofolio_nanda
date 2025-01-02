import UnderlineSpan from "../Animations/UnderlineSpan";
import DropdownList from "./Dropdown";

function Introduction() {
  return (
    <DropdownList
      title="Introduction"
      setOpen={true}
      className="p-4 border dark:bg-gray-800 border-gray-700 flex items-center"
      bg="gray-500"
      classContainer="lg:col-start-3 lg:col-end-4 lg:row-start-1 md:col-start-3 md:col-end-4 md:row-start-1 row-start-3"
    >
      <p className="text-white  md:text-[20px] lg:text-xl text-center font-helvetica lg:my-10 xl:my-12">
        Hello, I'm{" "}
        <UnderlineSpan lineHeight="3px">Ananda Muhammad Zahir</UnderlineSpan>{" "}
        commonly called <UnderlineSpan lineHeight="3px">Nanda</UnderlineSpan>,
        and I'm from South Tangerang, Indonesia. I am a{" "}
        <UnderlineSpan lineHeight="3px">Front-End Developer</UnderlineSpan> who
        prioritises authentic work ethic and creativity to meet client
        satisfaction. I have experience for my projects.
      </p>
    </DropdownList>
  );
}

export default Introduction;
