"use client";
import {
  BoldIcon,
  EditIcon,
  ItalicIcon,
  LinkIcon,
  SaveIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "lucide-react";
import { LightDarkModeToggle } from "../theme-picker";
import { Button } from "../ui/button";
import Image from "next/image";
import { Element } from "react-scroll";
import { Card, CardContent, CardHeader } from "../ui/card";
import Markdown from "react-markdown";
import { aboutMarkdown } from "@/content/readme";
import remarkGfm from "remark-gfm";
import { Toggle } from "../ui/toggle";
import { Switch } from "../ui/switch";
import { useState } from "react";
const AboutSection = () => {
  const [source, setsource] = useState(false);
  return (
    <Element name="readme">
      <div id="main" className="min-h-screen w-full p-8 justify-center flex">
        <div className="w-[80%]">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center border-b-2 pb-2">
                <div className="flex gap-2 items-center justify-center">
                  <EditIcon className="h-4 w-4" />
                  <h1 className="text-xl font-mono">README.md</h1>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  {[
                    ItalicIcon,
                    BoldIcon,
                    UnderlineIcon,
                    StrikethroughIcon,
                    LinkIcon,
                  ].map((Icon, i) => (
                    <Button variant="ghost" key={i}>
                      <Icon className="h-4 w-4" />
                    </Button>
                  ))}
                </div>
                <div className="flex gap-x-8">
                  <div className="flex items-center gap-x-2">
                    <Switch
                      id="editMode"
                      onCheckedChange={(c) => setsource(c)}
                    />
                    <label htmlFor="editMode">View source</label>
                  </div>
                  <Button variant="outline" className="font-sans">
                    <SaveIcon className="h-4 w-4 mr-2" />
                    Save changes
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex items-center justify-center ">
              {!source && (
                <div className="prose prose-gray dark:prose-invert w-screen">
                  <Markdown remarkPlugins={[remarkGfm]}>
                    {aboutMarkdown.replace(/\\n/g, "<br>")}
                  </Markdown>
                </div>
              )}
              {source && (
                <textarea className="whitespace-pre-line font-mono bg-transparent w-full min-h-[100vh]">
                  {aboutMarkdown}
                </textarea>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Element>
  );
};

export default AboutSection;
