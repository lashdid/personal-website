// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ProjectProps } from "../../components/Projects";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectProps[]>
) {
  res.status(200).json([
    {
      title: "Ngirim.",
      description: "A file transfer website with 6-digit key sharing system.",
      imageUrl: "/assets/ngirim.png",
      imageAlt: "Ngirim Banner",
      tools: [
        {
          name: "Typescript",
          imageUrl: "/logos/typescript.png",
          link: "https://typescriptlang.org/",
        },
        {
          name: "SolidJs",
          imageUrl: "/logos/solidjs.png",
          link: "https://www.solidjs.com/",
        },
        {
          name: "TailwindCSS",
          imageUrl: "/logos/tailwindcss.png",
          link: "https://www.tailwindcss.com/",
        },
        {
          name: "Firebase",
          imageUrl: "/logos/firebase.png",
          link: "https://firebase.google.com/",
        },
      ],
      previewUrl: "https://ngirim.vercel.app/",
      githubUrl: "https://github.com/lashdid/ngirim"
    },
    {
      title: "Takaran",
      description: "Converting the mesurement of Indonesian food ingredients.",
      imageUrl: "/assets/takaran.png",
      imageAlt: "Takaran Banner",
      tools: [
        {
          name: "Svelte",
          imageUrl: "/logos/svelte.png",
          link: "https://svelte.dev/",
        },
        {
          name: "WindiCSS",
          imageUrl: "/logos/windicss.png",
          link: "https://windicss.org/",
        }
      ],
      previewUrl: "https://takaran.vercel.app/",
      githubUrl: "https://github.com/lashdid/takaran"
    },
    {
      title: "Pokedex",
      description: "A simple website to search for pokemon.",
      imageUrl: "/assets/pokedex-nuxt.png",
      imageAlt: "Pokedex Banner",
      tools: [
        {
          name: "Typescript",
          imageUrl: "/logos/typescript.png",
          link: "https://typescriptlang.org/",
        },
        {
          name: "NuxtJS",
          imageUrl: "/logos/nuxtjs.png",
          link: "https://nuxtjs.org/",
        },
        {
          name: "TailwindCSS",
          imageUrl: "/logos/tailwindcss.png",
          link: "https://www.tailwindcss.com/",
        },
      ],
      previewUrl: "https://pokedex-nuxt.vercel.app/",
      githubUrl: "https://github.com/lashdid/pokedex-nuxt"
    },
    {
      title: "Whatsapp Bot Spongetron",
      description: "Whatsapp bot named Spongetron.",
      imageUrl: "/assets/wa-spongetron.png",
      imageAlt: "Wa Spongetron Banner",
      tools: [
        {
          name: "NodeJs",
          imageUrl: "/logos/nodejs.png",
          link: "https://nodejs.org",
        },
      ],
      githubUrl: "https://github.com/lashdid/wa-bot-spongetron"
    },
  ]);
}
