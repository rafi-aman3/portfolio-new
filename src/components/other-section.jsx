"use client";
import { commands } from "@/config/commands";
import React from "react";
import { ReactTerminal, TerminalContextProvider } from "react-terminal";

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
		<TerminalContextProvider>
			<div className='w-full h-full rounded-xl md:row-span-5 md:col-span-6  lg:row-span-5 lg:col-span-5  '>
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
			</div>
		</TerminalContextProvider>
	);
};
