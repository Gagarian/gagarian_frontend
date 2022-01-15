import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import {
	retrievecatagories,
	catagoiesSelector,
} from "../Services/Slices/catagoriesSlice";
import { useNavigate } from "react-router-dom";
const DashboardSampleProductBar = () => {
	let navigate = useNavigate();
	const dispatch = useDispatch();
	const { catagoires } = useSelector(catagoiesSelector);

	useEffect(() => {
		// if (_.isNil(catagoires)) {
		// 	dispatch(retrievecatagories());
		// }
	}, []);

	return (
		<div>
			{/* <a
				className='text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'
				href='#'>
				Popular products
			</a>
			<ul className='grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-lg p-1'>
				{_.isNil(catagoires)
					? "  "
					: catagoires.map(({ name }) => (
							<li onClick={() => navigate(`/catagories?cg=${name}`)}>
								<a className='flex justify-center py-4'>{name}</a>
							</li>
					  ))}
			</ul> */}
		</div>
	);
};
export default DashboardSampleProductBar;
