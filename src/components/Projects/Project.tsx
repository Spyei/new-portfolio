import { ProjectProps } from "@/types";
import { WobbleCard } from "../ui/wooble-card";
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import Link from "next/link";

export const languages = {
    js: <RiJavascriptFill size={26} fill="#F6DF1B" />,
    ts: <BiLogoTypescript size={26} fill="#3178C6" />,
    react: <FaReact size={26} fill="#5FD9FA" />,
    next: <RiNextjsFill size={26} fill="#000" />,
    tailwind: <RiTailwindCssFill fill="#08C4DD" size={26} />,
    node: <FaNodeJs size={26} fill="#57A746" />,
}

export default function Project({ name, description, image, langs }: ProjectProps) {
    return (
        <Link href={`/projetos/${name.toLowerCase()}`}>
            <WobbleCard>
                <div className="flex gap-3 mobile:gap-0 text-start mobile:flex-col">
                    <div className="w-[30%] min-h-full flex mobile:w-full">
                        <img className="w-full h-full mobile:h-20 object-cover flex" src={image} alt="" />
                    </div>
                    <div className="p-3 flex flex-col gap-1 w-full">
                        <h1 className="font-bold text-xl">{name}</h1>
                        <span className="text-sm">{description}</span>
                        <div className="flex w-full justify-end">
                            {langs.map((lang) => languages[lang as keyof typeof languages])}
                        </div>
                    </div>
                </div>
            </WobbleCard>
        </Link>
    )
}