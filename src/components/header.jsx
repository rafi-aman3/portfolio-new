export const Header = () => {
	return (
		<div className='w-full h-full rounded-xl   md:row-span-1 md:col-span-12 lg:row-span-1 lg:col-span-12 bg-secondary sm:bg-blue-200 md:bg-green-200 lg:bg-orange-200 xl:bg-secondary'>
			<div className='h-full flex items-center px-8 justify-between'>
				<div className=' font-serif text-body-md py-4 md:py-0 md:text-md font-semibold text-background '>
					<div
						className='box'
						style={{
							opacity: 1,
							willChange: "auto",
							transform: "none",
						}}
					>
						Md Amanullah Rafi
					</div>
				</div>
				<div className='hidden md:flex items-center space-x-4'>
					<div className='text-md font-semibold text-background flex space-x-4 px-4 select-none cursor-pointer '>
						<div className='hover:text-primary transition-all'>Blogs</div>
						<div className='hover:text-primary transition-all'>
							All Projects
						</div>
					</div>
					<div className='-translate-y-1'>
						<button className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary shadow h-9 px-4 py-2 border-2 border-black text-foreground hover:bg-primary active:bg-primary [box-shadow:6px_6px_0_black] active:translate-y-[5px] active:translate-x-[5px] active:[box-shadow:0_2px_0_black] transition-all duration-150 ease-in-out'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='lucide lucide-download text-foreground'
							>
								<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
								<polyline points='7 10 12 15 17 10'></polyline>
								<line x1='12' x2='12' y1='15' y2='3'></line>
							</svg>
							Download CV
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
