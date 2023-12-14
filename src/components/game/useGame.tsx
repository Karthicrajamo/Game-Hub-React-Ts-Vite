import { useEffect } from "react";
import { useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";

export interface Game {
	id: number;
	name: string;
    background_image: string;
}

interface FetchingData {
	count: number;
	results: Game[];
}

const useGame = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [err, setErr] = useState("");
    
    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<FetchingData>("/games", { signal: controller.signal })
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setErr(err.message);
            });
    
        return () => controller.abort();
    }, []);
    
    return { games, err };
}

export default useGame;