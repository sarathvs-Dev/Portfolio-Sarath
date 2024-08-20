import React from "react";
import HeroSection from "./_components/HeroSection";
import ProjectCard from "./_components/ProjectCard";
import FooterSection from "../_components/FooterSection";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

function Project() {
  return (
    <>
      <div className="my-36 -z-20 mx-5 md:mx-20 lg:mx-36">
        <HeroSection />
        <div className="my-12 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard />
        </div>
        
      </div>
      <div className="bg-gray-950 ">

      <div className="flex h-5 items-center space-x-4  text-gray-600  py-8  justify-center md:hidden bg-gray-900">
      
       
      <div className="hover:text-gray-50 text-gray-200">
      <Link href={'/'}>
     Home
      </Link>

      </div>
      <Separator orientation="vertical"  className=" h-5"/>
      <div className="hover:text-gray-50 text-gray-200">
      <Link href={'/about'}>
          About Me
          </Link>
      </div>
     
    </div>
      <Separator className="bg-gray-500  md:h-2"/> 

      <FooterSection />

      </div>
    </>
  );
}

export default Project;
