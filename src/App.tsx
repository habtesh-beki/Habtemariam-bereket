import ImageBg from "./assets/profile.jpg";
import { Copyright } from "lucide-react";
import MyExpertise from "./components/MyExpertise";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MyWork from "./components/MyWork";
import {
  firstLineImagae,
  SecondLineImagae,
  ThiredLineImagae,
} from "./utils/ImageExport";
import { Button } from "./components/ui/button";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });

export default function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const container = useRef(null);
  const scrollRef = useRef(null);
  const logoRef = useRef(null);
  const hoverAnimation = useRef<HTMLDivElement | null>(null);
  const containerFooter = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".img-1", { xPercent: -100, duration: 0.12 })
        .from(".img-2", { xPercent: 100, duration: 0.12 })
        .from(".img-3", { yPercent: -100, duration: 0.12 })
        .from(".img-4", { xPercent: 100, duration: 0.12 });

      ScrollTrigger.create({
        animation: tl,
        trigger: ".newContainer",
        scrub: true,
        start: "top top",
        end: "+=4000",
        // markers: true,
        pin: true,
        anticipatePin: 1,
      });
    },
    { scope: scrollRef }
  );

  useGSAP(
    () => {
      const t2 = gsap.timeline();
      const t3 = gsap.timeline();
      const t4 = gsap.timeline();
      t2.to(".first", { xPercent: -20, duration: 1 });
      t3.to(".second", { xPercent: 20, duration: 1 });
      t4.to(".thried", {
        xPercent: -20,
        duration: 1,
      });

      ScrollTrigger.create({
        animation: t2,
        trigger: ".logo-animation",
        scrub: true,
        start: "top center",
        end: "+=500",
      });
      ScrollTrigger.create({
        animation: t3,
        trigger: ".logo-animation",
        scrub: true,
        start: "top center",
        end: "+=500",
      });
      ScrollTrigger.create({
        animation: t4,
        trigger: ".logo-animation",
        scrub: true,
        start: "top center",
        end: "+=500",
      });
    },
    { scope: logoRef }
  );
  useGSAP(
    () => {
      gsap.from(".good", { y: -300, duration: 1 });
      gsap.to(".open", {
        boxShadow: "0 0 20px 10px rgba(39, 214, 85, 0.7)",
        opacity: 1,
        duration: 0.6,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.from(".x", {
        x: 300,
        duration: 2,
      });
      gsap.from(".father-name", { x: -300, duration: 2 });
      gsap.from(".title", { x: -200, duration: 1 });
      gsap.from(".description", {
        y: -100,
        opacity: 0,
        rotation: "random(-80, 80)",
        duration: 0.7,
        ease: "back",
        stagger: 0.1,
      });
      gsap.to(".container", {
        xPercent: -100,
        ease: "none",
        duration: 10,
        repeat: -1,
      });
    },

    { scope: container }
  );
  useGSAP(
    () => {
      gsap.to(".footer-open-to-work", {
        boxShadow: "0 0 20px 10px rgba(39, 214, 85, 0.7)",
        opacity: 1,
        duration: 0.6,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: containerFooter }
  );

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline();
    if (hoverAnimation.current) {
      timeline.to(hoverAnimation.current, {
        x: cursorPosition.x,
        y: cursorPosition.y,
        duration: 0.3,
        ease: "power2.out",
        overwrite: false,
      });
    }
  }, [cursorPosition]);

  useEffect(() => {});

  return (
    <>
      <div
        className={`w-full h-auto bg-[url('./assets/bg-image.svg')] bg-no-repeat bg-cover p-0 overflow-hidden`}
      >
        <div ref={hoverAnimation}>
          <div className="absolute w-6 h-6 bg-white rounded-4xl hover-anime -z-100"></div>
        </div>

        <div className="flex flex-col w-full h-full items-center  covered-bg">
          <div className="fixed left-1/2 flex justify-center transform -translate-x-1/2 w-fit z-1000">
            <div className="flex gap-15 justify-center mt-10 py-2 px-2 bg-[rgba(71,68,68,0.75)] w-fit rounded-4xl items-center text-gray-100">
              <a href="#home">
                {" "}
                <img
                  className="rounded-4xl cursor-pointer w-10 h-10"
                  src={ImageBg}
                  alt="profile"
                />
              </a>
              <ul className="uppercase flex gap-15 items-cener text-text">
                <li className="cursor-pointer py-2 px-3 hover:bg-[rgba(71,68,68,0.8)] duration-500 hover:border border-black rounded-2xl hover:shadow-xl">
                  <a href="#expertise">Expertise</a>
                </li>
                <li className="cursor-pointer py-2 px-3 hover:bg-[rgba(71,68,68,0.8)] duration-500 hover:border border-black rounded-2xl">
                  <a href="#my-work">My Work</a>
                </li>
                <li className="cursor-pointer py-2 px-3 hover:bg-[rgba(71,68,68,0.8)] duration-500 hover:border border-black rounded-2xl">
                  <a href="#tech-stack">tech stack</a>
                </li>
                <li className="cursor-pointer py-2 px-3 hover:bg-[rgba(71,68,68,0.8)] duration-500 hover:border border-black rounded-2xl">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <section
            className=" flex flex-col items-center justify-center h-screen  box gap-10 "
            ref={container}
            id="home"
          >
            <h3 className="flex gap-2 border w-fit px-10 py-2 text-xl rounded-4xl h-fit good text-gray-600 items-center ">
              <span className="w-5 h-5 bg-[#27d655] rounded-3xl open "></span>
              I'm currently available
            </h3>
            <div className="flex flex-col gap-4 w-1/2 text-white  justify-center items-center text-center">
              <h1 className="flex gap-2 text-7xl blurred-text  my-name">
                <span className="myname">Habtemariam</span>
                <span className="father-name">Bereket</span>{" "}
              </h1>
              <h2 className="text-4xl blurred-text title">
                Full-Stack Developer
              </h2>
              <h4 className="text-3xl blurred-text description">
                I transform innovative ideas into powerful, intuitive web
                applications using modern technologies.{" "}
              </h4>

              <Button className="uppercase text-white w-50 h-16 text-2xl cursor-pointer bg-[#ff4d00] hover:bg-[#ff3a00] mt-10">
                <a href="mailto:habteshbeki@gmail.com">Get in touch</a>
              </Button>
            </div>
          </section>
          <h2 className="text-3xl text-white uppercase font-bold mb-10">
            Some Of My Projects with image
          </h2>
          <div
            className="flex w-full h-[100vh] overflow-hidden relative mb-10"
            ref={scrollRef}
            id="container_2"
          >
            <div className="newContainer h-[100vh] w-full">
              <img
                className="img-5 absolute w-full h-screen"
                src="/portifolio/13.png"
                alt=""
              />
              <img
                className="img-1 absolute w-full h-screen"
                src="/portifolio/16.png"
                alt=""
              />
              <img
                className="img-2 absolute w-full h-screen"
                src="/portifolio/2.png"
                alt=""
              />
              <img
                className="img-3 absolute w-full h-screen"
                src="/portifolio/18.png"
                alt=""
              />
              <img
                className="img-4 absolute w-full h-screen"
                src="/portifolio/5.png"
                alt=""
              />
            </div>
          </div>
          <MyExpertise />
          <MyWork />
          <section
            className=" w-full flex flex-col items-center gap-6"
            ref={logoRef}
          >
            <div>
              <h1 className="text-4xl font-bold text-white ">Tech-Stack</h1>
            </div>
            <div
              className="logo-animation grid w-1/2 h-[60vh] relative overflow-hidden"
              id="tech-stack"
            >
              <div className="first flex gap-10 absolute">
                {SecondLineImagae.map((img) => (
                  <img className="w-20 h-20" src={img} />
                ))}
              </div>
              <div className="second flex gap-10 absolute top-30 ">
                {firstLineImagae.map((img) => (
                  <img className="w-20 h-20" src={img} />
                ))}
              </div>
              <div className="thried flex gap-10 top-60 absolute">
                {ThiredLineImagae.map((img) => (
                  <img className="w-20 h-20" src={img} />
                ))}
              </div>
            </div>
          </section>
          <footer
            className="w-full flex justify-center bg-[#03070e]"
            id="contact"
          >
            <div
              className=" flex flex-col items-center h-[55vh] w-1/2 mt-10 text-[#7c7e81] gap-8 text-center"
              ref={containerFooter}
            >
              <h3 className="flex gap-2 border w-fit px-10 py-2 text-xl rounded-4xl h-fit good text-gray-600 items-center ">
                <span className="w-5 h-5 bg-[#27d655] rounded-3xl footer-open-to-work "></span>
                I'm currently available
              </h3>
              <p>
                Got an idea? Starting a project? Need to chat? Let’s connect!
              </p>
              <h2 className="text-6xl">
                Reach out, and let’s create something amazing together!
              </h2>
              <h1>
                {} {}
              </h1>
              <Button className="uppercase text-white w-50 h-16 text-2xl cursor-pointer bg-[#ff4d00] hover:bg-[#ff3a00] mt-10">
                <a href="https://t.me/HabtemariamB">Get in touch</a>
              </Button>

              <ul className="flex gap-3">
                <li>
                  <a href="">
                    <img
                      className="w-10 h-10 cursor-pointer hover:scale-125"
                      src="/social-media/gmail.png"
                      alt="gmail"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      className="w-10 h-10 cursor-pointer hover:scale-125"
                      src="/social-media/telegram.png"
                      alt="telegram"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      className="w-10 h-10 cursor-pointer hover:scale-125"
                      src="/social-media/linkedin.png"
                      alt="linkedin"
                    />
                  </a>
                </li>
              </ul>
              <footer className="text-[#7c7e81] flex gap-2">
                <Copyright /> <p>2025 Habtemariam Bereket</p>
              </footer>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
