export const commands = {
	help: () => (
		<>
			<div>Available commands:</div>
			<ul>
				<li>help</li>
				<li>about</li>
				<li>skills</li>
				<li>contact</li>
				<li>countdown [date]</li>
				<li>clear</li>
				<li>matrix</li>
				<li>funfact</li>
				<li>hack</li>
			</ul>
		</>
	),
	about: () =>
		"Hi! I am Md Amanullah Rafi, a Software engineer with 3+ years of experience.",
	skills: () =>
		"JavaScript\nReact\nNext.js\nTailwind CSS\nVue.js\nPython\nNode.js\nExpress Js",
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
	matrix: () => {
		const characters = "01";
		let output = "";
		for (let i = 0; i < 10; i++) {
			let line = "";
			for (let j = 0; j < 30; j++) {
				line += characters.charAt(
					Math.floor(Math.random() * characters.length)
				);
			}
			output += line + "\n";
		}
		return (
			<div style={{ color: "#00ff00", fontFamily: "monospace" }}>
				{output}Wake up, Neo...
			</div>
		);
	},
	funfact: () => {
		const facts = [
			"The first computer bug was an actual bug - a moth found trapped in a Harvard Mark II computer in 1947.",
			"QWERTY keyboards were designed to slow typing and prevent typewriters from jamming.",
			"The average programmer writes 10-12 lines of production-ready code per day.",
			"The first 1GB hard disk drive was announced in 1980, weighed 550 pounds, and cost $40,000.",
			"JavaScript was created in 10 days by Brendan Eich in 1995.",
		];
		return (
			<div>
				💡 <strong>Tech Fun Fact:</strong>{" "}
				{facts[Math.floor(Math.random() * facts.length)]}
			</div>
		);
	},
	hack: (target) => {
		if (!target) return "Usage: hack [target]";
		return (
			<div>
				<div>🔒 INITIATING HACK SEQUENCE ON {target.toUpperCase()}...</div>
				<div style={{ color: "#ff0000" }}>ACCESS DENIED</div>
				<div style={{ color: "#aaaaaa", fontSize: "0.8em" }}>
					Just kidding! This is a demo command. No actual hacking capabilities
					here.
				</div>
				<div style={{ marginTop: "5px" }}>
					Fun fact: Ethical hacking (penetration testing) is a legitimate career
					where companies hire professionals to find security vulnerabilities.
				</div>
			</div>
		);
	},
	clear: () => undefined,
};
