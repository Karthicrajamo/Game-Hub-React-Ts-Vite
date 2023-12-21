import React, { useState } from "react";
import usePlateform from "./Hooks/usePlateform";
import { Platform } from "./Hooks/useGame";

interface Props {
	onSelectedPlatform: (platform: Platform) => void;
}

const PlateformSelector = ({ onSelectedPlatform }: Props) => {
	const { data, err } = usePlateform();

	if (err) return null;

	return (
		<div>
			<select
				name="Devices"
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
					const selectedPlatform = data.find(
						(platform) => platform.slug === e.target.value
					);
					if (selectedPlatform) onSelectedPlatform(selectedPlatform);
				}}
			>
				<option value="">All Platforms</option>
				{data.map((opt, index) => (
					<option
						value={opt.slug}
						onMouseDown={() => console.log(opt)}
						key={index}
					>
						{opt.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default PlateformSelector;
