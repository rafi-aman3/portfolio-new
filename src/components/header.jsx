import { Download } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Header = () => {
	return (
		<div className='w-full h-full rounded-xl   md:row-span-1 md:col-span-12 lg:row-span-1 lg:col-span-12 bg-secondary sm:bg-blue-200 md:bg-green-200 lg:bg-orange-200 xl:bg-secondary'>
			<div className='h-full flex items-center px-8 justify-between'>
				<div className=' font-serif text-body-md py-4 md:py-0 md:text-md font-semibold text-background '>
					<div
						className='box text-3xl font-bold text-primary'
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
						{/* <div className='hover:text-primary transition-all'>Blogs</div> */}
						{/* <div className='hover:text-primary transition-all'>
							All Projects
						</div> */}
					</div>
					<div className='-translate-y-1'>
						<Link
							target='_blank'
							href={
								"https://drive.google.com/file/d/134_e5xeVS8CIigjFttF_Aih5_EyIDTfD/view?usp=sharing"
							}
						>
							<Button className='text-foreground'>
								<Download />
								Download CV
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
