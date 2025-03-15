import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Carousel = () => {
  const slider = useRef(null);
  const firstSlider = useRef(null);
  const secondSlider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      // x: '-500px',
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstSlider.current, { xPercent: xPercent * -1 });
    gsap.set(secondSlider.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.01 * direction;
  };

  return (
    <div
      ref={slider}
      className="flex flex-col items-center justify-center w-full h-full gap-y-10"
    >
      <div className="flex gap-x-10" ref={firstSlider}>
        {Array(20)
          .fill(null)
          .map((item, index) => (
            <div key={index} className="bg-blue-500 w-36 h-36">
              {index}
            </div>
          ))}
      </div>

      <div className="flex gap-x-10" ref={secondSlider}>
        {Array(20)
          .fill(null)
          .map((item, index) => (
            <div key={index} className="bg-purple-500 w-36 h-36">
              {index}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Carousel;
