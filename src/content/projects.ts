import type { StaticImageData } from "next/image";
import socmanagerImg from "@/content/images/socmanager.png";
import qcsWebsiteImg from "@/content/images/qcswebsite.png";
import mcivorImg from "@/content/images/mcivor.png";
import qcsDiscordImg from "@/content/images/qcsdiscord.png";
import f1lapImg from "@/content/images/f1lap.png";

export const projects: Project[] = [
  {
    name: "socmanager",
    url: "https://socmanager.jamesmcfarland.dev",
    image: socmanagerImg,
    description:
      "Designed to be an all-in-one tool for managing student university societies, socmanager was born from my experience managing the 400-member QUB Computing Society",
    technicalDescription: "Built with Next.js, TRPC, Clerk & Prisma (T3 Stack)",
  },
  {
    name: "QCS Website",
    url: "https://queenscomputingsociety.com",
    image: qcsWebsiteImg,
    description:
      "The website for the QUB Computing Society, built to be a central hub for all things QCS. Shows off a bit of what the society does, and links out to the socials.",
    technicalDescription:
      "Straight HTML/CSS/JS deployed to Netlify. Designed to be easy for new members to contribute to.",
  },
  {
    name: "QCS Bot & Integration",
    url: "https://github.com/queenscomputingsociety/qcs-discord-bot",
    image: qcsDiscordImg,
    description:
      "A bot which our members can interact allowing them to verify their membership. For the Minecraft server, we needed a way to whitelist members based on data they provided at signup.",
    technicalDescription:
      "Built with Discord.js and bash scripts, deployed to a QUB-controlled hypervisor alongside our Minecraft instance.",
  },
  {
    name: "McIvor WINDCTRL",
    url: "https://github.com/jamesmcfarland/mcivor-windtunnel-control",
    image: mcivorImg,
    description:
      "A control system for a small wind tunnel, it's designed to connect to an accompanying API, which in turn sends control signals to an Arduino which controls the tunnel.",
    technicalDescription: "Powered by Next.JS, shadcn/ui, Tremor and Tailwind",
  },
  {
    name: "f1lap",
    url: "https://f1lap.jamesmcfarland.dev",
    image: f1lapImg,
    description:
      "A fun project for learning some Three.js and playing around with F1 Telmetry data, I'll be expanding this one out a bit more",
    technicalDescription:
      "Built with Next.js, Three.js and Tailwind, and the FastF1 Python library",
  },
];

export type Project = {
  name: string;
  url: string;
  image: string | StaticImageData;
  description: string;
  technicalDescription?: string;
};
