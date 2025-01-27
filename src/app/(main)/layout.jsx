import "@/styles/globals.css";
import { Lora } from "next/font/google";

const lora = Lora({
	subsets: ["latin"],
	weight: ["400", "700"],
	style: ["normal", "italic"],
	variable: "--font-lora",
});

export default function RootLayout({ children }) {
	return (
		<html className={`${lora.variable}`}>
			<body>
				<main className='h-screen w-full bg-slate-300 p-4'>{children}</main>
			</body>
		</html>
	);
}
