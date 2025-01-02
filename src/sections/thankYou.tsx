import ScrollableElement from "../Animations/UseSroll";
import ContactForm from "../Component/MessageForm";
import RandomJapaneseText from "../Animations/RandomText";
function ThankYou() {
  return (
    <ScrollableElement className="dark:text-white font-custom w-full lg:w-[95vw] md:w-full flex flex-col  gap-2 mt-40  pl-8 pr-5 relative justify-center mt-56">
      <RandomJapaneseText
        text="Connect With Me"
        useScroll={true}
        className="text-2xl font-bold mb-6"
        duration={0.3}
      ></RandomJapaneseText>

      <div
        className={`border-solid border-gray-500 border-[5px] relative p-5 flex rounded-lg flex-col w-full lg:w-[50%] md:w-[90%] sm:place-self-center font-helvetica`}
        id="contact"
      >
        <ContactForm></ContactForm>
      </div>
    </ScrollableElement>
  );
}

export default ThankYou;
