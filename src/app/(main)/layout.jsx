import "@/styles/globals.css";
import { Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
				<main className='h-screen w-full bg-background p-4'>
					<div className='h-full w-full md:overflow-hidden overflow-auto no-scrollbar'>
						<div className='h-full w-full'>
							<div className='h-min lg:h-[calc(100vh-32px)] md:h-full w-full overflow-auto md:space-y-4'>
								<div className='w-full h-full md:grid space-y-2 md:space-y-0  md:grid-rows-10 md:grid-cols-12 lg:grid-cols-12 gap-4'>
									{children}
									<Analytics />
									<SpeedInsights />
								</div>
							</div>
						</div>
					</div>
				</main>
			</body>
		</html>
	);
}
