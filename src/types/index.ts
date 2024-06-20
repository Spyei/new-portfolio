import { ReactNode } from "react";

export interface StackPros {
    icon: ReactNode;
    name: string;
    link: string;
    hover: string;
    initial?: any;
    animate?: any;
    transition?: any;
}

export interface LinksProps {
    href: string;
    title: string;
    icon: ReactNode;
    filledIcon?: ReactNode;
    type: "infos" | "socials";
}

export interface ProjectProps {
    name: string;
    description: string;
    image: string;
    langs: string[];
}

export interface ProjectPageProps {
    id: string;
    title: string;
    github?: string;
    website?: string;
    devlopment: boolean;
    description: string;
    images: string[];
    tecnologies: string[];
}