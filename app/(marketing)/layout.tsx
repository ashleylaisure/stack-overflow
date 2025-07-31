import { ReactNode } from "react";
import { NavBar } from "./_components/NavBar";

export default function LandingPageLayout({ children }: { children: ReactNode }) {
	return (
			<div>
                <NavBar />
                {children}
			</div>

	);
}