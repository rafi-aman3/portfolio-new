import Image from "next/image";
import React from "react";

export const ProfileImage = () => {
	return (
		<div className='w-full h-full rounded-xl md:row-span-4 md:col-span-4  lg:row-span-5 lg:col-span-3  bg-slate-200 sm:bg-blue-200 md:bg-green-200 lg:bg-orange-200 xl:bg-slate-200 overflow-hidden'>
			<div className='h-full w-full'>
				<div className='h-full overflow-hidden rounded-xl w-full relative aspect-[4/3] group'>
					<Image
						className='object-cover rounded-xl group-hover:scale-125  transition-all ease-lienar duration-700'
						fill
						sizes='100vw'
						src={"/images/profile.jpg"}
						alt='profile-image'
						quality={75}
						priority={false}
					/>
					<div className='group-hover:opacity-0 group-hover:translate-y-10 absolute text-primary-foreground opacity-50 bottom-0 flex items-center justify-center w-full pb-4 transition-all '>
						( hover on me )
					</div>
				</div>
			</div>
		</div>
	);
};
