"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const pathName = usePathname();
    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255,255,255)",
        },
    };
    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        },
    };

    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)",
        },
    };

    const listVariants = {
        closed: {
            x: "100vw",
        },
        opened: {
            x: "0vw",
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
    };

    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        },
    };

    return (
        <div className="h-full flex items-center justify-between text-xl">
            {/* LINKS */}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map((link) => (
                    <NavLink link={link} key={link.title} />
                ))}
            </div>
            {/* LOGO */}
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                <Link
                    href="/"
                    className="text-sm bg-indigo-600 rounded-md p-1 font-semibold flex items-center justify-center"
                >
                    <span className="text-white mr-1">Azad</span>
                    <span className="w-12 h-8 rounded bg-white text-indigo-600 flex items-center justify-center">
                        .dev
                    </span>
                </Link>
            </div>
            {/* SOCIAL */}
            <div className="hidden md:flex md:justify-end gap-4 w-1/3">
                <Link href="https://github.com/im-azad">
                    <Image src="/github.png" alt="" width={24} height={24} />
                </Link>
                <Link href="https://www.facebook.com/azaddesu">
                    <Image src="/facebook.png" alt="" width={24} height={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/imazad/">
                    <Image src="/linkedin.png" alt="" width={24} height={24} />
                </Link>
            </div>
            {/* RESPONSIVE MENU */}
            <div className="overflow-hidden md:hidden">
                {/* MENU BUTTON */}
                <button
                    className="w-10 h-8 flex flex-col justify-between z-50 relative"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <motion.div
                        variants={topVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"
                    ></motion.div>
                    <motion.div
                        variants={centerVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded"
                    ></motion.div>
                    <motion.div
                        variants={bottomVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"
                    ></motion.div>
                </button>
                {/* MENU LIST */}
                {open && (
                    <motion.div
                        variants={listVariants}
                        initial="closed"
                        animate="opened"
                        transition={{ when: "beforeChildren", duration: 0.5 }}
                        className="absolute overflow-hidden top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
                    >
                        {links.map((link) => (
                            <motion.div
                                variants={listItemVariants}
                                className={`p-2 transition inline-block hover:bg-indigo-600 ${
                                    pathName === link.url &&
                                    "bg-indigo-600 text-white"
                                }`}
                                key={link.title}
                            >
                                <Link href={link.url}>{link.title}</Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
