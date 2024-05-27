import { ReactNode } from "react";

export interface StackPros {
    icon: ReactNode;
    name: string;
    link: string;
    hover: string;
}

export interface LinksProps {
    href: string;
    title: string;
    icon: ReactNode;
    filledIcon?: ReactNode;
    type: "infos" | "socials";
}