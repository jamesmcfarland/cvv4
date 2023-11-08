import AboutSection from "@/components/sections/about";
import SeeMoreButton from "@/components/seeMoreButton";
import { LightDarkModeToggle } from "@/components/theme-picker";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { GeistMono } from "geist/font";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { Link, Element } from "react-scroll";
import Nav from "@/components/nav";
import StickyHeader from "@/components/stickyNav";
import ProjectsSection from "@/components/sections/projects";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-full flex flex-col justify-between p-8 border-b-2 border-dashed">
        <div className="self-end">
          <LightDarkModeToggle />
        </div>
        <div>
          <div
            className={`${GeistMono.className} uppercase tracking-widest opacity-90 mb-4`}
          >
            <h1>software engineering @ qub</h1>
            <h1>intern @ libertyit</h1>
            <h1>events team @ queens&apos; computing society</h1>
            <h1>f1 fan</h1>
          </div>
          <h1 className="text-6xl font-bold lowercase border-t-2 border-b-2 border-dashed">
            jamesmcfarland
          </h1>
        </div>
        <div className="justify-self-end">
          <SeeMoreButton />
        </div>
      </div>
      <Nav />

      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
