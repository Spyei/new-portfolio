"use client";

import {
	createContext,
	useContext,
	useState,
	useEffect,
	useRef,
	type ReactNode,
} from "react";

type Theme = "dark" | "light";
interface ThemeContextProps {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);
const THEME_KEY = "theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>("dark");
	const hydrated = useRef(false);

	useEffect(() => {
		if (hydrated.current) return;

		hydrated.current = true;

		const saved = localStorage.getItem(THEME_KEY) as Theme | null;

		if (saved === "light") applyTheme("light");
	}, []);

	function applyTheme(t: Theme) {
		setTheme(t);

		localStorage.setItem(THEME_KEY, t);

		document.documentElement.classList.toggle("light", t === "light");
		document.documentElement.classList.toggle("dark", t === "dark");
	}

	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme: () =>
					applyTheme(theme === "dark" ? "light" : "dark"),
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const ctx = useContext(ThemeContext);

	if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");

	return ctx;
}
