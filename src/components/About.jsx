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
          start: "top 90%", // more forgiving on small screens
        },
      });

      gsap.from(contentRef.current, {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-gray-100 pt-24 pb-20 sm:pt-28 sm:pb-24 md:pt-32 md:pb-28 scroll-mt-[120px] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 md:gap-14 lg:gap-20">
          
          {/* LEFT – IMAGE */}
          <div
            ref={avatarRef}
            className="flex justify-center lg:justify-start w-full lg:w-auto"
          >
            <div className="relative w-3/4 max-w-[400px] aspect-square sm:max-w-[350px] md:max-w-[400px]">
              
              <div
                className="absolute inset-0 bg-indigo-500 shadow-2xl"
                style={{
                  borderRadius: "60% 40% 55% 45% / 55% 60% 40% 45%",
                  transform: "rotate(-10deg)",
                }}
              />

              <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-4/5 sm:w-5/6 sm:h-5/6 shadow-2xl overflow-hidden"
                style={{
                  borderRadius: "55% 45% 60% 40% / 55% 40% 60% 45%",
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

          {/* RIGHT – TEXT */}
<div
  ref={contentRef}
  className="flex-1 text-center lg:text-left px-4 sm:px-0"
>
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
    About Me
  </h2>

  <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl">
    I am a technology professional with a Bachelor of Computer Applications (BCA)
    and advanced training in Information Technology Solutions from Humber College.
    My background combines strong foundations in programming, databases, networking,
    systems administration, and cloud technologies.
  </p>

  <p className="mt-4 text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl">
    Currently, I am expanding my expertise in Artificial Intelligence, focusing on
    Large Language Models (LLMs) and modern AI systems. I am actively developing
    skills in machine learning workflows, prompt engineering, model integration,
    and AI-powered applications.
    <br /><br />
    I am passionate about leveraging technology to solve real-world problems and
    building intelligent, scalable, and impactful solutions.
  </p>
</div>

        </div>
      </div>
    </section>
  );
}
