"use client";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
