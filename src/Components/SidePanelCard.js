import React from "react";
import { useNavigate } from "react-router";

const SidePanelCard = ({ name, current }) => {
	let navigate = useNavigate();
	const styles =
		current == name
			? "flex items-center px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 "
			: "flex items-center px-4 py-2  mt-2 text-gray-600 transition-colors duration-200 transform rounded-md  hover:bg-gray-200  hover:text-gray-700";
	return (
		// <nav>
		<a className={styles} onClick={() => navigate(`/catagories?cg=${name}`)}>
			<svg
				className='w-5 h-5'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>

			<span className='mx-4 font-medium'>{name}</span>
		</a>
		// </nav>
	);
};

export default SidePanelCard;
