
import BrandLogo from "@/components/btn/BrandLogo";
import React from "react";

import Theme from "./Theme";
import { createClient } from "@/lib/supabase/server";
import UserBtn from "@/components/btn/UserBtn";

const Navbar = async () => {
    

    return (
        <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
        <BrandLogo />

        <p>Global Search</p>

        <div className="flex-between gap-5">
            <Theme />

            <UserBtn />
        </div>
        </nav>
    );
};

export default Navbar;
