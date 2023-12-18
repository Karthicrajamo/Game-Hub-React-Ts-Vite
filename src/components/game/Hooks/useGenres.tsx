import { useEffect } from "react";
import { useState } from "react";
import apiClient from "../../../services/api-client";
import { CanceledError } from "axios";

export interface Genres {
	id: number;
	name: string;
}


interface FetchingData {
	count: number;
	results: Genres[];
}

const useGame = () => {
	const [genres, setGenres] = useState<Genres[]>([]);
	const [err, setErr] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);
		apiClient
			.get<FetchingData>("/genres", { signal: controller.signal })
			.then((res) => {
				setGenres(res.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setErr(err.message);
				setIsLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { genres, err, isLoading };
};

export default useGame;
