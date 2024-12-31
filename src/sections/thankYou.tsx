import ScrollableElement from "../Animations/UseSroll";

function ThankYou() {
  return (
    <ScrollableElement className="text-white  w-full flex flex-col  mt-40  pl-8 pr-5 relative ">
      <h1 className="text-2xl font-bold mb-6">Connect With Me</h1>
      <div
        className={`border-solid border-white border-[5px] relative p-5 flex rounded-lg flex-col w-full`}
        id="contact"
      >
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="col-span-1 md:col-span-2">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <textarea
              placeholder="Your Message"
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
            ></textarea>
          </div>
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </ScrollableElement>
  );
}

export default ThankYou;
