"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NaveLink from "./naveLink";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="h-full flex items-center justify-between text-xl">
            {/* links */}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map((link) => (
                    <NaveLink key={link.url} link={link} />
                ))}
            </div>
            {/*logo here */}
            <div className="md:hidden lg:flex w-1/3 justify-center">
                <Link href="/">
                    <span className="text-3xl text-indigo-600 font-bold">
                        Logo
                    </span>
                </Link>
            </div>
            {/* Social Links */}
            <div className="hidden md:flex gap-4 w-1/3 justify-end">
                <Link href="#">
                    <Image
                        src="/github.png"
                        alt="logo"
                        width={24}
                        height={24}
                    />
                </Link>
                <Link href="#">
                    <Image
                        src="/linkedin.png"
                        alt="logo"
                        width={24}
                        height={24}
                    />
                </Link>
                <Link href="#">
                    <Image
                        src="/facebook.png"
                        alt="logo"
                        width={24}
                        height={24}
                    />
                </Link>
                <Link href="#">
                    <Image
                        src="/instagram.png"
                        alt="logo"
                        width={24}
                        height={24}
                    />
                </Link>
            </div>
            {/*Responsive menu here */}
            <div className="md:hidden">
                {/* Menu button */}
                <button
                    className="w-10 h-8 flex flex-col justify-between z-50 relative"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="w-10 h-1 bg-white rounded"></div>
                    <div className="w-10 h-1 bg-white rounded"></div>
                    <div className="w-10 h-1 bg-white rounded"></div>
                </button>
                {/* Menu items */}
                {isOpen && (
                    <div className="absolute z-40 top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl font-semibold">
                        {links.map((link) => (
                            <Link
                                key={link.url}
                                href={link.url}
                                className="p-2 hover:text-indigo-600"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
