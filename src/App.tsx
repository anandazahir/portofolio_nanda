import Header from "./sections/Header";

import { Menu } from "./Component/Menu";
import Hero from "./sections/Hero";

import About_Me from "./sections/About_Me";
import Projects from "./sections/Projects";
import ThankYou from "./sections/thankYou";
import Footer from "./sections/footer";
import { ThemeProvider } from "./Component/ThemeContext";

function App() {
  return (
    <main className="w-[100%] dark:bg-black  bg-white h-[100%]">
      <ThemeProvider>
        <Header></Header>
        <Menu></Menu>
        <Hero></Hero>
        <About_Me />
        <Projects></Projects>
        <ThankYou></ThankYou>
        <Footer></Footer>
      </ThemeProvider>
    </main>
  );
}

export default App;
