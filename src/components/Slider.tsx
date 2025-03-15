import { useEffect, useState } from "react";

export default function Slider(arrayLength: number) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const length = arrayLength;

  useEffect(() => {
    function SlideLeft() {
      if (currentIndex == length - 1) return setCurrentIndex(0);
      setCurrentIndex((prv) => prv + 1);
    }
  }, [currentIndex]);
}
