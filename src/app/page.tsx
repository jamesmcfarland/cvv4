import AboutSection from "@/components/sections/about";
import SeeMoreButton from "@/components/seeMoreButton";
import { LightDarkModeToggle } from "@/components/theme-picker";
import { GeistMono } from "geist/font";
import Nav from "@/components/nav";
import ProjectsSection from "@/components/sections/projects";
import { Separator } from "@/components/ui/separator";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-full flex flex-col justify-between p-8">
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
          <h1 className="text-4xl sm:text-6xl font-bold lowercase">
            jamesmcfarland
          </h1>
        </div>
        <div className="justify-self-end">
          <SeeMoreButton />
        </div>
      </div>
      <Nav />

      <AboutSection />
      <Separator className="my-4" />
      <ProjectsSection />
      <Separator className="my-4" />
      <ContactSection />
    </main>
  );
}
