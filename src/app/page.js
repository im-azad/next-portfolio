import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="h-full flex flex-col gap-6 lg:flex-row lg:justify-center lg:items-center">
            {/* Image container */}
            <div className="h-1/2 lg:h-full lg:w-1/2 z-0 relative">
                <Image
                    src="/aka.png"
                    alt="azad"
                    fill
                    sizes="(100vw, 100vh)"
                    className="object-contain"
                />
            </div>
            {/* Text container */}
            <div className="h-1/2 hg:h-full lg:w-1/2 flex flex-col gap-8  ">
                {/* Title */}
                <h1 className="text-4xl mt-6 md:text-6xl font-bold">Crafting Digital Experiences, Designing Tomorrow.</h1>
                {/* Description */}
                <p className="md:text-lg">
                    Welcome to my digital canvas, where innovation and
                    creativity converge. With a keen eye for aesthetics and a
                    mastery of code, my portfolio showcases a diverse collection
                    of projects that reflect my commitment to excellence.
                </p>
                {/* Buttons */}
                <div className=" flex gap-4 justify-start">
                    <button  className="p-4 md:px-4 md:py-4 rounded-lg ring-2 ring-indigo-600   bg-indigo-600 text-white">View My Work</button>
                    <button className="px-6 py-4  rounded-lg ring-2 ring-indigo-600 transition hover:text-white hover:bg-indigo-600"><Link href="/contact">Contact Me </Link></button>
                </div>
            </div>
        </div>
    );
}
