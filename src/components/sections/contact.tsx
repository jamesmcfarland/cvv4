"use client";
import { Element } from "react-scroll";
import Project from "../project";
import { contacts } from "@/content/contact";
import { Button } from "../ui/button";
import Link from "next/link";

const ContactSection = () => {
  return (
    <Element name="contact">
      <div className="min-h-[40vh] m-4 flex flex-col gap-4 items-center justify-center h-full">
        <h1 className="text-3xl tracking-tighter font-bold text-center">
          Like what you see? Get in touch.
        </h1>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {contacts.map((contact) => (
            <Link
              key={contact.name}
              href={contact.url}
              rel="noreferrer"
              target="_blank"
            >
              <Button variant="ghost" className="p-2 flex gap-2">
                <contact.icon className="h-3 w-23 sm:h-4 sm:w-4" />
                {contact.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <h1 className="opacity-80 w-full text-center py-4">
        © james mcfarland 2023.
      </h1>
    </Element>
  );
};

export default ContactSection;
