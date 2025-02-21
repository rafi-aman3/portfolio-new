import Image from "next/image";
import React from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";

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

					{/* <TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className='absolute flex items-center justify-center group-hover:shadow-lg  w-4 h-4  z-20 bg-primaryred text-primary rounded-full cursor-pointer transform transition-all duration-300 left-[10%] top-[10%]'>
									<div className=' px-2 duration-300 opacity-0 group-hover:opacity-100 -translate-y-10 group-hover:translate-y-0 transition-all drop-shadow-lg'>
										<div className='h-12 w-12 relative' data-state='closed'>
											<img
												alt='icon_worcas'
												loading='lazy'
												decoding='async'
												data-nimg='fill'
												className='object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent hover:scale-125 transition-all ease-lienar duration-700'
												src='/icons/Nextjs.svg'
											/>
										</div>
									</div>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p className=' text-foreground'>Next JS</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className='absolute flex items-center justify-center group-hover:shadow-lg  w-4 h-4  z-20 bg-primaryred text-primary rounded-full cursor-pointer transform transition-all duration-300 left-[90%] top-[60%]'>
									<div className=' px-2 duration-300 opacity-0 group-hover:opacity-100 -translate-y-10 group-hover:translate-y-0 transition-all drop-shadow-lg'>
										<div className='h-12 w-12 relative' data-state='closed'>
											<img
												alt='icon_worcas'
												loading='lazy'
												decoding='async'
												data-nimg='fill'
												className='object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent hover:scale-125 transition-all ease-lienar duration-700'
												src='/icons/AWS.svg'
											/>
										</div>
									</div>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p className=' text-foreground'>Next JS</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className='absolute flex items-center justify-center group-hover:shadow-lg  w-4 h-4  z-20 bg-primaryred text-primary rounded-full cursor-pointer transform transition-all duration-300 left-[5%] top-[25%]'>
									<div className=' px-2 duration-300 opacity-0 group-hover:opacity-100 -translate-y-10 group-hover:translate-y-0 transition-all drop-shadow-lg'>
										<div className='h-12 w-12 relative' data-state='closed'>
											<img
												alt='icon_worcas'
												loading='lazy'
												decoding='async'
												data-nimg='fill'
												className='object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent hover:scale-125 transition-all ease-lienar duration-700'
												src='/icons/AWS.svg'
											/>
										</div>
									</div>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p className=' text-foreground'>Next JS</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className='absolute flex items-center justify-center group-hover:shadow-lg  w-4 h-4  z-20 bg-primaryred text-primary rounded-full cursor-pointer transform transition-all duration-300 left-[6%] top-[40%]'>
									<div className=' px-2 duration-300 opacity-0 group-hover:opacity-100 -translate-y-10 group-hover:translate-y-0 transition-all drop-shadow-lg'>
										<div className='h-12 w-12 relative' data-state='closed'>
											<img
												alt='icon_worcas'
												loading='lazy'
												decoding='async'
												data-nimg='fill'
												className='object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent hover:scale-125 transition-all ease-lienar duration-700'
												src='/icons/AWS.svg'
											/>
										</div>
									</div>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p className=' text-foreground'>Next JS</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className='absolute flex items-center justify-center group-hover:shadow-lg  w-4 h-4  z-20 bg-primaryred text-primary rounded-full cursor-pointer transform transition-all duration-300 left-[20%] top-[25%]'>
									<div className=' px-2 duration-300 opacity-0 group-hover:opacity-100 -translate-y-10 group-hover:translate-y-0 transition-all drop-shadow-lg'>
										<div className='h-12 w-12 relative' data-state='closed'>
											<img
												alt='icon_worcas'
												loading='lazy'
												decoding='async'
												data-nimg='fill'
												className='object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent hover:scale-125 transition-all ease-lienar duration-700'
												src='/icons/AWS.svg'
											/>
										</div>
									</div>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p className=' text-foreground'>Next JS</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className='absolute flex items-center justify-center group-hover:shadow-lg  w-4 h-4  z-20 bg-primaryred text-primary rounded-full cursor-pointer transform transition-all duration-300 left-[72%] top-[33%]'>
									<div className=' px-2 duration-300 opacity-0 group-hover:opacity-100 -translate-y-10 group-hover:translate-y-0 transition-all drop-shadow-lg'>
										<div className='h-12 w-12 relative' data-state='closed'>
											<img
												alt='icon_worcas'
												loading='lazy'
												decoding='async'
												data-nimg='fill'
												className='object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent hover:scale-125 transition-all ease-lienar duration-700'
												src='/icons/AWS.svg'
											/>
										</div>
									</div>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p className=' text-foreground'>Next JS</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className='absolute flex items-center justify-center group-hover:shadow-lg  w-4 h-4  z-20 bg-primaryred text-primary rounded-full cursor-pointer transform transition-all duration-300 left-[73%] top-[10%]'>
									<div className=' px-2 duration-300 opacity-0 group-hover:opacity-100 -translate-y-10 group-hover:translate-y-0 transition-all drop-shadow-lg'>
										<div className='h-12 w-12 relative' data-state='closed'>
											<img
												alt='icon_worcas'
												loading='lazy'
												decoding='async'
												data-nimg='fill'
												className='object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent hover:scale-125 transition-all ease-lienar duration-700'
												src='/icons/AWS.svg'
											/>
										</div>
									</div>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p className=' text-foreground'>Next JS</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className='absolute flex items-center justify-center group-hover:shadow-lg  w-4 h-4  z-20 bg-primaryred text-primary rounded-full cursor-pointer transform transition-all duration-300 left-[12%] top-[55%]'>
									<div className=' px-2 duration-300 opacity-0 group-hover:opacity-100 -translate-y-10 group-hover:translate-y-0 transition-all drop-shadow-lg'>
										<div className='h-12 w-12 relative' data-state='closed'>
											<img
												alt='icon_worcas'
												loading='lazy'
												decoding='async'
												data-nimg='fill'
												className='object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent hover:scale-125 transition-all ease-lienar duration-700'
												src='/icons/Tailwind CSS.svg'
											/>
										</div>
									</div>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p className=' text-foreground'>Next JS</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className='absolute flex items-center justify-center group-hover:shadow-lg  w-4 h-4  z-20 bg-primaryred text-primary rounded-full cursor-pointer transform transition-all duration-300 left-[33%] top-[15%]'>
									<div className=' px-2 duration-300 opacity-0 group-hover:opacity-100 -translate-y-10 group-hover:translate-y-0 transition-all drop-shadow-lg'>
										<div className='h-12 w-12 relative' data-state='closed'>
											<img
												alt='icon_worcas'
												loading='lazy'
												decoding='async'
												data-nimg='fill'
												className='object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent hover:scale-125 transition-all ease-lienar duration-700'
												src='/icons/Tailwind CSS.svg'
											/>
										</div>
									</div>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p className=' text-foreground'>Next JS</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className='absolute flex items-center justify-center group-hover:shadow-lg  w-4 h-4  z-20 bg-primaryred text-primary rounded-full cursor-pointer transform transition-all duration-300 left-[20%] top-[40%]'>
									<div className=' px-2 duration-300 opacity-0 group-hover:opacity-100 -translate-y-10 group-hover:translate-y-0 transition-all drop-shadow-lg'>
										<div className='h-12 w-12 relative' data-state='closed'>
											<img
												alt='icon_worcas'
												loading='lazy'
												decoding='async'
												data-nimg='fill'
												className='object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent hover:scale-125 transition-all ease-lienar duration-700'
												src='/icons/Tailwind CSS.svg'
											/>
										</div>
									</div>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p className=' text-foreground'>Next JS</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className='absolute flex items-center justify-center group-hover:shadow-lg  w-4 h-4  z-20 bg-primaryred text-primary rounded-full cursor-pointer transform transition-all duration-300 left-[49%] top-[7%]'>
									<div className=' px-2 duration-300 opacity-0 group-hover:opacity-100 -translate-y-10 group-hover:translate-y-0 transition-all drop-shadow-lg'>
										<div className='h-12 w-12 relative' data-state='closed'>
											<img
												alt='icon_worcas'
												loading='lazy'
												decoding='async'
												data-nimg='fill'
												className='object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent hover:scale-125 transition-all ease-lienar duration-700'
												src='/icons/Tailwind CSS.svg'
											/>
										</div>
									</div>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p className=' text-foreground'>Next JS</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className='absolute flex items-center justify-center group-hover:shadow-lg  w-4 h-4  z-20 bg-primaryred text-primary rounded-full cursor-pointer transform transition-all duration-300 left-[80%] top-[15%]'>
									<div className=' px-2 duration-300 opacity-0 group-hover:opacity-100 -translate-y-10 group-hover:translate-y-0 transition-all drop-shadow-lg'>
										<div className='h-12 w-12 relative' data-state='closed'>
											<img
												alt='icon_worcas'
												loading='lazy'
												decoding='async'
												data-nimg='fill'
												className='object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent hover:scale-125 transition-all ease-lienar duration-700'
												src='/icons/Tailwind CSS.svg'
											/>
										</div>
									</div>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p className=' text-foreground'>Next JS</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className='absolute flex items-center justify-center group-hover:shadow-lg  w-4 h-4  z-20 bg-primaryred text-primary rounded-full cursor-pointer transform transition-all duration-300 left-[90%] top-[46%]'>
									<div className=' px-2 duration-300 opacity-0 group-hover:opacity-100 -translate-y-10 group-hover:translate-y-0 transition-all drop-shadow-lg'>
										<div className='h-12 w-12 relative' data-state='closed'>
											<img
												alt='icon_worcas'
												loading='lazy'
												decoding='async'
												data-nimg='fill'
												className='object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent hover:scale-125 transition-all ease-lienar duration-700'
												src='/icons/Tailwind CSS.svg'
											/>
										</div>
									</div>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p className=' text-foreground'>Next JS</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className='absolute flex items-center justify-center group-hover:shadow-lg  w-4 h-4  z-20 bg-primaryred text-primary rounded-full cursor-pointer transform transition-all duration-300 left-[72%] top-[50%]'>
									<div className=' px-2 duration-300 opacity-0 group-hover:opacity-100 -translate-y-10 group-hover:translate-y-0 transition-all drop-shadow-lg'>
										<div className='h-12 w-12 relative' data-state='closed'>
											<img
												alt='icon_worcas'
												loading='lazy'
												decoding='async'
												data-nimg='fill'
												className='object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent hover:scale-125 transition-all ease-lienar duration-700'
												src='/icons/Tailwind CSS.svg'
											/>
										</div>
									</div>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p className=' text-foreground'>Next JS</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className='absolute flex items-center justify-center group-hover:shadow-lg  w-4 h-4  z-20 bg-primaryred text-primary rounded-full cursor-pointer transform transition-all duration-300 left-[88%] top-[30%]'>
									<div className=' px-2 duration-300 opacity-0 group-hover:opacity-100 -translate-y-10 group-hover:translate-y-0 transition-all drop-shadow-lg'>
										<div className='h-12 w-12 relative' data-state='closed'>
											<img
												alt='icon_worcas'
												loading='lazy'
												decoding='async'
												data-nimg='fill'
												className='object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent hover:scale-125 transition-all ease-lienar duration-700'
												src='/icons/Tailwind CSS.svg'
											/>
										</div>
									</div>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p className=' text-foreground'>Next JS</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider> */}
				</div>
			</div>
		</div>
	);
};
