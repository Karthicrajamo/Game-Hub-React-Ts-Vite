import { useEffect } from "react";
import { useState } from "react";
import apiClient from "../../../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genres } from "./useGenres";

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

const useGame = (genresTitle:Genres | null) => useData<Game>("/games", {params:{genres:genresTitle?.id}}, [genresTitle?.id]);

export default useGame;
