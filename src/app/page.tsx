import WorkExperienceCard from "@/components/WorkExperienceCard";
import { portfolioData } from "@/utils/portfolio-data";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen px-6">
      <section className="fade-pullup mt-10 flex items-start justify-between space-x-6">
        <div className="max-w-lg">
          <p className="text-3xl md:text-4xl text-black dark:text-zinc-200 font-bold">
            Hi! I&apos;m Subham Mani<span>👋</span>
          </p>
          <p className="text-secondary_dark dark:text-zinc-300 text-base mt-4 font-medium">
            {portfolioData.intro}
          </p>
          <p className="w-max border-b-2 border-primary_dark flex gap-2 items-center text-secondary_dark dark:text-zinc-200 font-bold text-sm md:text-base mt-6">
            Find me on <MdArrowOutward />
          </p>
          <div className="mt-6 flex items-center space-x-4">
            {portfolioData.socialLinks.map((social) => (
              <Link
                className="p-1"
                key={social.name}
                target="_blank"
                href={social.url}
              >
                <social.icon
                  className="text-secondary_dark dark:text-zinc-200 hover:text-primary_dark dark:hover:text-primary_dark"
                  size={20}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="size-[180px] min-w-[100px] overflow-hidden">
          <Image
            className="object-cover rounded-full"
            width={180}
            height={180}
            src={"/profile-photo.jpg"}
            alt="Subham Mani"
          />
        </div>
      </section>
      <section className="fade-pullup-delayed-1 mt-10">
        <h3 className="font-bold animated-heading w-max px-2 py-1 text-sm md:text-base">
          About Me
        </h3>
        <ul className="text-secondary_dark dark:text-zinc-200 text-sm md:text-base mt-4 space-y-2">
          {portfolioData.about.map((about) => {
            return (
              <li
                className="font-medium list-disc ml-4 text-sm md:text-base"
                key={about}
              >
                {about}
              </li>
            );
          })}
        </ul>
      </section>
      <section className="fade-pullup-delayed-2 mt-10">
        <h3 className="font-bold animated-heading w-max px-2 py-1 text-sm md:text-base">
          Work Experience
        </h3>
        <ul className="mt-6 space-y-6">
          {portfolioData.workExperience.map((work) => {
            return (
              <div key={work.company}>
                <WorkExperienceCard {...work} />
                {portfolioData.workExperience[
                  portfolioData.workExperience.length - 1
                ] !== work && (
                  <div className="border-b border-secondary_dark pt-2"></div>
                )}
              </div>
            );
          })}
        </ul>
      </section>
      <section className="fade-pullup-delayed-3 mt-10">
        <h3 className="font-bold animated-heading w-max px-2 py-1 text-sm md:text-base">
          Tech Stack
        </h3>
        <p className="font-medium mt-4 text-secondary_dark dark:text-zinc-200 text-sm md:text-base">
          You will mostly find me working with these tech:{" "}
        </p>
        <ul className="flex flex-wrap gap-2 mt-4">
          {portfolioData.techStack.map((tech) => {
            return (
              <li
                className="py-1 px-2 flex items-center gap-2 bg-secondary_light dark:bg-secondary_dark text-secondary_dark dark:text-white"
                key={tech.name}
              >
                <tech.icon color={tech.color} className="size-4 md:size-5" />
                <p className="text-xs md:text-sm font-bold">{tech.name}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
