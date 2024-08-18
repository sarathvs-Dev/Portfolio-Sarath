import React from "react";
import HeroSection from "./_components/HeroSection";
import ProjectCard from "./_components/ProjectCard";
import FooterSection from "../_components/FooterSection";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

function Project() {
  return (
    <>
      <div className="my-36 -z-20">
        <HeroSection />
        <div className="my-12 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard />
        </div>
        
      </div>

      <div className="flex h-5 items-center space-x-4  text-gray-600  mb-6 mt-16 justify-center md:hidden">
      
       
      <div className="hover:text-gray-950">
      <Link href={'/'}>
     Home
      </Link>

      </div>
      <Separator orientation="vertical" />
      <div className="hover:text-gray-950">
      <Link href={'/about'}>
          About Me
          </Link>
      </div>
     
    </div>
      <Separator/> 

      <FooterSection />
    </>
  );
}

export default Project;
