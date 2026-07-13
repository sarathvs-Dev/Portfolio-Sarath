import React from "react";
import HeroSection from "./_components/HeroSection";
import ProjectCard from "./_components/ProjectCard";
import FooterSection from "../_components/FooterSection";

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
      <FooterSection />
      </div>
    </>
  );
}

export default Project;
