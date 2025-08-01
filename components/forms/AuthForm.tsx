import Image from "next/image";
import React from "react";

import { Button } from "../ui/button";
import BrandLogo from "../BrandLogo";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Link from "next/link";

const AuthForm = ({title, subtitle, OAuthText, formType} : {title: string, subtitle: string, OAuthText: string, formType: "signIn" | "signUp"}) => {

    return (
        <div>
            <div className="flex items-center justify-between gap-2 mb-10">
                <div className="flex-center flex-col gap-4 w-full">
                    <BrandLogo />
                    <div className="flex-center flex-col gap-2 text-center">
                        <h1 className="h2-bold text-dark100_light900">{title}</h1>
                        <p className="paragraph-regular text-dark500_light400">{subtitle}</p>
                    </div>
                </div>
            </div>

            {formType === "signIn" ? <SignInForm /> : <SignUpForm />}

            <div className="flex items-center justify-center gap-4 mb-4">
                <hr className="flex-grow border-t-1.5 border-dark-500 dark:border-light-400" />
                <span className="text-xs text-dark500_light400 font-medium">OR</span>
                <hr className="flex-grow border-t-1.5 border-dark-500 dark:border-light-400" />
            </div>

            <Button className="primary-button w-full">
                <Image
                    src="/icons/google.svg"
                    alt="Google Logo"
                    width={20}
                    height={20}
                    className="mr-2.5 object-contain"
                />
                <span>{OAuthText}</span>
            </Button>

            {formType === "signIn" ? (
                <p className="text-center text-sm text-dark500_light400 mt-4">
                    Don&apos;t have an account?{" "}
                    <Link href="/sign-up" className="text-blue-500 hover:underline">
                        Sign Up
                    </Link>
                </p>
            ) : (
                <p className="text-center text-sm text-dark500_light400 mt-4">
                    Already have an account?{" "}
                    <Link href="/sign-in" className="text-blue-500 hover:underline">
                        Sign In
                    </Link>
                </p>
            )}
                
                <p className="text-center text-sm text-dark500_light400 mt-4">
                    Forgot Your Password?{" "}
                    <Link href="/forgot-password" className="text-blue-500 hover:underline">
                        Reset Password
                    </Link>
                </p>
            
        </div>
    );
};

export default AuthForm;