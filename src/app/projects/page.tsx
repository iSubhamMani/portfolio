import { portfolioData } from "@/utils/portfolio-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const MyProjects = () => {
  return (
    <main className="flex flex-col min-h-screen px-6 mt-10">
      <h3 className="fade-pullup font-bold animated-heading w-max px-2 py-1 text-xl md:text-3xl">
        Check out my projects
      </h3>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {portfolioData.projects.map((project) => {
          return (
            <div
              key={project.title}
              className="rounded-sm overflow-hidden fade-pullup-delayed-1 shadow-md bg-[#fff] dark:bg-[#252525] flex flex-col"
            >
              <div className="overflow-hidden w-full h-40">
                <Image
                  className="w-full h-full object-cover"
                  src={project.imgUrl}
                  alt={project.title}
                  width={400}
                  height={200}
                />
              </div>
              <div className="flex-1 p-4 flex flex-col gap-2">
                <h4 className="my-2 text-secondary_dark dark:text-zinc-200 border-l-2 px-2 border-primary_dark w-max bg-secondary_light dark:bg-secondary_dark font-bold text-xl">
                  {project.title}
                </h4>
                <div className="">
                  <p className="line-clamp-2 text-sm text-secondary_dark font-medium dark:text-zinc-200">
                    {project.description}
                  </p>
                </div>
                <ul className="flex gap-2 flex-wrap mt-4">
                  {project.techUsed.map((tech) => {
                    return (
                      <li
                        className="py-1 px-2 flex items-center gap-2 bg-secondary_dark dark:bg-secondary_light text-zinc-200 dark:text-secondary_dark"
                        key={tech}
                      >
                        <p className="text-xs font-bold">{tech}</p>
                      </li>
                    );
                  })}
                </ul>
                <div className="flex-1 flex items-end justify-end">
                  <div className="flex items-center justify-end space-x-4 mt-4">
                    <Link target="_blank" href={project.githubLink}>
                      <FaGithub
                        className="text-secondary_dark dark:text-zinc-200"
                        size={20}
                      />
                    </Link>
                    <Link
                      target="_blank"
                      href={project.liveLink}
                      className="flex gap-2 items-center nav-btn-secondary font-bold text-sm md:text-base"
                    >
                      Live Link
                      <MdArrowOutward size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className="mt-6">
        <p className="text-center text-sm md:text-base text-secondary_dark dark:text-zinc-200">
          Cooking more soon...
        </p>
      </section>
    </main>
  );
};

export default MyProjects;
