import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import * as SecurityWorkforceManagementModule from "./components/SecurityWorkforceManagement";

const SecurityWorkforceManagement =
  SecurityWorkforceManagementModule.default ??
  SecurityWorkforceManagementModule.SecurityWorkforceManagement;

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

const HomePage = () => (
  <div className="bg-white text-black">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Expertise />
    <Contact />
  </div>
);

function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects/security-workforce-management"
          element={<SecurityWorkforceManagement />}
        />
      </Routes>
    </>
  );
}

export default App;
