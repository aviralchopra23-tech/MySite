import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />

      {/* Black background for Expertise only */}
      <Expertise />

      {/* White background for the remaining sections */}
      <Contact />
    </div>
  );
}

export default App;
