"use client";

import React, { useEffect } from "react";
import { TooltipProvider } from "./ui/tooltip";
import { socialLinks } from "@/config/socialLinks";
import { SocialLink } from "./SocialLink";
import { Button } from "./ui/button";
import { getCalApi } from "@calcom/embed-react";

export const Footer = () => {
	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: "lets-connect" });
			cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
		})();
	}, []);

	return (
		<div className='w-full h-full rounded-xl md:row-span-5 md:col-span-12 lg:row-span-2 lg:col-span-3 md:hidden lg:block bg-secondary sm:bg-blue-200 md:bg-green-200 lg:bg-orange-200 xl:bg-secondary'>
			<div className='h-min md:h-full py-6 md:py-0 w-full relative group overflow-hidden'>
				<div className='flex h-full w-full  items-center justify-between px-6 lg:px-1 xl:px-6'>
					<div className='flex items-center space-x-2'>
						<TooltipProvider>
							{socialLinks?.map((link, indx) => (
								<SocialLink
									key={indx}
									href={link?.href}
									icon={link?.icon}
									tooltipContent={link?.tooltipContent}
								/>
							))}
							{/* <LikeButton /> */}

							<Button
								data-cal-namespace='lets-connect'
								data-cal-link='rafi-aman/lets-connect'
								data-cal-config='{"layout":"month_view"}'
							>
								Let's Connect
							</Button>
						</TooltipProvider>
					</div>
				</div>
			</div>
		</div>
	);
};
