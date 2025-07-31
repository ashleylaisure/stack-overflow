import React from 'react'
import Image from "next/image";
import Link from "next/link";

const BrandLogo = () => {
    return (
        <div>
            <Link href="/" className="flex items-center gap-1">
                <Image
                    src="/images/site-logo.svg"
                    width={23}
                    height={23}
                    alt="DevFlow Logo"
                />

                <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
                    Dev<span className="text-primary-500">Flow</span>
                </p>
            </Link>
        </div>
    )
}

export default BrandLogo
