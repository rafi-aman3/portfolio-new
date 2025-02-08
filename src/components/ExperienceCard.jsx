import React from "react";

export const ExperienceCard = ({
	company,
	location,
	role,
	duration,
	description,
}) => {
	return (
		<div className='p-2'>
			<div className='rounded-xl border bg-card text-card-foreground shadow secondary-foreground border-secondary hover:[box-shadow:6px_6px_0_black] transition-all'>
				<div className='pt-0'>
					<div className='p-4 relative overflow-hidden'>
						<div className='absolute w-1/2 h-40 right-2 z-10 opacity-10 '></div>
						<div className='relative z-20 flex flex-col space-y-2'>
							<div>
								<div className='text-lg font-semibold'>
									{company} | {location}
								</div>
								<div className='text-md'>
									{role} <span className='text-primary'>({duration})</span>
								</div>
							</div>
							<div className='text-sm'>{description}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
