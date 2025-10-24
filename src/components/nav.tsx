"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";
import { Link as ReactScrollLink } from "react-scroll";
import { Card, CardHeader } from "./ui/card";

const links = [
  {
    name: "README.md",
    link: "readme",
  },
  {
    name: "Projects",
    link: "projects",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

const Nav = () => {
  return (
    <div className="sticky top-0 sm:m-4 mb-4 z-50">
      <Card className="bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-lg border border-white/20 dark:border-slate-800">
        <CardHeader>
          <div className="flex gap-2 md:gap-6 items-center">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/james.jpg" />
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="hidden sm:flex items-center gap-2 pl-2">
                <h1 className="font-bold text-black dark:text-white">
                  jamesmcfarland
                </h1>
                <Button asChild variant="ghost" size="sm" className="pl-5">
                  <Link
                    href="https://blog.jamesmcfarland.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </Link>
                </Button>
              </div>
            </div>
            {links.map((link, i) => (
              <ReactScrollLink
                key={i}
                to={link.link}
                duration={1000}
                smooth={true}
                offset={-100}
              >
                <Button variant="ghost" className="text-black dark:text-white">
                  {link.name}
                </Button>
              </ReactScrollLink>
            ))}
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Nav;
