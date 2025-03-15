import ImageBg from "./assets/profile.jpg";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { images } from "./components/ImageExport";
import { Rerousel } from "rerousel";

gsap.registerPlugin(useGSAP);

export default function App() {
  const customerLogo = useRef(null);
  const container = useRef(null);
  const sliderContainer = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= images.length) return 0;
      return prev + 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

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
      gsap.set(".box", {
        x: (i) => i * 100,
      });
      gsap.to(".box", {
        duration: 5,
        ease: "none",
        x: "+=500",
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % 500),
        },
        repeat: -1,
      });
    },

    { scope: container }
  );

  useGSAP(
    () => {
      gsap.set(".box", {
        x: (i) => i * 100,
      });
      gsap.to(".box", {
        duration: 5,
        ease: "none",
        x: "-=700",
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % 1000),
        },
        repeat: -1,
      });
    },

    { scope: sliderContainer }
  );

  return (
    <div
      className={`w-full h-[200vh] bg-[url('./assets/bg-image.svg')] bg-no-repeat bg-cover p-0 overflow-hidden`}
    >
      <div className="flex flex-col w-full h-full items-center gap-10  covered-bg">
        <div className="fixed left-1/2 flex justify-center transform -translate-x-1/2 w-fit z-1000">
          <div className="flex gap-15 justify-center mt-10 py-2 px-2 bg-[rgba(71,68,68,0.47)] w-fit rounded-4xl items-center text-gray-100">
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
        <h3 className="text-2xl text-white">Tools</h3>
        <div className="mt-1 flex justify-center w-1/2 h-22 overflow-hidden relative">
          {/* <div
            className="flex relative overflow-hidden w-full h-22 box-slider"
            ref={sliderContainer}
          >
            {images.map((image) => (
              <img
                src={image.image}
                className="h-22 w-30 absolute align-middle box"
                alt=""
              />
            ))}
          </div> */}

          <Rerousel itemRef={customerLogo} interval={300}>
            {images.map((c) => {
              return (
                <img
                  src={c.image}
                  alt=""
                  className="h-22 w-30"
                  ref={customerLogo}
                />
              );
            })}
          </Rerousel>
        </div>
      </div>
    </div>
  );
}
