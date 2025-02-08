"use client";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

export const LikeButton = () => {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button>
					<Heart />
					<p className='block md:hidden 2xl:block'>1447 Likes</p>
				</Button>
			</TooltipTrigger>
			<TooltipContent>
				<p className=' text-foreground'>1447 Likes</p>
			</TooltipContent>
		</Tooltip>
	);
};
