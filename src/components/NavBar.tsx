import React, { useState } from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {
	toggleBtn: boolean;
	onClick: (bool: boolean) => void;
}

const NavBar = ({ toggleBtn, onClick }: Props) => {
	const handleToggle = (data: boolean) => {
		onClick(data);
	};

	return (
		<>
			<div className="flex justify-between items-center">
				<div>
					<img
						className="w-[60px] inline-block"
						src={logo}
						alt="It is a react logo"
					/>
					<header className="inline-block">Navbar</header>
				</div>
				<div>
					<ColorModeSwitch toggleBtn={toggleBtn} onClick={handleToggle} />
				</div>
			</div>
		</>
	);
};

export default NavBar;
