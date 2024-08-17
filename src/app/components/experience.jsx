
import { motion } from "framer-motion";
const Experience = ({experienceRef, isExperienceRefInView}) => {
    return (
        <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    JavaScript Engineer At Arraytics
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  Collaborated effectively within the frontend development team, building and maintaining React.js interfaces for Timetics plugin, Timetics.AI SaaS product, and Eventin plugin.

Focused on crafting intuitive UIs and implementing advanced functionalities in React.js, ensuring exceptional user experience across all products.

Worked closely with QA to conduct rigorous testing and debugging, guaranteeing frontend component reliability and stability.

Actively participated in continuous improvement initiatives within the frontend development process, fostering a collaborative and innovative team environment.

Plugins I have worked on:  Timetics, Eventin,

SaaS Product I have worked on: Timetics.ai.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    April, 2023 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    JavaScript Intern At XpeedStudio
                  </div>
                    {/* JOB DESC */}
                    <div className="p-3 text-sm italic">
                    During my JavaScript internship at XpeedStudio, I was involved in developing a Mobil application using React. I collaborated with the team to implement new features, optimizing performance and user experience. I learned to effectively use React components, state management, and routing to create dynamic and interactive interfaces. This internship significantly enhanced my problem-solving and debugging abilities, preparing me for a successful career in web development.
                  </div>
                    {/* JOB DATE */}
                    <div className="p-3 text-red-400 text-sm font-semibold">
                    January, 2023 - March, 2023
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
             
            </motion.div>
          </div>
    )
}

export default Experience