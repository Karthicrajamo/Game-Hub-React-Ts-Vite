import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
	const [toggle, setToggle] = useState(false);
	const toggleMode = () => setToggle(!toggle);
	return (
		<>
			{/* <div data-mode={toggle && "dark"}> */}
			<div data-mode={toggle ? "dark" : ""}>
				<main className="dark:bg-neutral-700 min-h-screen box-border">
					<div className="grid md:grid-cols-2 grid-rows-2 grid-row-2">
						<div className="md:col-span-2 dark:text-white">
							<NavBar></NavBar>
						</div>
						<div className="bg-red-400 hidden md:inline ">aside</div>
						<div className="bg-orange-400 xs:max-md:col-span-2">main</div>
					</div>
					<button
						className="absolute p-2 px-4 dark:bg-neutral-200 dark:text-black dark:border-black dark:border-[1px] rounded-lg bg-neutral-700 text-white mt-2 left-1/2"
						onClick={toggleMode}
					>
						{!toggle ? 'DARK' : 'LIGHT'}
					</button>
				</main>
			</div>
		</>
	);
}

export default App;
