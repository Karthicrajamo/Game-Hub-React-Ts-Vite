import React from "react";
import { Game } from "./Hooks/useGame";
import PlateformIconList from "./PlateformIconList";
import CriticScore from "./CriticScore";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<div className="bg-gray-500 m-3 rounded-md overflow-hidden h-[300px] w-[400px] md:w-auto">
			<img className="w-[400px] h-[200px]" src={game.background_image}></img>
			<div className="p-3 flex justify-between">
				<PlateformIconList
					platform={game.parent_platforms.map(({ platform: p }) => p)}
				/>
				<CriticScore score={game.metacritic} />
			</div>
		</div>
	);
};

export default GameCard;
