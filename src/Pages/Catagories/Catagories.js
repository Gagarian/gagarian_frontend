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
import Paginate from "../../Components/Paginate";
import toast from "react-hot-toast";

const Catagories = ({ toggle, handleToggle }) => {
	const [searchParams] = useSearchParams();
	const current = searchParams.get("cg");
	const dispatch = useDispatch();
	const { catagoires } = useSelector(catagoiesSelector);
	const [result, setResult] = useState([]);
	const [pageCount, setpageCount] = useState(0);

	useEffect(() => {
		window.scrollTo(0, 0);
		fetchProducts(1);
	}, [current]);

	let limit = 3;
	let toastWaiting;

	const handlePageClick = async (data) => {
		// console.log(data.selected);
		let currentPage = data.selected + 1;

		console.log(currentPage);
		fetchProducts(currentPage);
	};
	const fetchProducts = async (currentPage) => {
		toastWaiting = toast.loading("Waiting...", {
			id: toastWaiting,
		});
		let catItem = _.find(catagoires, { name: current });
		let res = _.isUndefined(catItem) ? -1 : catItem["id"];
		const response = await getAllProductsByCatagories(res, currentPage);
		setpageCount(Math.ceil(response.data.count / limit));
		setResult(response.data.results);
		console.log(result);
		toast.success("Fetch Successfully", {
			id: toastWaiting,
		});
	};

	return (
		<div>
			<Main toggle={toggle} handleToggle={handleToggle} gone>
				{/* <h1>{temp}</h1> */}
				<section className='text-gray-400  body-font overflow-hidden'>
					<div className='flex flex-row px-5 py-24  mx-auto justify-center '>
						<SidePanel current={current} />
						<div className='w-screen'>
							<div className='mx-4 Gridcards w-full '>
								{result.length != 0 ? (
									result.map((item, index) => (
										<CatagoriesCard key={index} {...item} />
									))
								) : (
									<>
										<div className='text-9xl m-10 text-center text-red-500'>
											No Products
										</div>
									</>
								)}
							</div>
							{result.length != 0 ? (
								<Paginate
									pageCount={pageCount}
									handlePageClick={handlePageClick}
								/>
							) : (
								""
							)}
						</div>
					</div>
				</section>
			</Main>
		</div>
	);
};

export default Catagories;
