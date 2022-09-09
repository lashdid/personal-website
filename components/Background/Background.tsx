import clsx from "clsx";
import Pixel from "../../public/pixel.svg";
import styles from "./styles.module.css";

export default function Background() {
  const pixelStyle = {
    width: () => Math.floor(Math.random() * (30 - 15)) + 15,
    duration: () => Math.floor(Math.random() * (20 - 15)) + 15,
  };
  return (
    <div className="absolute flex flex-col space-y-[20rem] md:space-y-[6rem] w-full h-full mx-auto -z-10 text-gray-300 dark:text-gray-700">
      {Array(2)
        .fill(0)
        .map((_, idx) => (
          <div
            key={idx}
            className={clsx(
              idx % 2 == 0 ? [styles.pixelRight, "self-end"] : styles.pixelLeft
            )}
            style={{
              width: `${pixelStyle.width()}rem`,
              animationDuration: `${pixelStyle.duration()}s`,
            }}
          >
            <Pixel />
          </div>
        ))}
    </div>
  );
}
