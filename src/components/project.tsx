import { Project } from "@/content/projects";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Project = ({ name, url, image, description }: Project) => {
  return (
    // <Card className="min-w-sm max-w-lg">
    //   <CardHeader>
    //     <CardTitle>{name}</CardTitle>
    //   </CardHeader>
    //   <CardContent>
    //     <div className="flex flex-col gap-2 items-stretch justify-between">
    //       <Image src={image} alt={name} width={150} height={150} />
    //       <h1>{description}</h1>
    //     </div>
    //   </CardContent>
    //   <CardFooter>
    //     <Link href={url} rel="noreferrer" target="_blank">
    //       <Button variant="outline">View</Button>
    //     </Link>
    //   </CardFooter>
    // </Card>
    <div className="min-w-sm max-w-lg min-h-[250px] flex flex-col rounded-lg border bg-card shadow-sm">
      <div className="w-full h-full rounded-t-lg relative min-h-[100px]">
        <Image
          src={image}
          alt={name + " screenshot"}
          fill
          className="rounded-t-lg object-cover "
        />
      </div>
      <div className="m-4 ">
        <h1 className="text-2xl font-semibold leading-none tracking-tight">
          {name}
        </h1>
        <p className="mt-2">{description}</p>
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
