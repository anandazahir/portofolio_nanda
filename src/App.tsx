import Header from "./sections/Header";

import { Menu } from "./Component/Menu";
import Hero from "./sections/Hero";

import About_Me from "./sections/About_Me";
import Projects from "./sections/Projects";
import ThankYou from "./sections/thankYou";
import Footer from "./sections/footer";

function App() {
  return (
    <main className=" max-w-7xl h-screen ">
      <Header></Header>
      <Menu></Menu>
      <Hero></Hero>
      <About_Me />
      <Projects></Projects>
      <ThankYou></ThankYou>
      <Footer></Footer>
    </main>
  );
}

export default App;
