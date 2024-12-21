import { portfolioData } from "@/utils/portfolio-data";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-secondary_dark mt-10 mx-6 pt-10 flex justify-between items-center">
      <Link href={"/"}>
        <span className="text-secondary_dark dark:text-zinc-200 font-bold text-sm md:text-base">
          &copy; Subham Mani
        </span>
      </Link>
      <div className="flex items-center space-x-4">
        {portfolioData.socialLinks.map((social) => (
          <Link key={social.name} target="_blank" href={social.url}>
            <social.icon
              className="text-secondary_dark dark:text-zinc-200 hover:text-primary_dark dark:hover:text-primary_dark"
              size={16}
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
