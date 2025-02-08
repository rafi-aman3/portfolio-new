import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export const SocialLink = ({ href, icon, tooltipContent }) => {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Link
					href={href}
					target='_blank'
					rel='noopener noreferrer'
					className={buttonVariants({ variant: "default" })}
				>
					{icon}
				</Link>
			</TooltipTrigger>
			<TooltipContent>
				<p className=' text-foreground'>{tooltipContent}</p>
			</TooltipContent>
		</Tooltip>
	);
};
