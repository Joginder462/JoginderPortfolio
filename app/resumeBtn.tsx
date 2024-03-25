"use client";
import React from "react";
import { HoverBorderGradient } from "@/app/components/ui/hover-border-gradient";
import resumeicon from "@/public/icons8-resume-100.png";
import Image from "next/image";

export function ResumeBtn() {
  return (
    <div className="m-40 flex justify-center text-center">
      <a href="">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <AceternityLogo />
        <span>My CV</span>
      </HoverBorderGradient>
      </a>
    </div>
  );
}

const AceternityLogo = () => {
  return (
    <Image 
    src={resumeicon} alt="" height={40}/>
  );
};
