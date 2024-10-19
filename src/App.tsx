import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className="relative w-full mx-auto space-y-10 max-w-screen-2xl md:space-y-14">
      <Navbar />
      <Banner />
      <Skills />
      <Experience />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
