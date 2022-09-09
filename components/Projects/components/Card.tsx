import clsx from "clsx";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { ProjectProps } from "../Projects";

export function Card(props: ProjectProps) {
  return (
    <div className="flex flex-col w-full shadow-md rounded bg-white dark:bg-gray-800">
      <a
        target="_blank"
        href={props.previewUrl}
        className="block relative w-full h-52 flex-shrink-0"
        rel="noopener noreferrer"
      >
        <Image
          className={clsx(
            "rounded-t transition-all",
            props.previewUrl && "hover:brightness-75"
          )}
          src={props.imageUrl}
          alt={props.imageAlt}
          layout="fill"
          objectFit="cover"
        />
      </a>
      <div className="flex flex-col h-full p-3 space-y-3">
        <h3 className="text-xl">{props.title}</h3>
        <p className="h-full text-sm text-gray-700 dark:text-gray-500">{props.description}</p>
        <div className="flex space-x-3 self-end">
          {props.tools.map((tool, idx) => (
            <a
              key={idx}
              target="_blank"
              href={tool.link}
              className="relative w-5 h-5 hover:brightness-90"
              title={tool.name}
              rel="noopener noreferrer"
            >
              <Image src={tool.imageUrl} alt={tool.name} layout="fill" />
            </a>
          ))}
        </div>
        <a
          target="_blank"
          href={props.githubUrl}
          className="flex w-full items-center justify-center py-2 space-x-2 border rounded font-light text-gray-500 dark:text-white transition-all hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
          <span>Github</span>
        </a>
      </div>
    </div>
  );
}
