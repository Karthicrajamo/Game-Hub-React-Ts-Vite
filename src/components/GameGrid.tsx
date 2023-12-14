import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
	id: number;
	name: string;
}

interface FetchingData {
	count: number;
	results: Game[];
}

const GameGrid = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [err, setErr] = useState('');

	useEffect(() => {
		const controller = new AbortController();
		apiClient
			.get<FetchingData>("/games", {signal: controller.signal})
			.then((res) => setGames(res.data.results))
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setErr(err.message)});

		return () => controller.abort(); 
	}, []);

	return (
		<>
			<text>{err}</text>
			<ul>
				{games.map((e) => (
					<li key={e.id}>{e.name}</li>
				))}
			</ul>
		</>
	);
};

export default GameGrid;
