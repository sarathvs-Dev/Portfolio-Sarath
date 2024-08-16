import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { Link2Icon } from "lucide-react";
import projects from "./project.json"; // Adjust the path according to your file structure

function ProjectCard() {
  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-h-[38rem] max-w-[38rem] flex-row"
        >
          <div className="p-6">
            <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {project.title}
            </h4>
            <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 text-justify">
              {project.description}
            </h6>
            <div className="flex flex-row gap-2 text-2xl">
              {project.technologies.map((tech, techIndex) => (
                <Image
                  key={techIndex}
                  src={tech.icon}
                  width={40}
                  height={40}
                  alt={tech.name}
                  title={tech?.name}
                />
              ))}
            </div>

            <div className="flex justify-end items-center gap-3 cursor-pointer text-xl mt-4">
              {project.git && (
                <a href={project.git} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-black" />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="view website"
                >
                  <Link2Icon className="text-blue-950" />
                </a>
              )}
            </div>
            <a href="#" className="inline-block mt-4">
              <button
                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectCard;
