import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import GameGrid from "./components/game/GameGrid";
import GenresList from "./components/game/GenresList";
import { Genres } from "./components/game/Hooks/useGenres";
import PlateformSelector from "./components/game/PlateformSelector";



function App() {
	const [toggle, setToggle] = useState(false);
	const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null)

	return (
		<>
			<div data-mode={toggle && "dark"}>
				<main className="dark:bg-blue-950 min-h-screen box-border">
					<div className="grid md:grid-cols-4  grid-rows-[25% 75%]">
						<div className="md:col-span-4 dark:text-white ">
							<NavBar toggleBtn={toggle} onClick={(data) => setToggle(data)}></NavBar>
						</div>

						<div className=" hidden md:inline "><GenresList onSelect={(gen) => setSelectedGenre(gen)}/></div>
						<div className="bg-neutral-50 dark:bg-blue-950 col-span-3">
							<PlateformSelector/>
							<GameGrid genresTitle={selectedGenre}/>
						</div>
					</div>
				</main>
			</div>

		</>
	);
}

export default App;
