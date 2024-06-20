"use client"
import { StackPros } from "@/types";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const colors = {
    javascript: "hover:shadow-[#F6DF1B]",
    typescript: "hover:shadow-[#3178C6]",
    reactjs: "hover:shadow-[#5FD9FA]",
    nextjs: "hover:shadow-[#000]",
    tailwindcss: "hover:shadow-[#08C4DD]",
    nodejs: "hover:shadow-[#57A746]"
};

const stacks = [
    {
        name: "JavaScript",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
        icon: <RiJavascriptFill size={26} fill="#F6DF1B" />
    },
    {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
        icon: <BiLogoTypescript size={26} fill="#3178C6" />
    },
    {
        name: "ReactJs",
        link: "https://pt-br.legacy.reactjs.org/",
        icon: <FaReact size={26} fill="#5FD9FA" />
    },
    {
        name: "NextJs",
        link: "https://nextjs.org/",
        icon: <RiNextjsFill size={26} fill="#000" />
    },
    {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
        icon: <RiTailwindCssFill fill="#08C4DD" size={26} />
    },
    {
        name: "NodeJs",
        link: "https://nodejs.org/",
        icon: <FaNodeJs size={26} fill="#57A746" />
    }
]

export default function Stacks() {
    return (
        <div className="flex flex-col gap-1">
            <h1 className="font-bold text-2xl mobile:text-xl mt-6">Tecnologias</h1>
            <span>Tecnologias que uso em meus projetos, e que tenho conhecimento.</span>
            <div className="flex flex-wrap mt-2 gap-4">
                {stacks.map((stack, index) => (
                    <Stack initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.2 }} hover={stack.name.toLowerCase().replace("tailwind css", "tailwindcss")} key={index} {...stack} /> 
                ))}
            </div>
        </div>
    )
}

function Stack({ icon, name, link, hover, initial, animate, transition }: StackPros) {

    return (
        <motion.a initial={initial} animate={animate} transition={transition} href={link} target="_blank" className={`mobile:text-sm mobile:p-2 border-neutral-700 border-2 rounded-lg flex items-center p-3 gap-2 ${colors[hover as keyof typeof colors]} shadow-md transition-shadow duration-300`}>
            {icon}
            <span>{name}</span>
        </motion.a>
    )
}