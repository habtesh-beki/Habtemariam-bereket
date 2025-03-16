import ImageBg from "./assets/profile.jpg";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { images } from "./utils/ImageExport";
// import { imageProtifolio1 } from "./utils/ImageExport";
import { images } from "./utils/ImageExport";
// import { imageProtifolio1 } from "./utils/ImageExport";
import { Rerousel } from "rerousel";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });

export default function App() {
  const customerLogo = useRef(null);
  const container = useRef(null);
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".img-1", { xPercent: -100, duration: 0.12 })
        .from(".img-2", { xPercent: 100, duration: 0.12 })
        .from(".img-3", { yPercent: -100, duration: 0.12 })
        .from(".img-4", { xPercent: 100, duration: 0.12 })
        .from("img-5", {});

      ScrollTrigger.create({
        animation: tl,
        trigger: ".newContainer",
        scrub: true,
        start: "top top",
        end: "+=40000",
        markers: true,
        pin: true,
        anticipatePin: 1,
      });
    },
    { scope: scrollRef }
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

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setCursourPosition({ x: e.clientX, y: e.clientY });
  //   };
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleScrollY = () => {
  //     setScrollPosition(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScrollY);
  // });

  return (
    <div
      className={`w-full h-auto bg-[url('./assets/bg-image.svg')] bg-no-repeat bg-cover p-0 overflow-hidden`}
    >
      <div className="flex flex-col w-full h-full items-center   covered-bg">
        <div className="fixed left-1/2 flex justify-center transform -translate-x-1/2 w-fit z-1000">
          <div className="flex gap-15 justify-center mt-10 py-2 px-2 bg-[rgba(71,68,68,0.75)] w-fit rounded-4xl items-center text-gray-100">
            <img
              className="rounded-4xl cursor-pointer w-10 h-10"
              src={ImageBg}
              alt="profile"
            />
            <ul className="uppercase flex gap-15 items-cener text-text">
              <li className="cursor-pointer py-2 px-3 hover:bg-[rgba(71,68,68,0.8)] duration-500 hover:border border-black rounded-2xl hover:shadow-xl">
                Expertise
              </li>
              <li className="cursor-pointer py-2 px-3 hover:bg-[rgba(71,68,68,0.8)] duration-500 hover:border border-black rounded-2xl">
                My Work
              </li>
              <li className="cursor-pointer py-2 px-3 hover:bg-[rgba(71,68,68,0.8)] duration-500 hover:border border-black rounded-2xl">
                tech stack
              </li>
              <li className="cursor-pointer py-2 px-3 hover:bg-[rgba(71,68,68,0.8)] duration-500 hover:border border-black rounded-2xl">
                Contact
              </li>
            </ul>
          </div>
        </div>
        <section
          className=" flex flex-col items-center mt-36 box gap-20 mb-20"
          ref={container}
        >
          <h3 className="flex gap-2 border w-fit px-10 py-2 text-xl rounded-4xl h-fit good text-gray-600 items-center ">
            <span className="w-5 h-5 bg-[#27d655] rounded-3xl open "></span>
            I'm currently available
          </h3>
          <div className="text-white flex flex-col gap-4 w-1/2  justify-center items-center text-center">
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

            <div className="liquid-morph-element uppercase cursor-pointer mt-10">
              <span>Get In touch</span>
            </div>
          </div>
        </section>
        <h3 className="text-2xl mt-8 text-white font-bold">Tools</h3>
        <div className=" flex justify-center w-1/2 h-22 overflow-hidden relative mb-16">
          <Rerousel itemRef={customerLogo} interval={300}>
            {images.map((c) => {
              return (
                <img
                  src={c}
                  alt=""
                  className="h-16 w-16 rounded-4xl box"
                  ref={customerLogo}
                />
              );
            })}
          </Rerousel>
        </div>
        <h2 className="text-3xl text-white uppercase font-bold mt-12 mb-10">
          Some Projects with image
        </h2>
        <div
          className="flex w-full h-[100vh] overflow-hidden relative "
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
              src="/portifolio/17.png"
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
        <section className="w-full mt-12 h-[200vh] ">
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      </div>
    </div>
  );
}
