"use client";

import { useState, useEffect } from "react";
import { getHasVisited, setHasVisited } from "@/utils/visited";

export function useFirstVisit() {
	const [isFirstVisit] = useState(() => !getHasVisited());

	useEffect(() => {
		setHasVisited();
	}, []);

	return isFirstVisit;
}
