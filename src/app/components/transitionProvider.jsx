"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
    const pathName = usePathname();
    return (
        <AnimatePresence mode="wait">
            <div
                key={pathName}
                className="w-full h-full bg-gradient-to-b from-blue-300 to-green-100"
            >
                {/* Route change animation  */}
                <motion.div
                    className="h-screen w-screen fixed bg-indigo-600 rounded-b-[100px] z-40"
                    animate={{ height: "0vh" }}
                    exit={{ height: "140vh" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <motion.div
                    className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white capitalize text-8xl cursor-default z-50 w-fit h-fit"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {pathName.substring(1)}
                </motion.div>
                <motion.div
                    className="h-screen w-screen fixed bg-indigo-600 rounded-t-[100px] bottom-0 z-30"
                    initial={{ height: "140vh" }}
                    animate={{ height: "0vh", transition: { delay: 0.5 } }}
                />
                <div className="">
                    <div className="h-24 px-3 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                        <Navbar />
                    </div>
                    <div className="h-[calc(100vh-6rem)]">{children}</div>
                </div>
            </div>
        </AnimatePresence>
    );
};

export default TransitionProvider;
