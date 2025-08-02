
import BrandLogo from "@/components/BrandLogo";
import React from "react";

import Theme from "./Theme";
import { createClient } from "@/lib/supabase/server";
import UserBtn from "@/components/navigation/navbar/UserBtn";
import MobileNavigation from "./MobileNavigation";

const Navbar = async () => {
    

    return (
        <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
            <div className="flex items-center gap-2">
                <BrandLogo />
                <MobileNavigation />
            </div>
            

            <p>Global Search</p>

            <div className="flex-between gap-5">
                <Theme />

                <UserBtn />

                
            </div>
        </nav>
    );
};

export default Navbar;
