"use client";
import React from "react";
import { HeroParallax } from "@/app/components/ui/hero-parallax";
import Navbar from "@/app/components/Navbar";

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://assets.aceternity.com/demos/algochurn.webp",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://assets.aceternity.com/demos/algochurn.webp",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://assets.aceternity.com/demos/algochurn.webp",
  },
 
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://assets.aceternity.com/demos/algochurn.webp",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://assets.aceternity.com/demos/algochurn.webp",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://assets.aceternity.com/demos/algochurn.webp",
  },
 
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://assets.aceternity.com/demos/algochurn.webp",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://assets.aceternity.com/demos/algochurn.webp",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://assets.aceternity.com/demos/algochurn.webp",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://assets.aceternity.com/demos/algochurn.webp",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://assets.aceternity.com/demos/algochurn.webp",
  },
 
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://assets.aceternity.com/demos/algochurn.webp",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://assets.aceternity.com/demos/algochurn.webp",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://assets.aceternity.com/demos/algochurn.webp",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://assets.aceternity.com/demos/algochurn.webp",
  },
];

export default function Home() {
  return (
  <>
  <Navbar/>    
  <h1 className="text-3xl font-bold underline">Hello world!</h1>
  <HeroParallax products={products} />
  </>
  );
}
