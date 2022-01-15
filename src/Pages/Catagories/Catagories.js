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
const Catagories = ({ toggle, handleToggle }) => {
	const [searchParams] = useSearchParams();
	const current = searchParams.get("cg");
	const dispatch = useDispatch();
	const { catagoires } = useSelector(catagoiesSelector);
	const [result, setResult] = useState([]);
	useEffect(() => {
		async function fetchMyAPI() {
			let catItem = _.find(catagoires, { name: current });
			let res = _.isUndefined(catItem) ? -1 : catItem["id"];
			const response = await getAllProductsByCatagories(res);
			setResult(response.data.results);
			console.log(response);
		}

		fetchMyAPI();
	}, []);

	return (
		<div>
			<Main toggle={toggle} handleToggle={handleToggle}>
				{/* <h1>{temp}</h1> */}
				<section className='text-gray-400  body-font overflow-hidden'>
					<div className='container px-5 py-24 mx-auto'>
						<div class='flex flex-wrap justify-center -mx-4'>
							{result !== null
								? result.map((item) => <CatagoriesCard {...item} />)
								: "No Product"}
						</div>
						{/* <CatagoriesCard /> */}

						{/* <CatagoriesCard /> */}
						{/* <CatagoriesCard /> */}
						{/* <CatagoriesCard /> */}
						{/* <CatagoriesCard /> */}
					</div>
				</section>
			</Main>
		</div>
	);
};

export default Catagories;
