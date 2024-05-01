"use client";

import Brain from "../components/brain";
import PageTransition from "../components/pageTransition";
import { motion, useInView, useScroll } from "framer-motion";

import Skill from "../components/skill";
import Experience from "../components/experience";
import { useRef } from "react";
import Biography from "../components/biography";
const AboutPage = () => {
    const containerRef = useRef();

    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef();
    // const isSkillRefInView = useInView(skillRef, {once:true});
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, {
        margin: "-100px",
    });

    return (
        <PageTransition>
            {/* CONTAINER */}
            <div className="h-full pl-3 sm:pl-8 md:pl-12 lg:pl-20 xl:pl-48 overflow-auto lg:flex" ref={containerRef}>
                {/* TEXT CONTAINER */}
                <div className="flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
                    {/* BIOGRAPHY CONTAINER */}
                    <Biography />
                    {/* SKILLS CONTAINER */}
                    <Skill
                        skillRef={skillRef}
                        isSkillRefInView={isSkillRefInView}
                    />
                    {/* EXPERIENCE CONTAINER */}
                    <Experience
                        experienceRef={experienceRef}
                        isExperienceRefInView={isExperienceRefInView}
                    />
                </div>
                {/* SVG CONTAINER */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </PageTransition>
    );
};

export default AboutPage;
