import React from "react";

const SortSelector = () => {
	return (
		<div>
			<select className="p-3 border-[1px] rounded-md"
				name="orderby"
				id=""
				onSubmit={(event: React.ChangeEvent<HTMLSelectElement>) =>
					console.log(event.target.value)
				}
			>
				<option value="">Order by: Relevence</option>
				<option value="relevence">Relevence</option>
				<option value="date added">Date Added</option>
				<option value="name">Name</option>
				<option value="release date">Release Date</option>
				<option value="popularity">Popularity</option>
				<option value="Average rating">Average Rating</option>
			</select>
		</div>
	);
};

export default SortSelector;
