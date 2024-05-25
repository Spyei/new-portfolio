"use client"
import { IoMdInformationCircle, IoMdInformationCircleOutline } from "react-icons/io";
import SideBarLink from "./Link";
import { IoBriefcase, IoBriefcaseOutline, IoHome, IoHomeOutline, IoPerson, IoPersonOutline } from "react-icons/io5";
import { MdOutlineTimeline } from "react-icons/md";
import { BsDiscord, BsGithub, BsInstagram } from "react-icons/bs";
import { useState } from "react";
import { RxDoubleArrowRight } from "react-icons/rx";

export default function SideBar() {
    const [disabled, setDisabled] = useState(true);

    return (
            <section className={`${!disabled ? "-translate-x-52 tablet:-translate-x-14" : null} relative transition-all duration-500 flex flex-col gap-1 w-52 tablet:w-auto h-screen bg-neutral-100 p-6 tablet:p-[2px]`}>
                <button onClick={() => setDisabled(!disabled)} className="absolute left-56 tablet:left-16 top-2"><RxDoubleArrowRight className={`${!disabled ? "rotate-0" : "rotate-180"} transition duration-300 text-xl`} /></button>
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
                <div className="p-4 flex flex-col tablet:p-[2px]">
                    <SideBarLink icon={<BsGithub className="group-hover:fill-black transition" />} title="Github" type="socials" href="https://github.com/Spyei" key={Math.random()} />
                    <SideBarLink icon={<BsDiscord className="group-hover:fill-[#404EED] transition" />} title="Discord" type="socials" href="https://github.com/Spyei" key={Math.random()} />
                    <SideBarLink icon={<BsInstagram className="group-hover:fill-[#E1306C] transition" />} title="Instagram" type="socials" href="https://github.com/Spyei" key={Math.random()} />
                </div>
            </section>

    );
}