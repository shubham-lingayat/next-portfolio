import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import SectionWrapper from "../SectionWrapper";
import ProjectCard from "./ProjectCard";

const Projects = () => {

    const [projects, setProjects] = useState();

    const categories = ['MERN Stack', 'Frontend', 'Backend'];

     const projectsData = [
    {
      "category": "Backend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/project.jpg",
      "links": {
        "code": "https://github.com/shubham-lingayat/auth-aoth.git",
        "video": "",
        "visit": ""
      },
      "name": "Authentication & Authorization",
      "techstack": "Express.js, MongoDB, Node.js"
    },
    {
      "category": "Backend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/project.jpg",
      "links": {
        "code": "https://github.com/shubham-lingayat/mongodb-database-connection-mongoose.git",
        "video": "",
        "visit": ""
      },
      "name": "MongoDB Database Connection",
      "techstack": "Express.js, MongoDB, Node.js"
    },
    {
      "category": "Backend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/project.jpg",
      "links": {
        "code": "https://github.com/shubham-lingayat/blog-app-express.git",
        "video": "",
        "visit": ""
      },
      "name": "Blog App using Express",
      "techstack": "Express.js, MongoDB, Node.js"
    },
    {
      "category": "Backend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/project.jpg",
      "links": {
        "code": "https://github.com/shubham-lingayat/file-upload.git",
        "video": "",
        "visit": ""
      },
      "name": "File Upload",
      "techstack": "Express.js, MongoDB, Node.js"
    },
    
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/shopping-cart.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/Redux--Shopping-Cart.git",
        "video": "",
        "visit": "https://shopping-cart-redux-shubham-lingayat.netlify.app/"
      },
      "name": "Shopping Cart - Redux",
      "techstack": "React.js, Redux, Tailwind CSS"
    },
    
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/dashboard.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/dashboard-react.git",
        "video": "",
        "visit": "https://dashboard-shubham-lingayat.netlify.app/"
      },
      "name": "Dashboard",
      "techstack": "React.js, Tailwind, HTML, CSS"
    },
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/whether-detection.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/weatherAppProject.git",
        "video": "",
        "visit": "https://weather-app-shubham-lingayat.netlify.app/"
      },
      "name": "Whether App",
      "techstack": "HTML, Tailwind CSS, JavaScript"
    },
    {
      "category": "Frontend",
      "image": "/projects_screenshots/Healthcare.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/healthcare-dashboard.git",
        "video": "",
        "visit": "https://healthcare-dashboard-shubham-lingayat.vercel.app/"
      },
      "name": "Healthcare Dashboard",
      "techstack": "React.js, HTML, Tailwind CSS, JavaScript"
    },
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/razorpay.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/razorpay-clone.git",
        "video": "",
        "visit": "https://razorpay-clone-shubham-lingayat.netlify.app/"
      },
      "name": "Razorpay clone",
      "techstack": "HTML, Tailwind CSS"
    },
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/top-courses.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/top-courses.git",
        "video": "",
        "visit": "https://top-courses-shubham-lingayat.netlify.app/"
      },
      "name": "Top Courses",
      "techstack": "React.js, Context API, Tailwind, HTML, CSS"
    },
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/random-gif.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/random-gif.git",
        "video": "",
        "visit": "https://random-gif-shubham-lingayat.netlify.app/"
      },
      "name": "Random Gif",
      "techstack": "React.js, Tailwind CSS, Context-API"
    },
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/blogs.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/Context-API---Blogs.git",
        "video": "",
        "visit": "https://context-blogs-shubham-lingayat.netlify.app/"
      },
      "name": "Context Blogs",
      "techstack": "React.js, Context API, Tailwind, HTML, CSS"
    },
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/counter-app.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/Counter-app.git",
        "video": "",
        "visit": "https://counter-app-shubham-lingayat.netlify.app/"
      },
      "name": "Counter App",
      "techstack": "HTML, Tailwind CSS, JavaScript"
    },
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/project.jpg",
      "links": {
        "code": "https://github.com/shubham-lingayat/form-react.git",
        "video": "",
        "visit": "https://react-form-shubham-lingayat.netlify.app/"
      },
      "name": "Form to Console",
      "techstack": "React.js, Tailwind, HTML, CSS"
    },
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/university-website.png",
      "links": {
        "code": "",
        "video": "",
        "visit": "https://university-shubham-lingayat.netlify.app/"
      },
      "name": "University Website",
      "techstack": "HTML, CSS"
    },
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/tic-tac-toe.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/tic-tac-toe.git",
        "video": "",
        "visit": "https://tic-tac-toe-shubham-lingayat.netlify.app/"
      },
      "name": "Tic-Tac-Toe Game",
      "techstack": "HTML, CSS, JavaScript"
    },
     {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/resume-builder.png",
      "links": {
        "code": "",
        "video": "",
        "visit": "https://resume-builder-shubham-lingayat.netlify.app/"
      },
      "name": "Resume Builder",
      "techstack": "HTML, CSS, JavaScript"
    },
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/my-gallery.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/HTML-CSS-Project-II.git",
        "video": "",
        "visit": "https://html-css-project-2-shubham-lingayat.netlify.app/"
      },
      "name": "My Gallery",
      "techstack": "HTML, CSS"
    },
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/parallax-effect.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/HTML-CSS-Project-I.git",
        "video": "",
        "visit": "https://html-css-project-1-shubham-lingayat.netlify.app/"
      },
      "name": "Parallax Scrolling Effect",
      "techstack": "HTML, CSS"
    },
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/makarand-portfolio.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/makarand-portfolio.git",
        "video": "",
        "visit": "https://makarandvaydande.netlify.app/"
      },
      "name": "Friend's Portfolio",
      "techstack": "HTML, Tailwind CSS, CSS"
    },
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/my-portfolio.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/portfolio.git",
        "video": "",
        "visit": "https://shubhamlingayat.netlify.app/"
      },
      "name": "Portfolio Website",
      "techstack": "HTML, Tailwind CSS, JavaScript"
    },
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/plan-with-love.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/plan-with-love.git",
        "video": "",
        "visit": "https://plan-with-love-shubham-lingayat.netlify.app/"
      },
      "name": "Plan with Love",
      "techstack": "HTML, Tailwind CSS, JavaScript"
    },
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/cucet.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/CUCET-2.git",
        "video": "",
        "visit": "https://shubh-cucet.netlify.app/"
      },
      "name": "CUCET clone",
      "techstack": "HTML, Tailwind CSS, PHP"
    },
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/card.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/HTML-CSS-Project-III.git",
        "video": "",
        "visit": "https://html-css-project-3-shubham-lingayat.netlify.app/"
      },
      "name": "Card",
      "techstack": "HTML, Tailwind CSS, JavaScript"
    },
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/modern-chair.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/modern-chair.git",
        "video": "",
        "visit": "https://modern-chair-shubham-lingayat.netlify.app/"
      },
      "name": "Modern Chair",
      "techstack": "HTML, Tailwind CSS, JavaScript"
    },
    {
      "category": "Frontend",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/discord.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/discord-clone.git",
        "video": "",
        "visit": "https://discord-clone-shubham-lingayat.netlify.app/"
      },
      "name": "Discord Clone",
      "techstack": "HTML, Tailwind CSS"
    },
    {
      "category": "MERN Stack",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/studyNotion.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/studynotion-fullstack-mern.git",
        "video": "",
        "visit": "https://studynotion-mern-shubham-lingayat.vercel.app/"
      },
      "name": "StudyNotion EdTech",
      "techstack": "React.js, Redux, Node.js, Express.js, MongoDB, Tailwid CSS, Razorpay"
    },
    {
      "category": "MERN Stack",
      "image": "/projects_screenshots/instagram.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/instagram-mern.git",
        "video": "",
        "visit": "https://instagram-mern-shubham-lingayat.onrender.com"
      },
      "name": "Instagram WebApp",
      "techstack": "React.js, Redux, Node.js, Express.js, MongoDB, Tailwind CSS, MUI, AWS S3, SendGrid, Socket.io"
    },
    {
      "category": "MERN Stack",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/flipkart-mern.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/flipkart-mern.git",
        "video": "",
        "visit": "https://flipkart-mern-shubham-lingayat.onrender.com/"
      },
      "name": "Flipkart WebApp",
      "techstack": "React, Redux, Node.js, Express.js, MongoDB, Tailwind CSS, MUI, Paytm, Cloudinary, SendGrid"
    },
    {
      "category": "MERN Stack",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/dy-patil.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/dy-patil-public-health-mern.git",
        "video": "",
        "visit": "https://dy-patil-public-health-shubhamlingayat.vercel.app/"
      },
      "name": "Landing Page",
      "techstack": "React.js, Express.js, Node.js, Bootstrap, MongoDB"
    },
    {
      "category": "MERN Stack",
      "image": "https://next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com/website-screenshots/mern-first-app.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/mern-first-app.git",
        "video": "",
        "visit": "https://mern-first-app-shubhamlingayat.vercel.app/"
      },
      "name": "MERN First App",
      "techstack": "React.js, Express.js, Node.js, MongoDB, Tailwind"
    },
    {
      "category": "MERN Stack",
      "image": "/projects_screenshots/ballr.png",
      "links": {
        "code": "https://github.com/shubham-lingayat/ballr-table-booking-mern.git",
        "video": "",
        "visit": "https://ballr-table-booking.vercel.app/"
      },
      "name": "Ballr Table Booking App",
      "techstack": "React.js, Express.js, Node.js, MongoDB, Tailwind"
    }
    
  ];

    // const [category, setCategory] = useState(categories[0] || "All")
    const [category, setCategory] = useState(categories[0])

    const [filteredProjects, setFilteredProjects] = useState(projectsData )
    const [viewAll, setViewAll] = useState(false)

    const filterProjects = (cat: string) => {
        setViewAll(false)
        setCategory(cat)
        // cat === "All" ? setFilteredProjects(projects) :
        setFilteredProjects(projectsData.filter((p) => p.category.toLowerCase() === cat.toLowerCase()));
    }

    useEffect(() => {
        filterProjects(categories.includes('MERN Stack') ? "MERN Stack" : categories[0])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <SectionWrapper id="projects" className="mx-4 md:mx-0 min-h-screen pt-12 lg:pt-16 ">
            <h2 className="text-4xl text-center">Projects</h2>

            <div className="overflow-x-auto scroll-hide md:w-full max-w-screen-sm mx-auto mt-6 flex justify-between items-center gap-2 md:gap-3 bg-white dark:bg-grey-800 p-2 rounded-md">
                {categories.map((c: string = "", i: number) => (
                    <span key={i} onClick={() => filterProjects(c)} className={`p-1.5 md:p-2 w-full text-sm md:text-base text-center capitalize rounded-md ${category.toLowerCase() === c.toLowerCase() ? "bg-violet-600 text-white" : "hover:bg-gray-100 hover:dark:bg-grey-900"} cursor-pointer transition-all`}>
                        {c}
                    </span>
                ))}
            </div>

            <div className="md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
                {filteredProjects.slice(0, viewAll ? filteredProjects.length : 6).map((p, i: number) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>


            {filteredProjects.length > 6
                &&
                <ViewAll scrollTo='projects' title={viewAll ? 'Okay, I got it' : 'View All'} handleClick={() => setViewAll(!viewAll)} />
            }
        </SectionWrapper>
    )
}

export default Projects

type MouseEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

export const ViewAll = ({ handleClick, title, scrollTo }: { handleClick: MouseEventHandler, title: string, scrollTo: string }) => {
    return (
        <>
            <div className="bg-white dark:bg-grey-900 w-4/5 mx-auto blur-xl z-20 -translate-y-14 h-16"></div>
            <div className="text-center -translate-y-24">
                {title === 'View All' ?
                    <button onClick={handleClick} className={`bg-violet-600 text-white px-4 ${title === 'View All' ? 'animate-bounce' : 'animate-none'} py-1.5 rounded-md hover:shadow-xl transition-all`}>
                        {title}
                    </button>
                    :
                    <Link
                        to={scrollTo}
                        className={`bg-violet-600 text-white px-4 ${title === 'View All' ? 'animate-bounce' : 'animate-none'} cursor-pointer py-1.5 rounded-md hover:shadow-xl transition-all`}
                        offset={-60}
                        smooth={true}
                        duration={500}
                        // @ts-ignore
                        onClick={() => handleClick()}
                    >{title}</Link>
                }
            </div>
        </>
    )
}