import { ReactNode } from "react";

interface CaptionProps {
  text: string;
}

export default function Caption(props: CaptionProps) {
  return (
    <h1 className="relative py-5 text-3xl text-center text-gray-700 dark:text-gray-400 border-y border-gray-400 dark:border-gray-700">
      {props.text}
    </h1>
  );
}
