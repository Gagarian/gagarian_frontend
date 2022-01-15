import React from "react";
import { useNavigate } from "react-router-dom";
import Catagories from "../Pages/Catagories/Catagories";

const CatagoriesCard = ({ name, id, image1, price }) => {
	let navigate = useNavigate();
	return (
		<div
			className='py-10 px-5 w-full  '
			onClick={() => navigate(`/item/${id}`)}>
			<a className='block relative h-48 rounded overflow-hidden'>
				<img
					alt='ecommerce'
					className='object-cover  w-full h-full  '
					className='object-cover object-center w-full h-full block'
					src={image1}
					// src='https://dummyimage.com/420x260'
				/>
			</a>
			<div className='mt-4 '>
				<h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
					{Catagories.name}
				</h3>
				<h2 className='text-gray-900 title-font   text-lg font-medium'>
					{name}
				</h2>
				<p className='mt-1'>{price} birr</p>
			</div>
		</div>
	);
};

export default CatagoriesCard;
