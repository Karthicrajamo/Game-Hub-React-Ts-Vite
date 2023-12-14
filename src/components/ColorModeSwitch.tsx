
interface Props{
	toggleBtn: boolean;
	onClick: (bool: boolean) => void
}

const ColorModeSwitch = ({toggleBtn, onClick}: Props) => {
	return (
		<>
			<div className="flex justify-center">
				<button className="bg-black dark:bg-white text-white dark:text-black" onClick={() => onClick(!toggleBtn)}>
					{toggleBtn? 'DARK':'LIGHT'}
				</button>
			</div>
		</>
	);
};

export default ColorModeSwitch;
