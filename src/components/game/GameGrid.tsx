import useGame from "./Hooks/useGame";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import { Genres } from "./Hooks/useGenres";
import { Platform } from "./Hooks/useGame";

interface Props {
	genresTitle: Genres | null;
}

const GameGrid = ({ genresTitle,}: Props) => {
	const { data, err, isLoading } = useGame(genresTitle);
	const skel = [1, 2, 3, 4, 5, 6];

	return (
		<>
			<div className="flex flex-wrap justify-center">
				{isLoading && skel.map((e) => <CardSkeleton key={e} />)}
			</div>
			<h1>{err}</h1>

			
			{/* <CardSkeleton/> */}
			<div className="flex justify-center">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{data.map((game) => (
						<GameCard key={game.id} game={game} />
					))}
				</div>
			</div>
		</>
	);
};

export default GameGrid;
