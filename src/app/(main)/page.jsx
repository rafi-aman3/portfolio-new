import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { OtherSection } from "@/components/other-section";
import { ProfileImage } from "@/components/profile-image";
import { ProjectSection } from "@/components/project-container";
import { Summary } from "@/components/summary";

export default function Page() {
	return (
		<>
			<Header />
			<Summary />
			<ProfileImage />
			<ProjectSection />
			<OtherSection />
			<Experience />
			<Footer />
		</>
	);
}
