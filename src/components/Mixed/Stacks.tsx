"use client"
import { StackPros } from "@/types";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const colors = {
    javascript: "hover:shadow-[#F6DF1B]",
    typescript: "hover:shadow-[#3178C6]",
    reactjs: "hover:shadow-[#5FD9FA]",
    nextjs: "hover:shadow-[#000]",
    tailwindcss: "hover:shadow-[#08C4DD]",
    nodejs: "hover:shadow-[#57A746]"
};

export default function Stacks() {
    return (
        <div className="flex flex-col gap-1">
            <h1 className="font-bold text-2xl mobile:text-xl mt-6">Tecnologias</h1>
            <span>Tecnologias que uso em meus projetos, e que tenho conhecimento.</span>
            <div className="flex flex-wrap mt-2 gap-4">
                <Stack hover="javascript" link="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" icon={<RiJavascriptFill size={26} fill="#F6DF1B" />} name="JavaScript" key={Math.random()} />
                <Stack hover="typescript" link="https://www.typescriptlang.org/" icon={<BiLogoTypescript size={26} fill="#3178C6" />} name="TypeScript" key={Math.random()} />
                <Stack hover="reactjs" link="https://pt-br.legacy.reactjs.org/" icon={<FaReact size={26} fill="#5FD9FA" />} name="ReactJs" key={Math.random()} />
                <Stack hover="nextjs" link="https://nextjs.org/" icon={<RiNextjsFill size={26} fill="#000" />} name="NextJs" key={Math.random()} />
                <Stack hover="tailwindcss" link="https://tailwindcss.com/" icon={<RiTailwindCssFill fill="#08C4DD" size={26} />} name="Tailwind CSS" key={Math.random()} />
                <Stack hover="nodejs" link="https://nodejs.org/" icon={<FaNodeJs size={26} fill="#57A746" />} name="NodeJs" key={Math.random()} />
            </div>
        </div>
    )
}

function Stack({ icon, name, link, hover }: StackPros) {
    return (
        <a
            href={link} target="_blank" className={`mobile:text-sm mobile:p-2 border-neutral-700 border-2 rounded-lg flex items-center p-3 gap-2 ${colors[hover as keyof typeof colors]} shadow-md transition duration-300`}>
            {icon}
            <span>{name}</span>
        </a>
    )
}