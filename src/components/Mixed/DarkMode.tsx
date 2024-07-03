import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DarkMode() {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState(theme === "dark");

    const handleThemeChange = () => {
        setIsDark(!isDark);

        return theme === "dark" ? setTheme("light") : setTheme("dark");
    };

    return (
        <button
            onClick={handleThemeChange}
            className="bg-neutral-100 dark:bg-neutral-900 shadow-sm shadow-neutral-900 rounded-full w-full p-3 tablet:p-2 tablet:w-auto relative tablet:mb-1"
        >
            <div className="tablet:hidden">
                <motion.span
                    animate={{ x: isDark ? 16 : -14 }}
                    className={`absolute top-[14px] bottom-0 left-0 right-0`}
                >
                    {!isDark ? "Modo escuro" : "Modo claro"}
                </motion.span>
                <motion.div animate={{ x: isDark ? 0 : 110 }}>
                    {isDark ? <MdLightMode className="size-7" /> : <MdDarkMode className="size-7" />}
                </motion.div>
            </div>
            <div className="tabletmin:hidden">
                <motion.div animate={{ rotate: isDark ? 260 : 0 }}>
                    {isDark ? <MdLightMode className="size-7" /> : <MdDarkMode className="size-7" />}
                </motion.div>
            </div>
        </button>
    )
}