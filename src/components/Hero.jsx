import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  const fullText = "Hey there, I'm Aviral";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(typeInterval);
    }, 120);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");

    let width = (canvas.width = section.clientWidth);
    let height = (canvas.height = section.clientHeight);

    const particlesArray = [];
    const colors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF"];

    // ✅ Reduce particles on mobile
    const particleCount = window.innerWidth < 768 ? 60 : 120;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1.2 - 0.6;
        this.speedY = Math.random() * 1.2 - 0.6;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particlesArray.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particlesArray.push(new Particle());
      }
    }
    init();

    let animationId;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      particlesArray.forEach((p) => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    }
    animate();

    const resize = () => {
      width = canvas.width = section.clientWidth;
      height = canvas.height = section.clientHeight;
      init();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(section);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      ro.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-5xl">
        <h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight mb-4 tracking-tight text-white drop-shadow-2xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {typedText}
          <span className="blinking-cursor">|</span>
        </h1>

        <p
          className="mt-4 text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold text-indigo-300 tracking-wide drop-shadow-lg"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Creative Developer & Designer
        </p>
      </div>

      <style>{`
        .blinking-cursor {
          display: inline-block;
          width: 2px;
          background-color: white;
          animation: blink 0.8s steps(1) infinite;
          margin-left: 2px;
        }

        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
