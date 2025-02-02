import React from "react";

export const ProfileImage = () => {
	return (
		<div className='w-full h-full rounded-xl md:row-span-4 md:col-span-4  lg:row-span-5 lg:col-span-3  bg-slate-200 sm:bg-blue-200 md:bg-green-200 lg:bg-orange-200 xl:bg-slate-200 overflow-hidden'>
			<div className='h-full w-full'>
				<div className='h-full w-full relative aspect-[4/3] group'></div>
			</div>
		</div>
	);
};
