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
        "Developed 6+ responsive web applications using React.js, Redux, and Node.js, integrating secure authentication and scalable RESTful APIs, reducing database query time by 40%.",
        "Developed and deployed 25+ optimized landing pages, boosting lead conversions by 60%, and implemented CI/CD pipelines with GitLab, cutting release time by 70%.",
        "Refactored front-end code and applied lazy loading and responsive design, improving page load times by 50% and increasing conversion rates by 40%.",
        "Integrated AWS S3 for managing over 15,000+ media files, enhancing performance and scalability in a React-based web application.",
        "Spearheaded the development of role-based admin APIs with complex authorization logic, significantly improving client satisfaction and admin usability.",
        "Mentored interns, leading training on SDLC, debugging, and product architecture, increasing team contribution and delivery speed by 20%."
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
        "Achieved a CGPA of 8.44/10, demonstrating consistent academic performance in AI, data science, and core engineering subjects.",
        "Developed a Machine Learning project titled “Detecting Cardiac and Respiratory Diseases from Lung and Auscultation Sounds”, applying signal processing and classification models to assist in early diagnosis.",
        "Built a strong foundation in Data Structures and Algorithms (DSA), enhancing problem-solving and coding efficiency.",
        "Gained hands-on experience in Python programming, implementing ML models, data analysis, and backend logic.",
        "Learned the fundamentals of Machine Learning, including supervised/unsupervised learning, model evaluation, and real-world applications.",
        "Acquired working knowledge in Web Development, exploring front-end and back-end technologies to build functional web applications."
      ],
      "duration": "2020 - 2024",
      "institute": "Zeal College Of Engineering and Research"
    },
    {
      "degree": "HSC (Computer Science)",
      "desc" : [
        "Studied Computer Science (200 marks), building a strong foundation in programming and computer fundamentals.",
        "Gained hands-on experience with C, C++, and Assembly Language, understanding core programming logic and syntax.",
        "Wrote and executed basic programs in Assembly, enhancing low-level programming and hardware interaction skills.",
        "Practiced coding in C and C++, learning key concepts such as loops, functions, arrays, and pointers.",
        "Designed and developed a university website using only HTML, showcasing an early interest in web development and UI structure."
      ],
      "duration": "2019 - 2020",
      "institute": "Shree Shivaji Vidyamandir Aundh Pune"
    }    
  ];

    return (
        <SectionWrapper id="experience" className="min-h-screen pt-12 lg:pt-16 ">
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