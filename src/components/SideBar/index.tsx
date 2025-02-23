"use client"
import { IoBriefcase, IoBriefcaseOutline, IoHome, IoHomeOutline, IoPerson, IoPersonOutline } from "react-icons/io5";
import { BsDiscord, BsGithub, BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";
import SideBarLink from "./Link";
import DarkMode from "../Mixed/DarkMode";
import { MdOutlineTimeline } from "react-icons/md";
import { SiAnilist } from "react-icons/si";
import { FaLastfmSquare } from "react-icons/fa";

export default function SideBar() {
    return (
        <>
            <div className="mr-64 tablet:mr-14"></div>
            <motion.section
                className="flex flex-col gap-1 w-52 m-3 tablet:w-auto h-screen mobile:m-1 fixed z-30 rounded-lg dark:bg-neutral-800 transition bg-neutral-100 p-6 tablet:p-[2px] shadow-xl"
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="font-bold tablet:hidden">Informações</h1>
                <div className="flex flex-col">
                    <SideBarLink
                        type="infos"
                        filledIcon={<IoHome fill="#7A53FD" />}
                        href="/"
                        icon={<IoHomeOutline />}
                        title="Início"
                        key={Math.random()}
                    />
                    <SideBarLink
                        type="infos"
                        filledIcon={<IoBriefcase fill="#5383FD" />}
                        href="/projetos"
                        icon={<IoBriefcaseOutline />}
                        title="Projetos"
                        key={Math.random()}
                    />
                    <SideBarLink type="infos" filledIcon={<MdOutlineTimeline fill="#7A53FD" />} href="/timeline" icon={<MdOutlineTimeline />} title="Timeline" key={Math.random()} />
                    <SideBarLink
                        type="infos"
                        filledIcon={<IoPerson fill="#53FDA5" />}
                        href="/contato"
                        icon={<IoPersonOutline />}
                        title="Contato"
                        key={Math.random()}
                    />
                </div>
                <hr className="hidden tablet:border-neutral-600 tablet:border-1 tablet:my-2 tablet:rounded-lg tablet:w-1/2 tablet:self-center tablet:block" />
                <h1 className="font-bold tablet:hidden">Links</h1>
                <div className="flex flex-col tablet:p-[2px] flex-grow">
                    <SideBarLink icon={<BsGithub className="group-hover/legal:fill-black transition" />} title="Github" type="socials" href="https://github.com/Spyei" key={Math.random()} />
                    <SideBarLink icon={<BsDiscord className="group-hover/legal:fill-[#404EED] transition" />} title="Discord" type="socials" href="https://discord.com/users/955095844275781693" key={Math.random()} />
                    <SideBarLink icon={<BsInstagram className="group-hover/legal:fill-[#E1306C] transition" />} title="Instagram" type="socials" href="https://www.instagram.com/caiodesu_" key={Math.random()} />
                    <SideBarLink icon={<SiAnilist className="group-hover/legal:fill-blue-500 transition" />} title="AniList" type="socials" href="https://anilist.co/user/spyei/" key={Math.random()} />
                    <SideBarLink icon={<FaLastfmSquare className="group-hover/legal:fill-red-500 transition" />} title="LastFm" type="socials" href="https://www.last.fm/user/spyeicaio" key={Math.random()} />                    
                </div>
                <div className="flex w-full justify-center">
                    <DarkMode />
                </div>
            </motion.section>
        </>
    );
}
