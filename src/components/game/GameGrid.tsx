import { useState, useEffect } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";
import useGame from "./useGame";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";

const GameGrid = () => {
	const { games, err, isLoading } = useGame();
	const skel = [1, 2, 3, 4, 5, 6];

	return (
		<>
			<div className="flex flex-wrap">

			{isLoading && skel.map((e) => <CardSkeleton key={e} />)}
			</div>
			<text>{err}</text>
			{/* <CardSkeleton/> */}
			<div className="flex justify-center">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{games.map((game) => (
						<GameCard key={game.id} game={game} />
					))}
				</div>
			</div>
		</>
	);
};

export default GameGrid;
