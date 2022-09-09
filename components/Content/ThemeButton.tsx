import { BiSun, BiMoon } from "react-icons/bi";
import { useTheme } from "next-themes";
import clsx, { ClassValue } from "clsx";

interface ComponentProps {
    className?: ClassValue
}

export default function ThemeButton(props: ComponentProps) {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={clsx("text-gray-600 hover:text-black dark:hover:text-white transition-all", props.className)}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <BiSun className="w-6 h-6" />
      ) : (
        <BiMoon className="w-6 h-6" />
      )}
    </button>
  );
}
