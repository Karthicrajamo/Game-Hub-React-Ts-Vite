import { useState, useEffect } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";
import useGame from "./useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
	const { games, err } = useGame();

	return (
		<>
			<text>{err}</text>
			<div className="grid grid-cols-3">
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</div>
		</>
	);
};

export default GameGrid;
