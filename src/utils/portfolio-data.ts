import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandSocketIo } from "react-icons/tb";
import {
  RiFirebaseFill,
  RiNextjsFill,
  RiTailwindCssFill,
  RiSupabaseFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPrisma,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

export const portfolioData = {
  intro:
    "A Full Stack Web Developer from India. I love building things that makes this world a little better place to live.",
  about: [
    "Pursuing Bachelor's in Computer Science at The Heritage Institute of Technology, Kolkata.",
    "Web Dev Lead at Google Developers Group On Campus HITK.",
    "2x Hackathon Winner 🏆.",
    "Off-duty, I explore Earth, burn recipes and conquer virtual worlds.",
  ],
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/subham-mani-048731288",
      icon: FaLinkedin,
    },
    {
      name: "X",
      url: "https://x.com/manisubham09",
      icon: FaXTwitter,
    },
    {
      name: "GitHub",
      url: "https://github.com/iSubhamMani",
      icon: FaGithub,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/subhamxmani",
      icon: FaInstagram,
    },
  ],
  workExperience: [
    {
      companyLogo: "/lamarr.jpeg",
      company: "Lamarr",
      position: "Frontend Intern",
      startDate: "Feb 2025",
      endDate: "March 2025",
      description:
        "Developed and enhanced UI, improving user experience and efficiency in managing recruitment workflows. Optimized the shortlisting process and automating scheduling to improve hiring efficiency.",
    },
    {
      companyLogo: "/wit-dreamin.png",
      company: "Women in Tech Dreamin'",
      position: "Web Developer",
      startDate: "Aug 2024",
      endDate: "Oct 2024",
      description:
        "Worked on the event platform for Women in Tech Dreamin' Kolkata 2024 enabling attendees to sign in, access event info and engage with interactive mini games, creating a gamified experience to earn virtual coins which they can redeem at the integrated marketplace to earn exclusive WIT Dreamin' swags.",
    },
  ],
  techStack: [
    {
      name: "Next.js",
      icon: RiNextjsFill,
      color: "#000",
    },
    {
      name: "React",
      icon: FaReact,
      color: "#61DAFB",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "#3C873A",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "#000",
    },

    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#007ACC",
    },

    {
      name: "Tailwind CSS",
      icon: RiTailwindCssFill,
      color: "#06B6D4",
    },
    {
      name: "Redux",
      icon: SiRedux,
      color: "#764ABC",
    },

    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
    },
    {
      name: "PostgreSQL",
      icon: BiLogoPostgresql,
      color: "#336791",
    },
    {
      name: "Prisma",
      icon: SiPrisma,
      color: "#2D3748",
    },
    {
      name: "Firebase",
      icon: RiFirebaseFill,
      color: "#FFCA28",
    },
    {
      name: "Docker",
      icon: FaDocker,
      color: "#2496ED",
    },
    {
      name: "Redis",
      icon: DiRedis,
      color: "#DC382D",
    },
    {
      name: "Supabase",
      icon: RiSupabaseFill,
      color: "#3ECF8E",
    },
    {
      name: "Socket.io",
      icon: TbBrandSocketIo,
      color: "#010101",
    },
  ],
  projects: [
    {
      imgUrl: "/vibe-check.png",
      title: "Vibe Check",
      description:
        "Let the crowd decide what plays next in the queue. Add songs and vote for the next music.",
      liveLink: "https://vibe-check-ruddy.vercel.app",
      githubLink: "https://github.com/iSubhamMani/vibe-check",
      techUsed: [
        "Next.js",
        "NextAuth.js",
        "Postgres",
        "Prisma",
        "Pusher",
        "Tanstack Query",
        "AceternityUI",
      ],
    },
    {
      imgUrl: "/learnit.png",
      title: "LearnIt",
      description:
        "Generate note summaries, test quizzes and engage in discussions with LearnIt",
      liveLink: "https://learnit-tawny.vercel.app/",
      githubLink: "https://github.com/iSubhamMani/learnit",
      techUsed: [
        "Next.js",
        "NextAuth.js",
        "Gemini",
        "MongoDB",
        "Tanstack Query",
        "DaisyUI",
      ],
    },
    {
      imgUrl: "/note-keeper.png",
      title: "Note Keeper",
      description: "Query your notes with AI and never forget anything again.",
      liveLink: "https://notekeeper-psi-two.vercel.app",
      githubLink: "https://github.com/iSubhamMani/note-keeper",
      techUsed: ["Next.js", "Supabase", "Pinecone", "Gemini"],
    },
    {
      imgUrl: "/med-o-ai.png",
      title: "Med-o-AI",
      description:
        "Decode prescriptions and get personalized health recommendations with Med-o-AI",
      liveLink: "https://med-o-ai.vercel.app",
      githubLink: "https://github.com/iSubhamMani/Med-o-ai",
      techUsed: ["Next.js", "NextAuth", "MongoDB", "Gemini", "AceternityUI"],
    },
    {
      imgUrl: "/gamespace.png",
      title: "GameSpace",
      description:
        "A platform to view the latest and popular games. Search, view details and add them to your bag!",
      liveLink: "https://gamespace-63869.web.app",
      githubLink: "https://github.com/iSubhamMani/gameSpace",
      techUsed: ["React", "Firebase", "Redux", "Tailwind CSS"],
    },
  ],
};
