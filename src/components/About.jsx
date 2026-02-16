import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const avatarRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(avatarRef.current, {
        opacity: 0,
        x: -80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(contentRef.current, {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-0 bg-gray-100 pt-[70px] pb-32 scroll-mt-[140px] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-row max-md:flex-col items-start gap-20">
          {/* LEFT SIDE – IMAGE */}
          <div ref={avatarRef} className="flex-shrink-0">
            <div className="relative w-[450px] h-[450px] max-md:w-[320px] max-md:h-[320px]">
              <div
                className="absolute inset-0 bg-indigo-500 shadow-2xl"
                style={{
                  borderRadius: "60% 40% 55% 45% / 55% 60% 40% 45%",
                  transform: "rotate(-10deg)",
                }}
              />
              <div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] max-md:w-[220px] max-md:h-[260px] shadow-2xl"
                style={{
                  borderRadius: "55% 45% 60% 40% / 55% 40% 60% 45%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}aassa.png`}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – TEXT */}
          <div ref={contentRef} className="flex-1 min-w-0 pr-[100px] max-md:pr-0">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              I am a technology professional with a Bachelor of Computer Applications (BCA)
              and advanced training in Information Technology Solutions from Humber College.
              My background combines strong foundations in programming, databases, networking,
              systems administration, and cloud technologies, along with hands-on experience in
              building and managing IT solutions.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed text-lg">
              Currently, I am expanding my expertise in Artificial Intelligence, with a focus
              on Large Language Models (LLMs) and modern AI systems. I am actively developing
              skills in machine learning workflows, prompt engineering, model integration, and
              AI-powered applications.
              <br /><br />
              I am passionate about leveraging technology to solve real-world problems and
              continuously improving my technical and analytical abilities. My goal is to build
              intelligent, scalable, and impactful solutions that bridge traditional IT systems
              with emerging AI technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
