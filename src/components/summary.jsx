export const Summary = () => {
	return (
		<div
			style={{ opacity: 1, willChange: "auto" }}
			className='w-full h-full rounded-xl md:row-span-4 md:col-span-8  lg:row-span-5 lg:col-span-6  bg-primary sm:bg-blue-200 md:bg-green-200 lg:bg-orange-200 xl:bg-primary'
		>
			<div className='h-full w-full  relative group overflow-hidden flex items-center '>
				<div className='p-12 flex flex-col space-y-8 '>
					<div className='border-l-4  pl-8 py-4 border-primary-foreground '>
						<div className='text-heading-6 font-semibold text-primary-foreground'>
							Hello World ! 👋
						</div>
						<div className='font-semibold text-heading-2 text-background'>
							Know Me More{" "}
							<span className='text-primary-foreground text-heading-3 font-semibold'>
								.
							</span>
						</div>
					</div>
					<div className='text-body-lg text-accent-foreground'>
						<span className='font-bold  relative after:absolute  after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-accent-foreground/50 after:scale-x-0 after:origin-left group-hover:after:scale-x-100 after:transition-transform after:duration-300'>
							I'm Md Amanullah Rafi, a Software Developer
						</span>
						, with nearly 5 years of experience in the tech industry. My
						expertise spans across building robust websites, dynamic web
						applications, and intuitive mobile applications. I also specialize
						in B2B integration systems, ensuring seamless connectivity and
						efficiency for businesses.
					</div>
				</div>
			</div>
		</div>
	);
};
