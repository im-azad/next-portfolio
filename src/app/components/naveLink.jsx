"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NaveLink = ({ link }) => {
    const pathName = usePathname();

    return (
        <Link
            className={`rounded-md p-2 transition hover:bg-indigo-600 transit- hover:text-white ${
                pathName === link.url && "bg-indigo-600 text-white"
            }`}
            href={link.url}
        >
            {link.title}
        </Link>
    );
};

export default NaveLink;
