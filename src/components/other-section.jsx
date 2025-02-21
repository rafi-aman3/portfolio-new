"use client";
import { commands } from "@/config/commands";
import React from "react";
import dynamic from "next/dynamic";

const ReactTerminal = dynamic(
	() => import("react-terminal").then((mod) => mod.ReactTerminal),
	{
		ssr: false,
	}
);

const TerminalContextProvider = dynamic(
	() => import("react-terminal").then((mod) => mod.TerminalContextProvider),
	{
		ssr: false,
	}
);

export const OtherSection = () => {
	const WelcomeMessage = () => {
		return (
			<>
				<p>Welcome to Rafi's Terminal!</p>
				<p>Type 'help' to see the list of commands.</p>
			</>
		);
	};

	return (
		<div className='w-full h-full rounded-xl md:row-span-5 md:col-span-6  lg:row-span-5 lg:col-span-5  '>
			<TerminalContextProvider>
				<ReactTerminal
					welcomeMessage={<WelcomeMessage />}
					prompt='rafi@portfolio:~$'
					theme={{
						theme: "dark",
						promptColor: "#00ff00",
						background: "#1e1e1e",
						color: "#ffffff",
					}}
					commands={commands}
					showControlBar={false}
				/>
			</TerminalContextProvider>
		</div>
	);
};
