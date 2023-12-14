import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import ColorModeSwitch from "./components/ColorModeSwitch";
import GameGrid from "./components/GameGrid";

function App() {
	const [toggle, setToggle] = useState(false);

	return (
		<>
			{/* <div data-mode={toggle && "dark"}> */}
			<div data-mode={!toggle ? "dark" : ""}>
				<main className="dark:bg-neutral-700 min-h-screen box-border">
					<div className="grid md:grid-cols-2 grid-rows-2 grid-row-2">
						<div className="md:col-span-2 dark:text-white">
							<NavBar></NavBar>
						</div>
						<div className="bg-red-400 hidden md:inline ">aside</div>
						<div className="bg-orange-400 xs:max-md:col-span-2">
						<GameGrid />

						</div>
					</div>
					<ColorModeSwitch
						toggleBtn={toggle}
						onClick={(data) => setToggle(data)}
					/>
				</main>
			</div>
		</>
	);
}

export default App;
