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
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (target) => {
    gsap.to(window, {
      duration: 0.8,
      scrollTo: target,
      ease: "power3.inOut",
    });

    setActiveLink(target);
    setMenuOpen(false); // close mobile menu after click
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
        background: scrolled ? "rgba(255,255,255,0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="navbar-inner">
        <div
          className="logo-text"
          onClick={() => handleScroll("#about")}
        >
          AVIRAL
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
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

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        {navLinks.map((link) => (
          <span
            key={link.name}
            onClick={() => handleScroll(link.target)}
            className={`mobile-link ${
              activeLink === link.target ? "active" : ""
            }`}
          >
            {link.name}
          </span>
        ))}
      </div>

      <style>{`
        .navbar-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-text {
          font-size: 1.8rem;
          font-weight: 800;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(270deg, #f43f5e, #facc15, #22c55e, #3b82f6);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 8s ease infinite;
        }

        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
        }

        .nav-link {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          cursor: pointer;
          color: #374151;
          position: relative;
          padding: 8px 10px;
          transition: 0.3s ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -2px;
          transform: translateX(-50%);
          width: 0%;
          height: 2px;
          background: linear-gradient(270deg, #f43f5e, #facc15, #22c55e, #3b82f6);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 60%;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: #111;
          border-radius: 2px;
          transition: 0.3s;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          align-items: center;
          background: white;
          padding: 20px 0;
          gap: 20px;
        }

        .mobile-link {
          font-weight: 600;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .mobile-menu.show {
            display: flex;
          }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
