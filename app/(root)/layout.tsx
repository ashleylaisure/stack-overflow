import { cookies } from "next/headers"
import AppSidebar from "@/components/navigation/AppSidebar";
import NavBar from "@/components/navigation/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";


export default async function HomeLayout({ children }: { children: ReactNode }) {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

    return (
        <>
        <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <main className="w-full">
                <NavBar />
                <div className="px-4">
                    {children}
                </div>
            </main>
        </SidebarProvider>
        </>
    );
}