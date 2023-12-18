import { useEffect } from "react";
import { useState } from "react";
import apiClient from "../../../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

interface FetchingData {
	count: number;
	results: Game[];
}

const useGame = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [err, setErr] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);
		apiClient
			.get<FetchingData>("/games", { signal: controller.signal })
			.then((res) => {
				setGames(res.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setErr(err.message);
				setIsLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { games, err, isLoading };
};

export default useGame;