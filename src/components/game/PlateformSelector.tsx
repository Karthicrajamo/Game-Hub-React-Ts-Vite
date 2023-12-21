import React, { useState } from "react";
import usePlateform from "./Hooks/usePlateform";

const PlateformSelector = () => {
    const {data, err} = usePlateform()

    if (err) return null;

	return (
		<div>
			<select name="Devices" >
                <option value="">All Platforms</option>
                {data.map((opt, index) => 
					<option value={opt.slug} key={index}>
						{opt.name}
					</option>
                        )}
			</select>
		</div>
	);
};

export default PlateformSelector;
