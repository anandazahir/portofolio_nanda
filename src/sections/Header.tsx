import HoverLineThroughText from "../Animations/Linethrough";
import SwitchTheme from "../Animations/Test";
import { link } from "../utils/utils";
import { BrandAnimation } from "../Animations/BrandAnimation";

const Header = () => {
  const isMobile = window.innerWidth < 700 || window.innerHeight < 640;
  console.log(isMobile);
  return (
    <header className="fixed top-12 sm:top-0 sm:right-12 h-sm:right-[95%] right-[84%]  w-fit sm:w-5 h-fit sm:h-full z-50 ">
      <div className="flex flex-col  py-0 sm:py-8  h-full w-fit place-items-center">
        <BrandAnimation classNameText="text-5xl font-bold ">N</BrandAnimation>

        {isMobile ? null : (
          <div className=" flex-col h-full relative sm:flex h-sm:hidden hidden m-0 ">
            <ul className="flex-col place-content-around   flex h-[60%] ">
              {link.map((item, index) => (
                <li
                  key={index}
                  className="list-none cursor-pointer transform rotate-90 origin-center  w-4 whitespace-nowrap"
                >
                  <a href={item.link}>
                    <HoverLineThroughText
                      title={item.title}
                      className="sm:text-base text-2xl font-semibold text-white font-helvetica"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <div className="fixed bottom-5 flex-col flex gap-5 right-6">
              <div className="absolute -right-2 bottom-20">
                <SwitchTheme></SwitchTheme>
              </div>
              <a href="https://github.com/anandazahir" target="_blank">
                <i className="fa-brands fa-github fa-xl text-white hover:text-sky-400"></i>
              </a>
              <a href="https://instagram.com/ananda.zahir" target="_blank">
                <i className="fa-brands fa-instagram fa-xl text-white hover:text-sky-400"></i>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
