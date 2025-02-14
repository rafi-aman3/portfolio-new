"use client";
import React from "react";
import { ReactTerminal, TerminalContextProvider } from "react-terminal";

export const OtherSection = () => {
	const commands = {
		help: () => (
			<>
				<div>Available commands:</div>
				<ul>
					<li>help - List available commands</li>
					<li>about - Information about me</li>
					<li>interact - Interactive demo</li>
					<li>contact - Get in touch</li>
					<li>whoami - Identifies the user</li>
					<li>weather - Display fake weather info</li>
					<li>asciiemoji - Print a random emoji</li>
					<li>shortcut - Keyboard shortcuts for the terminal</li>
					<li>quote - Display a motivational quote</li>
					<li>flip [text] - Flips text input upside down</li>
					<li>timer [seconds] - Set a simple timer</li>
					<li>countdown [date] - Countdown to a specific date</li>
					<li>reminder [message] - Set a small reminder message</li>
					<li>mood [mood] - Funny response based on mood input</li>
					<li>clear - Clear the terminal</li>
				</ul>
			</>
		),
		about: () =>
			"Hi! I am Md Amanullah Rafi, a Software engineer with 3 years of experience.",
		skills: () =>
			"JavaScript\nReact\nNext.js\nTailwind CSS\nVue.js\nPython\nNode.js\nExpress Js",
		joke: () =>
			"Why do programmers prefer dark mode? Because light attracts bugs!",
		contact: () => (
			<div>
				<p>Feel free to reach out:</p>
				<p>Email: rafi@example.com</p>
				<p>
					LinkedIn:
					<a
						href='https://linkedin.com/in/rafi-aman'
						target='_blank'
						rel='noopener noreferrer'
						style={{ color: "#00ff00", textDecoration: "underline" }}
					>
						linkedin.com/in/rafi-aman
					</a>
				</p>
			</div>
		),
		countdown: (date) => {
			const targetDate = new Date(date);
			if (isNaN(targetDate)) return "Usage: countdown [YYYY-MM-DD]";
			const diff = targetDate - new Date();
			if (diff <= 0) return "The date has already passed!";
			const days = Math.floor(diff / (1000 * 60 * 60 * 24));
			return `Countdown: ${days} day(s) left until ${date}.`;
		},
		clear: () => undefined,
	};

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
