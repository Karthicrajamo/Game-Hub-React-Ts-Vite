import React, { useState } from "react";
import { Platform } from "./useGame";
import {
	FaPlaystation,
	FaApple,
	FaXbox,
	FaAndroid,
	FaLinux,
	FaWindows,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
	platform: Platform[];
}

const PlateformIconList = ({ platform }: Props) => {
	const Icons: { [key: string]: IconType } = {
		pc: FaWindows,
		mac: FaApple,
		nintendo: SiNintendo,
		xbox: FaXbox,
		playstation: FaPlaystation,
		linux: FaLinux,
		ios: MdPhoneIphone,
		android: FaAndroid,
		web: BsGlobe,
	};

	return (
		<div>
			{platform.map((e, index) => {
				const IconComponent = Icons[e.slug];
				return (
					<IconComponent className="inline-block mr-2 fill-white" key={index} />
				);
			})}
		</div>
	);
};

export default PlateformIconList;
