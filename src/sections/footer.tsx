import RunningText from "../Animations/RunningText";

function Footer() {
  return (
    <footer className=" flex w-full lg:w-[95vw] md:w-[92vw] justify-center flex-col mt-10 jusify-center">
      <p className="text-gray-500 text-sm text-center">
        © 2024{" "}
        <a
          className="text-decoration-none cursor-pointer"
          href="https://instagram.com/ananda.zahir"
        >
          Nanda
        </a>
        . All rights reserved.
      </p>
      <RunningText></RunningText>
    </footer>
  );
}

export default Footer;
