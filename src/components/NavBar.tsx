import React from "react";
import logo from "../assets/logo.webp";

const NavBar = () => {
	return (
		<>
			<img className="w-[60px] inline-block" src={logo} alt="It is a react logo" />
            <header className="inline-block">Navbar</header>
		</>
	);
};

export default NavBar;
