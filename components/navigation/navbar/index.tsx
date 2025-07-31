
import BrandLogo from "@/components/BrandLogo";
import React from "react";

import Theme from "./Theme";

const Navbar = () => {
    return (
        <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
        <BrandLogo />

        <p>Global Search</p>

        <div className="flex-between gap-5">
            <Theme />
        </div>
        </nav>
    );
};

export default Navbar;
