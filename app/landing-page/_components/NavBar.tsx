import BrandLogo from "@/components/btn/BrandLogo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function NavBar() {
    return (
        
        <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">

            <BrandLogo />
            <Link className="text-lg" href="/">
                dashboard
            </Link>

            <Link className="text-lg" href="#">
                Features
            </Link>

            <Link className="text-lg" href="/#pricing">
                Pricing
            </Link>

            <Link className="text-lg" href="#">
                About
            </Link>
            
            <div className="text-lg">
                <Link href="/sign-in" className="mr-4">
                    Sign In
                </Link>
                <Link href="/sign-up" className="">
                    <Button>Sign Up</Button>
                </Link>
            </div>
        </nav>

    )
}