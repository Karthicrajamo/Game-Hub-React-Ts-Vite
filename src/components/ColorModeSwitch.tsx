interface Props {
	toggleBtn: boolean;
	onClick: (bool: boolean) => void;
}

const ColorModeSwitch = ({ toggleBtn, onClick }: Props) => {
	return (
		<>
			<div className="flex justify-center">
				{/* <button
					className="bg-black dark:bg-white text-white dark:text-black"
					onClick={() => onClick(!toggleBtn)}
				>
					{toggleBtn ? "DARK" : "LIGHT"}
				</button> */}
				<label className="relative inline-flex items-center cursor-pointer">
					<input
						type="checkbox"
						value=""
						className="sr-only peer"
						onClick={() => onClick(!toggleBtn)}
					/>
					<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
					<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
						{toggleBtn ? "DARK" : "LIGHT"}
					</span>
				</label>
			</div>
		</>
	);
};

export default ColorModeSwitch;
