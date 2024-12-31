import ScrollableElement from "../Animations/UseSroll";
import RandomJapaneseText from "../Animations/RandomText";
function Image() {
  return (
    <ScrollableElement className="text-white lg:col-start-1 lg:col-end-2 lg:row-start-1 md:col-start-1 md:col-end-2 md:row-start-1 flex items-center justify-center md:bg-[url('./public/foto_nanda.JPG')] md:bg-cover md:bg-no-repeat bg-none sm:rounded-lg rounded-[0px]">
      <RandomJapaneseText
        text="Nanda"
        useScroll={true}
        duration={0.5}
        className="absolute z-0 rotate-90 origin-center top-24 -left-24 md:-left-24 text-6xl text-sky-400 font-custom xl:top-36 lg:top-24"
      />
      <ScrollableElement className="block sm:hidden">
        <img
          src="src/public/Foto_Nanda.JPG"
          className="rounded-lg md:h-[40vh] md:w-[40vw] lg:h-[40vh] lg:w-[40vw] xl:w-[30vw] xl:h-[60vh] w-[90vw]"
          alt="foto_nanda"
        />
      </ScrollableElement>
    </ScrollableElement>
  );
}

export default Image;
