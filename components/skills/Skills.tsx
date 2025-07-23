import { useState } from 'react';
import SkillCard from "./SkillCard"
import SectionWrapper from '../SectionWrapper';


const Skills = () => {

    const categories = ['Frontend', 'Backend', 'Others'];
    const skillData = [
    {
      "category": "Frontend",
      "image": "/tech_stack/js.webp",
      "name": "JavaScript"
    },
    {
      "category": "Frontend",
      "image": "/tech_stack/react.png",
      "name": "React.js"
    },
    {
      "category": "Frontend",
      "image": "/tech_stack/redux.webp",
      "name": "Redux"
    },
    {
      "category": "Frontend",
      "image": "/tech_stack/mui.webp",
      "name": "Material UI"
    },
    {
      "category": "Frontend",
      "image": "/tech_stack/chakra_ui.webp",
      "name": "Chakra UI"
    },
    {
      "category": "Frontend",
      "image": "/tech_stack/html.webp",
      "name": "HTML5"
    },
    {
      "category": "Frontend",
      "image": "/tech_stack/css.webp",
      "name": "CSS3"
    },
    {
      "category": "Frontend",
      "image": "/tech_stack/bootstrap.png",
      "name": "Bootstrap"
    },
    {
      "category": "Frontend",
      "image": "/tech_stack/Tailwind_CSS.png",
      "name": "Tailwind"
    },
    {
      "category": "Backend",
      "image": "/tech_stack/node_js.webp",
      "name": "Node.js"
    },
    {
      "category": "Backend",
      "image": "/tech_stack/express_js.png",
      "name": "Express.js"
    },
    {
      "category": "Backend",
      "image": "/tech_stack/mongoose.webp",
      "name": "Mongoose"
    },
    {
      "category": "Backend",
      "image": "/tech_stack/mongoDB.webp",
      "name": "MongoDB"
    },
    {
      "category": "Backend",
      "image": "/tech_stack/firebase.webp",
      "name": "Firebase"
    },
    {
      "category": "Backend",
      "image": "/tech_stack/aws.webp",
      "name": "AWS"
    },
    {
      "category": "Backend",
      "image": "/tech_stack/mySQL.webp",
      "name": "MySQL"
    },
    {
      "category": "Backend",
      "image": "/tech_stack/php.webp",
      "name": "PHP"
    },
    {
      "category": "Others",
      "image": "/tech_stack/python.webp",
      "name": "Python"
    },
    {
      "category": "Others",
      "image": "/tech_stack/c.webp",
      "name": "C"
    },
    {
      "category": "Others",
      "image": "/tech_stack/cpp.png",
      "name": "C++"
    },
    {
      "category": "Others",
      "image": "/tech_stack/js.webp",
      "name": "JavaScript"
    },
    {
      "category": "Others",
      "image": "/tech_stack/typescript.webp",
      "name": "TypeScript"
    },
    {
      "category": "Others",
      "image": "/tech_stack/php.webp",
      "name": "PHP"
    },
    {
      "category": "Others",
      "image": "/tech_stack/postman.webp",
      "name": "Postman"
    },
    {
      "category": "Others",
      "image": "/tech_stack/compass.webp",
      "name": "MongoDB Compass"
    },
    {
      "category": "Others",
      "image": "/tech_stack/vs code.webp",
      "name": "VS Code"
    },
    {
      "category": "Others",
      "image": "/tech_stack/git.webp",
      "name": "Git"
    },
    {
      "category": "Others",
      "image": "/tech_stack/gitLab.webp",
      "name": "GitLab"
    },
    {
      "category": "Others",
      "image": "/tech_stack/github.webp",
      "name": "GitHub"
    }
  ];
    const [category, setCategory] = useState(categories[0])

    return (
        <SectionWrapper id='skills' className="min-h-screen mt-12 md:mt-0 mx-4 md:mx-0 xl:my-20 2xl:my-0">
            <h2 className="text-4xl text-center">Tech Stack</h2>

            <div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/3 mx-auto mt-6 bg-white dark:bg-grey-800 p-2 flex justify-between items-center gap-3 rounded-md">
                {categories.map((c: string, i: number) => (
                    <span key={i} onClick={() => setCategory(c)} className={`p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-md ${category.toLowerCase() === c.toLowerCase() ? "bg-violet-600 dark:bg-violet-600 text-white" : "bg-white dark:bg-grey-800 hover:bg-gray-100 hover:dark:bg-grey-900"} transition-all capitalize`}>{c}</span>
                ))}
            </div>

            <div className="lg:w-3/4 2xl:w-3/5 my-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8">
                {skillData.filter((s) => s.category.toLowerCase() === category.toLowerCase()).map((s: any, i: number) => (
                    <SkillCard key={i} {...s} />
                ))}
            </div>

        </SectionWrapper>
    )
}

export default Skills