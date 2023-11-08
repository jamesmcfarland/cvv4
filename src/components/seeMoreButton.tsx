"use client";

import { Link } from "react-scroll";
import { Button } from "./ui/button";
import { ChevronDownIcon } from "lucide-react";

const SeeMoreButton = () => {
  return (
    <Link to="main" duration={1000} smooth={true} offset={-100}>
      <Button variant="outline" size="icon">
        <ChevronDownIcon className="h-4 w-4" />
      </Button>
    </Link>
  );
};

export default SeeMoreButton;
