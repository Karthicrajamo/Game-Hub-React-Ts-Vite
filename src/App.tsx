import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/navbar";

function App() {
	return (
		<>
			<div className="grid md:grid-cols-2 grid-rows-2 grid-row-2">
				<div className="md:col-span-2">
					<NavBar></NavBar>
				</div>
				<div className="bg-red-400 hidden md:inline">aside</div>
				<div className="bg-orange-400 xs:max-md:col-span-2">main</div>
			</div>
		</>
	);
}

export default App;
