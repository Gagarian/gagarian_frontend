import React, { useEffect, useState } from "react";
import Main from "../../Layouts/Main";
import CatagoriesCard from "../../Components/CatagoriesCard";
import SubHeader from "../../Components/SubHeader";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	getProducts,
	productSelector,
} from "../../Services/Slices/productSlice";
import { catagoiesSelector } from "../../Services/Slices/catagoriesSlice";
import _ from "lodash";
import { getAllProductsByCatagories } from "../../api/api";
import SidePanel from "../../Components/SidePanel";
const Catagories = ({ toggle, handleToggle }) => {
	const [searchParams] = useSearchParams();
	const current = searchParams.get("cg");
	const dispatch = useDispatch();
	const { catagoires } = useSelector(catagoiesSelector);
	const [result, setResult] = useState([]);
	useEffect(() => {
		window.scrollTo(0, 0);
		async function fetchMyAPI() {
			let catItem = _.find(catagoires, { name: current });
			let res = _.isUndefined(catItem) ? -1 : catItem["id"];
			const response = await getAllProductsByCatagories(res);
			setResult(response.data.results);
		}

		fetchMyAPI();
	}, [current]);

	return (
		<div>
			<Main toggle={toggle} handleToggle={handleToggle}>
				{/* <h1>{temp}</h1> */}
				<section className='text-gray-400  body-font overflow-hidden'>
					<div className='flex flex-row px-5 py-24 mx-auto items-center justify-between'>
						<SidePanel current={current} />
						<div className=' -mx-4 Gridcards'>
							{result !== null
								? result.map((item, index) => (
										<CatagoriesCard key={index} {...item} />
								  ))
								: "No Product"}
						</div>
					</div>
				</section>
			</Main>
		</div>
	);
};

export default Catagories;
