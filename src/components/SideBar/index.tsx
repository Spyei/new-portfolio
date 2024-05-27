"use client"
import { IoMdInformationCircle, IoMdInformationCircleOutline } from "react-icons/io";
import { IoBriefcase, IoBriefcaseOutline, IoHome, IoHomeOutline, IoPerson, IoPersonOutline } from "react-icons/io5";
import { MdOutlineTimeline } from "react-icons/md";
import { BsDiscord, BsGithub, BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";
import SideBarLink from "./Link";

export default function SideBar() {
    return (
        <motion.section
            className="flex flex-col gap-1 w-52 tablet:w-auto h-screen bg-neutral-100 p-6 tablet:p-[2px]"
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="font-bold tablet:hidden">Informações</h1>
            <div className="flex flex-col">
                <SideBarLink type="infos" filledIcon={<IoHome fill="#29BDFF" />} href="/" icon={<IoHomeOutline />} title="Início" key={Math.random()} />
                <SideBarLink type="infos" filledIcon={<IoMdInformationCircle fill="#29BDFF" />} href="/sobre" icon={<IoMdInformationCircleOutline />} title="Sobre" key={Math.random()} />
                <SideBarLink type="infos" filledIcon={<IoBriefcase fill="#29BDFF" />} href="/projetos" icon={<IoBriefcaseOutline />} title="Projetos" key={Math.random()} />
                <SideBarLink type="infos" filledIcon={<MdOutlineTimeline fill="#29BDFF" />} href="/timeline" icon={<MdOutlineTimeline />} title="Timeline" key={Math.random()} />
                <SideBarLink type="infos" filledIcon={<IoPerson fill="#29BDFF" />} href="/contato" icon={<IoPersonOutline />} title="Contato" key={Math.random()} />
            </div>
            <hr className="hidden tablet:border-neutral-600 tablet:border-1 tablet:my-2 tablet:rounded-lg tablet:w-1/2 tablet:self-center tablet:block" />
            <h1 className="font-bold tablet:hidden">Links</h1>
            <div className="flex flex-col tablet:p-[2px]">
                <SideBarLink icon={<BsGithub className="group-hover:fill-black transition" />} title="Github" type="socials" href="https://github.com/Spyei" key={Math.random()} />
                <SideBarLink icon={<BsDiscord className="group-hover:fill-[#404EED] transition" />} title="Discord" type="socials" href="discord.com/users/955095844275781693" key={Math.random()} />
                <SideBarLink icon={<BsInstagram className="group-hover:fill-[#E1306C] transition" />} title="Instagram" type="socials" href="https://www.instagram.com/caiuwu_" key={Math.random()} />
            </div>
        </motion.section>
    );
}
