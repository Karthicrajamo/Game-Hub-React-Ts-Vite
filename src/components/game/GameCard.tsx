import React from "react";
import { Game } from "./useGame";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<div className="bg-gray-500 m-3 rounded-md overflow-hidden">
			<img  src={game.background_image}></img>
            <div><h1 className="p-2">{game.name}</h1></div>
		</div>
	);
};

export default GameCard;
