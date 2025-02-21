import { projects } from "@/config/projects";

export const ProjectCard = ({ project }) => {
	const { title, description, image, type } = project;

	return (
		<div className='h-full w-full p-1'>
			<div className='rounded-xl bg-card text-card-foreground shadow h-full overflow-hidden border-background border-2'>
				<div className='flex relative aspect-video items-center justify-center p-4'>
					{/* Gradient overlay */}
					<div className='absolute inset-0 bg-gradient-to-b from-transparent to-background h-full w-full z-20' />

					{/* Background image */}
					<div className='absolute inset-0 z-10'>
						<img
							style={{
								position: "relative",
								width: "100%",
								height: "100%",
								left: 0,
								top: 0,
								right: 0,
								bottom: 0,
								color: "transparent",
								objectFit: "cover",
							}}
							src={image}
							alt={title}
							quality={75}
							sizes='100vw'
						/>
					</div>

					{/* Content */}
					<div className='relative z-30 flex flex-col justify-between select-none w-full'>
						{type && (
							<div className='flex justify-end p-2 text-2xl font-semibold text-primary'>
								<div className='bg-foreground p-1 rounded-full px-4'>
									{type}
								</div>
							</div>
						)}
						<div className='p-2'>
							<div className='flex justify-start p-2 text-md font-bold text-foreground'>
								{title}
							</div>
							<div className='flex justify-start p-2 text-sm text-foreground'>
								{description}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const ProjectList = ({ projects }) => {
	return (
		<div className='flex flex-col h-full'>
			{projects.map((project, index) => (
				<div key={`project-${index}`} className='h-full w-full'>
					<ProjectCard project={project} />
				</div>
			))}
		</div>
	);
};

export const ProjectSection = () => {
	return <ProjectContainer projects={projects} />;
};

export const ProjectContainer = ({ projects }) => {
	// Define responsive classes in a more manageable way
	const containerClasses =
		"w-full h-full rounded-xl " +
		"md:row-span-5 md:col-span-6 " +
		"lg:row-span-8 lg:col-span-3 " +
		"bg-secondary sm:bg-blue-200 md:bg-green-200 lg:bg-orange-200 xl:bg-secondary";

	return (
		<div className={containerClasses}>
			<div className='h-full w-full relative group overflow-hidden rounded-md p-1'>
				<div className='h-full w-full overflow-auto no-scrollbar'>
					<ProjectList projects={projects} />
				</div>
			</div>
		</div>
	);
};

// export const ProjectContainer = () => {
// 	return (
// 		<div className='w-full h-full rounded-xl md:row-span-5 md:col-span-6  lg:row-span-8 lg:col-span-3 bg-secondary sm:bg-blue-200 md:bg-green-200 lg:bg-orange-200 xl:bg-secondary'>
// 			<div className='h-full w-full relative group overflow-hidden rounded-md p-1'>
// 				<div className='h-full w-full  overflow-auto no-scrollbar'>
// 					<div className='flex flex-col h-full'>
// 						<div className=' h-full w-full'>
// 							<div className='h-full w-full p-1'>
// 								<div className='rounded-xl bg-card text-card-foreground shadow h-full overflow-hidden border-background border-2'>
// 									<div className='flex relative aspect-video items-center justify-center p-4'>
// 										<div className='absolute inset-0 bg-gradient-to-b from-transparent to-background h-full w-full z-20' />
// 										<div className='absolute inset-0   z-10'>
// 											<img
// 												style={{
// 													position: "relative",
// 													width: "100%",
// 													height: "100%",
// 													left: 0,
// 													top: 0,
// 													right: 0,
// 													bottom: 0,
// 													color: "transparent",
// 													objectFit: "cover",
// 												}}
// 												fill='true'
// 												src={`/images/hriscoreweb.webp`}
// 												quality={75}
// 												sizes='100vw'
// 											/>
// 										</div>

// 										<div className='relative  z-30   flex flex-col justify-between select-none '>
// 											<div className=' flex justify-end p-2 text-2xl font-semibold text-primary '>
// 												<div className='bg-foreground p-1 rounded-full px-4'>
// 													Web
// 												</div>
// 											</div>
// 											<div className='p-2'>
// 												<div className=' flex justify-start p-2 text-md font-bold text-foreground'>
// 													Health Assessment System
// 												</div>
// 												<div className=' flex justify-start p-2 text-sm text-foreground'>
// 													Design and develop web application for employee health
// 													assessment to avoid exposure of Covid-19, web
// 													application has several features such as AD Auth,
// 													Integrate HRIS, Health condition calculation,
// 													Dashboard and Reports
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className=' h-full w-full'>
// 							<div className='h-full w-full p-1'>
// 								<div className='rounded-xl bg-card text-card-foreground shadow h-full overflow-hidden border-background border-2'>
// 									<div className='flex relative aspect-video items-center justify-center p-4'>
// 										<div className='absolute inset-0 bg-gradient-to-b from-transparent to-background h-full w-full z-20' />
// 										<div className='absolute inset-0   z-10'>
// 											<img
// 												style={{
// 													position: "relative",
// 													width: "100%",
// 													height: "100%",
// 													left: 0,
// 													top: 0,
// 													right: 0,
// 													bottom: 0,
// 													color: "transparent",
// 													objectFit: "cover",
// 												}}
// 												fill='true'
// 												src={`/images/hriscoreweb.webp`}
// 												quality={75}
// 												sizes='100vw'
// 											/>
// 										</div>

// 										<div className='relative  z-30   flex flex-col justify-between select-none '>
// 											<div className=' flex justify-end p-2 text-2xl font-semibold text-primary '>
// 												<div className='bg-foreground p-1 rounded-full px-4'>
// 													Web
// 												</div>
// 											</div>
// 											<div className='p-2'>
// 												<div className=' flex justify-start p-2 text-md font-bold text-foreground'>
// 													Health Assessment System
// 												</div>
// 												<div className=' flex justify-start p-2 text-sm text-foreground'>
// 													Design and develop web application for employee health
// 													assessment to avoid exposure of Covid-19, web
// 													application has several features such as AD Auth,
// 													Integrate HRIS, Health condition calculation,
// 													Dashboard and Reports
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className=' h-full w-full'>
// 							<div className='h-full w-full p-1'>
// 								<div className='rounded-xl bg-card text-card-foreground shadow h-full overflow-hidden border-background border-2'>
// 									<div className='flex relative aspect-video items-center justify-center p-4'>
// 										<div className='absolute inset-0 bg-gradient-to-b from-transparent to-background h-full w-full z-20' />
// 										<div className='absolute inset-0   z-10'>
// 											<img
// 												style={{
// 													position: "relative",
// 													width: "100%",
// 													height: "100%",
// 													left: 0,
// 													top: 0,
// 													right: 0,
// 													bottom: 0,
// 													color: "transparent",
// 													objectFit: "cover",
// 												}}
// 												fill='true'
// 												src={`/images/hriscoreweb.webp`}
// 												quality={75}
// 												sizes='100vw'
// 											/>
// 										</div>

// 										<div className='relative  z-30   flex flex-col justify-between select-none '>
// 											<div className=' flex justify-end p-2 text-2xl font-semibold text-primary '>
// 												<div className='bg-foreground p-1 rounded-full px-4'>
// 													Web
// 												</div>
// 											</div>
// 											<div className='p-2'>
// 												<div className=' flex justify-start p-2 text-md font-bold text-foreground'>
// 													Health Assessment System
// 												</div>
// 												<div className=' flex justify-start p-2 text-sm text-foreground'>
// 													Design and develop web application for employee health
// 													assessment to avoid exposure of Covid-19, web
// 													application has several features such as AD Auth,
// 													Integrate HRIS, Health condition calculation,
// 													Dashboard and Reports
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
