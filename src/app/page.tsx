import AboutSection from "@/components/sections/about";
import SeeMoreButton from "@/components/seeMoreButton";
import { LightDarkModeToggle } from "@/components/theme-picker";
import { GeistMono } from "geist/font/mono";
import Nav from "@/components/nav";
import ProjectsSection from "@/components/sections/projects";
import { Separator } from "@/components/ui/separator";
import ContactSection from "@/components/sections/contact";
import TextType from "@/TextType/TextType";
import TextureImage from "@/content/images/texture.jpg";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-full flex flex-col justify-between p-8 relative">
        {/* Texture image overlay with 10% opacity */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${TextureImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.07,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <div className="relative z-10 self-end">
          <LightDarkModeToggle />
        </div>
        <div className="relative z-10">
          <div
            className={`${GeistMono.className} uppercase tracking-widest opacity-90 mb-4`}
          >
            <TextType
              text={[
                "1st class software engineering @ qub",
                "former intern @ libertyit",
                "vice president @ queens' computing society",
                "security focussed",
                "f1 fan",
              ]}
              pauseDuration={2000}
              cursorCharacter="_"
              className="text-black"
            />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold lowercase">
            jamesmcfarland
          </h1>
          <TextType
            text={[
              "1st class software engineering @ qub",
              "former intern @ libertyit",
              "vice president @ queens' computing society",
              "security focussed",
              "f1 fan",
            ].reverse()}
            pauseDuration={2000}
            cursorCharacter="_"
            className={`uppercase opacity-90 mt-4 ${GeistMono.className}`}
          />
        </div>
        <div className="relative z-10 justify-self-end">
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
