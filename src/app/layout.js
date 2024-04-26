import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Azad portfolio",
    description: "Azad portfolio app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="w-screen h-screen bg-gradient-to-b from-blue-300 to-green-100">
                    <div className="px-3 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                        <div className="h-24">
                            <Navbar />
                        </div>
                        <div className="h-[calc(100vh-6rem)]">{children}</div>
                    </div>
                </div>
            </body>
        </html>
    );
}
