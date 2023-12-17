import React from "react";
import { Game } from "./useGame";
import PlateformIconList from "./PlateformIconList";
import CriticScore from "./CriticScore";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<div className="bg-gray-500 m-3 rounded-md overflow-hidden">
			<img src={game.background_image}></img>
			<div className="p-3 flex justify-between">
				<PlateformIconList platform={game.parent_platforms.map(({ platform:p }) => p)}/>
				<CriticScore score={game.metacritic}/>
			</div>
		</div>
	);
};

export default GameCard;
