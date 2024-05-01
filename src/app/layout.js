import { Inter } from "next/font/google";
import TransitionProvider from "./components/transitionProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Azad portfolio",
    description: "Azad portfolio app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
              <TransitionProvider>{children}</TransitionProvider>
            </body>
        </html>
    );
}
