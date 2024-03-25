import { HeroParallaxDemo } from "@/app/hero";
import { Navbar } from "./navbar";
import Tabs from "./tabs";
// import { ResumeBtn } from "./resumeBtn";

export default function Home() {
  return (<>
    <Navbar/>
    <HeroParallaxDemo />
    
    {/* <ResumeBtn/> */}
    <Tabs/>
  </>
  );
}
