import Image from "next/image";
import React from "react";

interface WorkProps {
  companyLogo: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

const WorkExperienceCard = (work: WorkProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-6">
        <div className="size-[30px] md:size-[40px] rounded-full overflow-hidden">
          <Image
            className="object-cover"
            width={40}
            height={40}
            src={work.companyLogo}
            alt={work.company}
          />
        </div>
        <div className="flex-1 flex flex-col md:flex-row justify-between items-start">
          <div>
            <p className="text-secondary_dark dark:text-zinc-200 font-bold text-sm md:text-base">
              {work.company}
            </p>
            <p className="text-secondary_dark dark:text-zinc-200 font-medium text-xs md:text-sm">
              {work.position}
            </p>
          </div>
          <p className="text-secondary_dark font-medium dark:text-zinc-200 text-xs md:text-sm mt-2 md:mt-0">
            {work.startDate} - {work.endDate}
          </p>
        </div>
      </div>
      <p className="font-medium text-secondary_dark dark:text-zinc-200 text-sm md:text-base">
        {work.description}
      </p>
    </div>
  );
};

export default WorkExperienceCard;
