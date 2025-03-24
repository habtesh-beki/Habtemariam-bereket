import ImageBg from "./assets/profile.jpg";
import { Copyright, Menu } from "lucide-react";
import MyExpertise from "./components/MyExpertise";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MyWork from "./components/MyWork";
import Hamburger from "hamburger-react";
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
  const [scale, setScale] = useState<number>(1);
  const container = useRef(null);
  const scrollRef = useRef(null);
  const logoRef = useRef(null);
  const hoverAnimation = useRef<HTMLDivElement | null>(null);
  const containerFooter = useRef(null);
  const [isOpen, setOpen] = useState(false);

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
      gsap.to(".open", {
        boxShadow: "0 0 15px 6px rgba(39, 214, 85, 0.7)",
        opacity: 1,
        duration: 0.6,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
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
        scale: scale,
        ease: "power2.out",
        overwrite: true,
      });
    }
  }, [cursorPosition, scale]);

  useEffect(() => {
    const handleMouseEnter = () => {
      // console.log("Enter", e.target);
      setScale(10);
    };
    const handleMouseLeave = () => {
      // console.log("leave", e.target);
      setScale(1);
    };
    const hoverElements = document.querySelectorAll(".glass-animation");
    const ac = new AbortController();
    const { signal } = ac;
    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter, { signal });
      element.addEventListener("mouseleave", handleMouseLeave, { signal });
    });

    return () => {
      ac.abort();
    };
  }, []);
  const handleIsOpen = () => {
    setOpen((prv) => !prv);
  };

  return (
    <>
      <div
        ref={hoverAnimation}
        className="fixed w-6 h-6 bg-white rounded-4xl hover-anime z-[1000] mix-blend-difference lg:block md:block sm:block hidden"
      ></div>
      <div
        className={`w-full h-auto bg-[url('./assets/bg-image.svg')] bg-no-repeat bg-cover p-0 overflow-hidden`}
      >
        <div className="flex flex-col w-full h-full items-center  covered-bg">
          <div className="fixed left-1/2  transform -translate-x-1/2 w-fit z-1000 lg:block md:block sm:block hidden">
            <div className="flex gap-15 justify-center mt-10 py-2 px-2 bg-[rgba(71,68,68,0.75)] w-max h-max rounded-4xl items-center text-gray-100 glass-animation">
              <a href="#home">
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
                  <a href="#my-work inline">My Work</a>
                </li>
                <li className="cursor-pointer py-2 px-3 hover:bg-[rgba(71,68,68,0.8)] duration-500 hover:border border-black rounded-2xl">
                  <a href="#tech-stack">Tech Stack</a>
                </li>
                <li className="cursor-pointer py-2 px-3 hover:bg-[rgba(71,68,68,0.8)] duration-500 hover:border border-black rounded-2xl">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="fixed justify-between block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden w-full z-[1000]">
            <div className="w-full h-max p-2 flex justify-between bg-[#03070e] items-center">
              <a href="#home">
                <img
                  className="rounded-4xl cursor-pointer w-10 h-10"
                  src={ImageBg}
                  alt="profile"
                />
              </a>
              <Hamburger color="#FFFFFF" toggled={isOpen} toggle={setOpen} />
              {/* <Menu className="text-white" size={38} /> */}
            </div>
            {/* {isOpen && ( */}
            <div
              className={`w-full text-white flex justify-center text-2xl bg-[#03070e] border-t py-4 transition-all duration-500 ease-in-out ${
                isOpen
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <ul>
                <li onClick={handleIsOpen} className="cursor-pointer">
                  <a href="#expertise">Expertise</a>
                </li>
                <li onClick={handleIsOpen} className="cursor-pointer">
                  <a href="#my-work">My Work</a>{" "}
                </li>
                <li onClick={handleIsOpen} className="cursor-pointer">
                  <a href="#tech-stack">Tech Stack</a>
                </li>
                <li onClick={handleIsOpen} className="cursor-pointer">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            {/* )} */}
          </div>

          <section className=" flex flex-col items-center justify-center h-screen  gap-10 w-full">
            <h3
              className="flex gap-2 border w-max px-6 py-2 text-xl rounded-4xl h-max justify-between  text-gray-600 items-center"
              ref={container}
            >
              <span className="w-5 h-5 bg-[#27d655] rounded-3xl open "></span>
              I'm currently available
            </h3>
            <div className="flex flex-col gap-4 z-0 w-1/2 text-white  justify-center items-center text-center ">
              <div className=" w-max h-max ">
                <h1 className="lg:text-7xl md:text-5xl text-4xl blurred-text ">
                  Habtemariam Bereket
                </h1>
              </div>

              <h2 className="lg:text-4xl md:text-2xl text-2xl blurred-text whitespace-nowrap">
                Full-Stack Developer
              </h2>
              <h4 className="lg:text-3xl md:text-xl text-lg blurred-text ">
                I transform innovative ideas into powerful, intuitive web
                applications using modern technologies.{" "}
              </h4>

              <Button className="uppercase text-white w-50 h-16 text-2xl cursor-pointer bg-[#ff4d00] hover:bg-[#ff3a00] mt-10 ">
                <a href="mailto:habteshbeki@gmail.com">Get in touch</a>
              </Button>
            </div>
          </section>

          <h2 className="lg:block md:block sm:block hidden text-3xl text-white uppercase font-bold mb-10 ">
            Some Of My Projects with image
          </h2>
          <div
            className="lg:block md:block sm:block hidden w-full h-[100vh] overflow-hidden relative mb-10 "
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
            className=" w-full flex flex-col items-center gap-6 mt-10"
            ref={logoRef}
          >
            <div className="">
              <h1 className="text-4xl font-bold text-white mb-10">
                Tech-Stack
              </h1>
            </div>
            <div
              className="logo-animation grid lg:w-1/2 w-full h-[60vh] relative overflow-hidden "
              id="tech-stack"
            >
              <div className="first flex lg:gap-10 md:gap-7 gap-5 absolute">
                {SecondLineImagae.map((img) => (
                  <img
                    className="lg:w-20 lg:h-20  md:w-15 md:h-15 w-10 h-10"
                    src={img}
                  />
                ))}
              </div>
              <div className="second flex lg:gap-10 md:gap-7 gap-5 absolute top-30 ">
                {firstLineImagae.map((img) => (
                  <img
                    className="lg:w-20 lg:h-20  md:w-15 md:h-15 w-10 h-10"
                    src={img}
                  />
                ))}
              </div>
              <div className="thried flex lg:gap-10 md:gap-7 gap-5 top-60 absolute">
                {ThiredLineImagae.map((img) => (
                  <img
                    className="lg:w-20 lg:h-20  md:w-15 md:h-15 w-10 h-10"
                    src={img}
                  />
                ))}
              </div>
            </div>
          </section>
          <footer
            className="w-full flex justify-center bg-[#03070e]"
            id="contact"
          >
            <div
              className=" flex flex-col items-center h-max lg:w-1/2 md:w-2/3 w-3/4 mt-10 text-[#7c7e81] gap-8 text-center"
              ref={containerFooter}
            >
              <h3 className="flex gap-2 border w-max px-5 justify-between py-2 text-xl rounded-4xl h-max good text-gray-600 items-center ">
                <span className="w-5 h-5 bg-[#27d655] rounded-3xl footer-open-to-work "></span>
                I'm currently available
              </h3>
              <p>
                Got an idea? Starting a project? Need to chat? Let’s connect!
              </p>
              <h2 className="lg:text-6xl md:text-4xl text-2xl">
                Reach out, and let’s create something amazing together!
              </h2>
              <h1>
                {} {}
              </h1>
              <Button className="uppercase text-white w-50 h-16 text-2xl cursor-pointer bg-[#ff4d00] hover:bg-[#ff3a00] mt-10">
                <a href="mailto:habteshbeki@gmail.com">Get in touch</a>
              </Button>

              <ul className="flex gap-3">
                <li>
                  <a href="mailto:habteshbeki@gmail.com">
                    <img
                      className="w-10 h-10 cursor-pointer hover:scale-125"
                      src="/social-media/gmail.png"
                      alt="gmail"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/HabtemariamB">
                    <img
                      className="w-10 h-10 cursor-pointer hover:scale-125"
                      src="/social-media/telegram.png"
                      alt="telegram"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/habtemariam-bereket-a13480328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <img
                      className="w-10 h-10 cursor-pointer hover:scale-125"
                      src="/social-media/linkedin.png"
                      alt="linkedin"
                    />
                  </a>
                </li>
              </ul>
              <footer className="text-[#7c7e81] flex gap-2 mb-3">
                <Copyright /> <p>2025 Habtemariam Bereket</p>
              </footer>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
