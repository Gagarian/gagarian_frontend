import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RelatedProduct = (
	id,
	name,
	slug,
	available,
	price,
	description,
	image1,
	image2,
	image3,
	category,
) => {
	let navigate = useNavigate();
	const { t, i18n } = useTranslation();
	console.log(name);
	return (
		<div className='flex flex-col items-center justify-center max-w-sm mx-auto'>
			<div
				className='w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md'
				style={{
					background:
						"url( https://gagarianrest.herokuapp.com" + `${image1}` + ")",
				}}
			/>

			{/* <div className='w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800'>
				<h3 className='py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white'>
					{name}
				</h3>

				<div className='flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700'>
					<span className='font-bold text-gray-800 dark:text-gray-200'>
						{price} birr
					</span>
					<button className='px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none'>
						{t("Translate.9")}
					</button>
				</div>
			</div> */}
		</div>
	);
};

export default RelatedProduct;
