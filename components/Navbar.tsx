"use client"


import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { signIn, signOut, useSession } from "next-auth/react"
import React from "react"

const Navbar = () => {
    const { data: session } = useSession();

    return (
        <nav className=" flexBetween max-container padding-container relative z-30 py-5">
            <Link href='/'>
                <Image
                    src='/flc_design20240509230417 (1).png'
                    alt="logo"
                    width={89}
                    height={35} />
            </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className="lg:flexCenter hidden">
                <>
                    {session ? (
                        <>
                            <h1 className="regular-16 text-gray-90  flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold mr-4">
                                {session.user?.name}
                            </h1>
                            <Button
                                type="button"
                                title="Sign out"
                                icon='/user.svg'
                                variant="btn_dark_green"
                                onClick={() => signOut()} // Pass the sign-in function here
                            />
                        </>
                    ) : <>
                        <Button
                            type="button"
                            title="Sign in with GitHub"
                            icon='/user.svg'
                            variant="btn_dark_green"
                            onClick={() => signIn("github")} // Pass the sign-in function here
                        />
                    </>}
                </>
                {/* <Button
                    type="button"
                    title="Login"
                    icon='/user.svg'
                    variant="btn_dark_green"
                /> */}
            </div>
            <Image
                src='/menu.svg'
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
            />
        </nav>
    )
}

export default Navbar