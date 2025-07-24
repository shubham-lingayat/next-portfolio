import { useState } from "react"
import { ViewAll } from "../projects/Projects"
import SectionWrapper from "../SectionWrapper"
import ExperienceCard from "./ExperienceCard"

const Experiences = () => {

    const [show, setShow] = useState("Experience")
    const [viewAll, setViewAll] = useState(false)

    const experiences = [
        {
      "company": "GladOwl Web Solutions Pvt. Ltd.",
      "desc": [
        "Assisted with design and development of project.",
        "Worked on building the product from scratch and built multiple dashboards.",
        "Skills: HTML · CSS · JavaScript · TailwindCSS · ReactJS · NodeJS · ExpressJS · MongoDB · REST APIs"
      ],
      "duration": "Jun 2024 - Present",
      "position": "Fullstack Web Developer"
    },
    {
      "company": "Self Employed",
      "desc": [
        "I am very passionate about improving my coding skills & developing applications & websites.",
        "Working for myself to improve my skills. Love to build Full-Stack clones.",
        "Skills: HTML · CSS · JavaScript · TailwindCSS · ReactJS · NodeJS · ExpressJS · MongoDB · REST APIs"
      ],
      "duration": "March 2024 - May 2024",
      "position": "Web Developer"
    },
    {
      "company": "Technical Coding and Research Innovation",
      "desc": [
        "Learned more about Frontend development and build one major and one minor project.",
        "Skills: HTML · CSS · JavaScript · BootStrap · PHP · MySQL"
      ],
      "duration": "Sept 2023 - Feb 2024",
      "position": "Frontend Web Developement Intern"
    },
    {
      "company": "THE RESOLVED TECH",
      "desc": [
        "As a fresher, I got idea how web development works and hence I have contributed to build Multiple websites.",
        "Skills: HTML · CSS · JavaScript · PHP · MySQL"
      ],
      "duration": "Nov 2022 - Jan 2023",
      "position": "Web Developement Intern"
    }
    
  ];
    const educations = [
        {
      "degree": "B.E. Artificial Intelligence and Data Science",
      "desc": [
        "Cumulative GPA: 8.44/10"
      ],
      "duration": "2020 - 2024",
      "institute": "Zeal College Of Engineering and Research"
    },
    {
      "degree": "HSC (Computer Science)",
      "duration": "2019 - 2020",
      "institute": "Shree Shivaji Vidyamandir Aundh Pune"
    }    
  ];

    return (
        <SectionWrapper id="experience" className="min-h-screen">
            <h2 className="text-4xl text-center">Experience</h2>

            <div className="w-fit mx-auto mt-6 p-2 bg-white dark:bg-grey-800 rounded-md flex gap-2 items-center">
                {['Experience', 'Education'].map((e, i) => (
                    <button key={i} onClick={() => setShow(e)} className={`py-2 px-4 rounded-md transition-colors ${show === e ? 'bg-violet-600 text-white' : 'hover:bg-gray-100 hover:dark:bg-grey-900 text-black dark:text-white'}`}>{e}</button>
                ))
                }
            </div>

            <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
                <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
                    <div className="left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 dark:border-grey-800 h-full border"></div>

                    {viewAll ?
                        (show === "Experience" ? experiences : educations).map((e, i) => (
                            // @ts-ignore
                            <ExperienceCard key={i} {...e} index={i} />
                        ))
                        :
                        (show === "Experience" ? experiences : educations).slice(0, 2).map((e, i) => (
                            // @ts-ignore
                            <ExperienceCard key={i} {...e} index={i} />
                        ))
                    }

                </div>
            </div>

            {(show === "Experience" ? experiences : educations).length > 2 &&
                <ViewAll scrollTo='experience' title={viewAll ? 'Okay, I got it' : 'View All'} handleClick={() => setViewAll(!viewAll)} />
            }

        </SectionWrapper>
    )
}

export default Experiences