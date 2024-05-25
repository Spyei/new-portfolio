"use client"
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

interface Props {
    href: string;
    title: string;
    icon: ReactNode;
    filledIcon?: ReactNode;
    type: "infos" | "socials";
}

export default function SideBarLink({ icon, title, href, filledIcon, type }: Props) {
    const [path, setPath] = useState("");

    useEffect(() => {
        setPath(window.location.pathname);
    }, []);

    return type === "infos" ? (
        <Link className={`${path === href ? "shadow-lg text-black" : "hover:text-black"} tablet:justify-center tablet:text-base h-10 flex gap-2 p-4 rounded-lg transition duration-600 items-center text-sm`} href={href}>
            {path === href ? filledIcon : icon}
            <span className="tablet:hidden">{title}</span>
        </Link>
    ) : (
        <a target="_blank" href={href} className="tablet:justify-center tablet:text-base h-10 flex gap-2 p-4 rounded-lg transition items-center text-sm hover:text-black group">
            {icon}
            <span className="tablet:hidden">{title}</span>
        </a>
    )
}