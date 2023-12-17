import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import GameGrid from "./components/game/GameGrid";

function App() {
	const [toggle, setToggle] = useState(false);

	return (
		<>
			{/* <div data-mode={toggle && "dark"}> */}
			<div data-mode={!toggle ? "dark" : ""}>
				<main className="dark:bg-neutral-700 min-h-screen box-border">
					<div className="grid md:grid-cols-4  grid-rows-[25% 75%]">
						<div className="md:col-span-4 dark:text-white ">
							<NavBar toggleBtn={toggle} onClick={(data) => setToggle(data)}></NavBar>
						</div>

						<div className=" hidden md:inline ">aside</div>
						<div className="bg-neutral-400 dark:bg-slate-800 col-span-3">
							<GameGrid />
						</div>
					</div>
				</main>
			</div>

		</>
	);
}

export default App;
