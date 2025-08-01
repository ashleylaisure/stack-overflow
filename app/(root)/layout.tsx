import NavBar from "@/components/navigation/navbar";
import { ReactNode } from "react";


export default function HomeLayout({ children }: { children: ReactNode }) {
    return (
            <div>
                <NavBar />
                {/* The main content of the dashboard will be rendered here */}
                {children}
            </div>

    );
}