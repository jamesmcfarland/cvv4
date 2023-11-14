import { Project } from "@/content/projects";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Project = ({
  name,
  url,
  image,
  description,
  technicalDescription,
}: Project) => {
  return (
    <div className="min-w-sm max-w-lg min-h-[250px] flex flex-col rounded-lg border bg-card shadow-sm">
      <div className="w-full h-full rounded-t-lg relative min-h-[200px]">
        <Image
          src={image}
          alt={name + " screenshot"}
          fill
          className="rounded-t-lg object-cover shadow-sm"
        />
      </div>
      <div className="m-4 ">
        <h1 className="text-2xl font-semibold leading-none tracking-tight">
          {name}
        </h1>
        <p className="mt-2">{description}</p>
        <p className="mt-2 text-muted-foreground text-sm">
          {technicalDescription}
        </p>
        <Link href={url} rel="noreferrer" target="_blank">
          <Button variant="outline" className="mt-4">
            View
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
