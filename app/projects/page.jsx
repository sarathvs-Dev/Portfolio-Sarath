import React from "react";
import HeroSection from "./_components/HeroSection";
import ProjectCard from "./_components/ProjectCard";
import FooterSection from "../_components/FooterSection";
import { Separator } from "@/components/ui/separator";

function Project() {
  return (
    <>
      <div className="my-36 -z-20">
        <HeroSection />
        <div className="my-12 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard />
        </div>
        
      </div>
      <Separator/> 

      <FooterSection />
    </>
  );
}

export default Project;
