import React from "react";
import { useNavigate } from "react-router-dom";
import { AddShoppingCart } from "@material-ui/icons";
// src={item.image}
// <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
//             {item.category.name}
//           </h2>

//            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//             {item.name}
//           </h1>

const DashboardCard = ({ name, image1, id, price }) => {
	let navigate = useNavigate();
	return (
		<div
			onClick={() => navigate(`/item/${id}`)}
			className='flex flex-col items-center justify-center max-w-sm mx-auto'>
			<div
				className='w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md'
				style={{
					background: "url( " + `${image1}` + ")",
				}}></div>

			<div className='w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800'>
				<h3 className='py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white'>
					{name}
				</h3>

				<div className='flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700'>
					<span className='font-bold text-gray-800 dark:text-gray-200'>
						{price} birr
					</span>
					<button className='px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none'>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default DashboardCard;
