import { useEffect } from "react";
import { useState } from "react";
import apiClient from "../../../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genres } from "./useGenres";
import { GameQuery } from "../../../App";

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

const useGame = (gameQuery:GameQuery) => useData<Game>("/games", {params:{genres:gameQuery.genre?.id, platforms: gameQuery.platform?.id}}, [gameQuery]);
// const useGame = (genresTitle:Genres | null, platformType: Platform | null) => useData<Game>("/games", {params:{genres:genresTitle?.id, platforms: platformType?.id}}, [genresTitle?.id, platformType?.id]);

export default useGame;
