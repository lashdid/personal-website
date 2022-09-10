import anime from "animejs";
import clsx from "clsx";
import { useEffect } from "react";
import Pixel from "../../public/pixel.svg";

export default function Background() {
  useEffect(() => {
    anime({
      targets: "#pixelLeft",
      direction: "alternate",
      easing: "easeInOutSine",
      loop: true,
      translateX: [-80, 150],
      translateY: [-80, 150],
      rotate: [0, 90],
      duration: () => anime.random(15000, 20000)
    });
    anime({
      targets: "#pixelRight",
      direction: "alternate",
      easing: "easeInOutSine",
      loop: true,
      translateX: [150, -80],
      translateY: [-80, 150],
      rotate: [0, 90],
      duration: () => anime.random(15000, 20000)
    });
  }, []);
  return (
    <div className="absolute overflow-hidden flex flex-col space-y-[20rem] md:space-y-[6rem] w-full h-full mx-auto -z-10 text-gray-300 dark:text-gray-700">
      {Array(3)
        .fill(0)
        .map((_, idx) => (
          <div
            key={idx}
            id={idx % 2 == 0 ? "pixelRight" : "pixelLeft"}
            className={clsx("opacity-50", idx % 2 == 0 && "self-end")}
            style={{
              width: anime.random(30, 15) + 'rem',
            }}
          >
            <Pixel />
          </div>
        ))}
    </div>
  );
}
