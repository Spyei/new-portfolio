"use client";

import {
	createContext,
	useContext,
	useState,
	useEffect,
	useRef,
	type ReactNode,
} from "react";
import ptMessages from "../../public/locales/pt.json";
import enMessages from "../../public/locales/en.json";

export type Locale = "pt" | "en";
type Messages = typeof ptMessages;

interface I18nContextProps {
	locale: Locale;
	t: Messages;
	setLocale: (locale: Locale) => void;
}

const messages: Record<Locale, Messages> = {
	pt: ptMessages,
	en: enMessages,
};

const I18nContext = createContext<I18nContextProps | null>(null);
const STORAGE_KEY = "locale";

export function I18nProvider({ children }: { children: ReactNode }) {
	const [locale, setLocaleState] = useState<Locale>("pt");
	const hydrated = useRef(false);

	useEffect(() => {
		if (hydrated.current) return;
		hydrated.current = true;

		const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;

		if (saved === "en") {
			setLocaleState("en");
		}
	}, []);

	function setLocale(newLocale: Locale) {
		setLocaleState(newLocale);

		localStorage.setItem(STORAGE_KEY, newLocale);

		document.documentElement.lang = newLocale === "pt" ? "pt-BR" : "en";
	}

	return (
		<I18nContext.Provider
			value={{ locale, t: messages[locale], setLocale }}
		>
			{children}
		</I18nContext.Provider>
	);
}

export function useI18n() {
	const ctx = useContext(I18nContext);

	if (!ctx) throw new Error("useI18n must be used inside I18nProvider");

	return ctx;
}
