import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { Link2Icon, FolderGit2 } from "lucide-react";
import projects from "./project.json"; // Adjust the path according to your file structure

const accents = [
  { bar: "from-indigo-500 via-violet-500 to-fuchsia-500", chip: "bg-indigo-50 text-indigo-600" },
  { bar: "from-fuchsia-500 via-pink-500 to-rose-500", chip: "bg-fuchsia-50 text-fuchsia-600" },
  { bar: "from-cyan-500 via-sky-500 to-indigo-500", chip: "bg-sky-50 text-sky-600" },
  { bar: "from-emerald-500 via-teal-500 to-cyan-500", chip: "bg-emerald-50 text-emerald-600" },
];

function ProjectCard() {
  return (
    <>
      {projects.map((project, index) => {
        const accent = accents[index % accents.length];
        return (
        <div
          key={index}
          style={{ animationDelay: `${(index % 6) * 80}ms` }}
          className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both group relative flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className={`h-1.5 w-full bg-gradient-to-r ${accent.bar}`}></div>

          <div className="p-6 flex flex-col flex-1">
            <div className="mb-3 flex items-start justify-between gap-3">
              <h4 className="font-display text-xl font-semibold leading-snug tracking-tight text-gray-900">
                {project.title}
              </h4>
              <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${accent.chip}`}>
                <FolderGit2 size={16} />
              </span>
            </div>
            {project.role && (
              <span className="mb-3 inline-block w-fit rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-600">
                {project.role}
              </span>
            )}
            <h6 className="mb-4 flex-1 font-sans text-sm leading-relaxed tracking-normal text-gray-600">
              {project.description}
            </h6>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 ring-1 ring-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
                >
                  {tech.icon && (
                    <Image
                      src={tech.icon}
                      width={16}
                      height={16}
                      alt={tech.name}
                      className="object-contain"
                    />
                  )}
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="flex justify-end items-center gap-4 text-xl mt-5 pt-4 border-t border-gray-100">
              {project.git && (
                <a href={project.git} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                  <FaGithub />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="view website"
                  className="text-gray-500 hover:text-indigo-600 transition-colors"
                >
                  <Link2Icon />
                </a>
              )}
            </div>
          </div>
        </div>
        );
      })}
    </>
  );
}

export default ProjectCard;
