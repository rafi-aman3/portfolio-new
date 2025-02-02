import { Header } from "@/components/header";
import { ProfileImage } from "@/components/profile-image";
import { Summary } from "@/components/summary";

export default function Page() {
	return (
		<>
			<Header />
			<Summary />
			<ProfileImage />
		</>
	);
}
