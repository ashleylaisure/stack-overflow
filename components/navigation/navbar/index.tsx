
import BrandLogo from "@/components/BrandLogo";
import React from "react";

import Theme from "./Theme";
import { createClient } from "@/lib/supabase/server";
import UserBtn from "@/components/navigation/navbar/UserMenu";
import MobileNavigation from "./MobileNavigation";
import UserMenu from "@/components/navigation/navbar/UserMenu";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Navbar = async () => {
    

    return (
        <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
            <div className="flex items-center gap-2">
                {/* LEFT */}
                <SidebarTrigger />
                {/* <MobileNavigation /> */}
            </div>
            

            <p>Global Search</p>

            {/* RIGHT */}
            <div className="flex-between gap-3">
                <Theme />
                <UserMenu />
            </div>
        </nav>
    );
};

export default Navbar;
