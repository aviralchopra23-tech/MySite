import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const navLinks = [
    { name: "About", target: "#about" },
    { name: "Projects", target: "#projects" },
    { name: "Expertise", target: "#expertise" },
    { name: "Contact", target: "#contact" },
  ];

  const [activeLink, setActiveLink] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (target) => {
    gsap.to(window, {
      duration: 0.8,
      scrollTo: target,
      ease: "power3.inOut",
    });
    setActiveLink(target);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      navLinks.forEach((link) => {
        const section = document.querySelector(link.target);
        if (section) {
          const top = section.offsetTop - 150;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveLink(link.target);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    gsap.from(".navbar-inner", {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        transition: "all 0.5s",
        background: scrolled ? "rgba(255,255,255,0.7)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div
        className="navbar-inner"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "22px 64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo now scrolls to About */}
        <div
          className="logo-text"
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            cursor: "pointer",
            letterSpacing: "-0.5px",
          }}
          onClick={() => handleScroll("#about")}
        >
          AVIRAL
        </div>

        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "42px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <span
                onClick={() => handleScroll(link.target)}
                className={`nav-link ${
                  activeLink === link.target ? "active" : ""
                }`}
              >
                {link.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

          .logo-text {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(270deg, #f43f5e, #facc15, #22c55e, #3b82f6);
            background-size: 400% 400%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientMove 8s ease infinite;
          }

          .nav-link {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 1.05rem;
            cursor: pointer;
            color: #374151;
            position: relative;
            padding: 10px 14px;
            transition: all 0.3s ease;
            user-select: none;
          }

          .nav-link::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: -2px;
            transform: translateX(-50%);
            width: 0%;
            height: 2px;
            border-radius: 9999px;
            background: linear-gradient(270deg, #f43f5e, #facc15, #22c55e, #3b82f6);
            transition: width 0.35s ease;
          }

          .nav-link:hover::after,
          .nav-link.active::after {
            width: 60%;
          }

          .nav-link:hover,
          .nav-link.active {
            color: #111827;
          }

          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;