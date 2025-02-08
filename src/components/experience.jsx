import { experiences } from "@/config/experiences";
import React from "react";
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
	return (
		<div className='w-full h-full rounded-xl md:row-span-5 md:col-span-12 lg:row-span-5 lg:col-span-4 md:hidden lg:block  bg-primary sm:bg-blue-200 md:bg-green-200 lg:bg-orange-200 xl:bg-primary'>
			<div className='h-full w-full  relative group overflow-hidden flex flex-col p-8 space-y-4'>
				<h6 className='flex-none font-semibold text-heading-6 text-foreground px-2'>
					A Journey Through Code: My Professional Milestones
				</h6>
				<div className='flex flex-col space-y-2 overflow-auto no-scrollbar'>
					{experiences?.map((exp, indx) => (
						<ExperienceCard
							key={indx}
							location={exp.location}
							role={exp.role}
							duration={exp.duration}
							description={exp.description}
							company={exp.company}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
