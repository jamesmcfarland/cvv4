"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Link } from "react-scroll";
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
      <Card>
        <CardHeader>
          <div className="flex gap-2 md:gap-6 items-center">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/james.jpg" />
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <h1 className="font-bold hidden sm:block">jamesmcfarland</h1>
            </div>
            {links.map((link, i) => (
              <Link
                key={i}
                to={link.link}
                duration={1000}
                smooth={true}
                offset={-100}
              >
                <Button variant="ghost">{link.name}</Button>
              </Link>
            ))}
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Nav;
