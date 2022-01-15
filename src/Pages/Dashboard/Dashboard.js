import React, { useEffect, useState } from "react";
import Main from "../../Layouts/Main";
import DashboardCard from "../../Components/DashboardCard";
import Carousel from "../../Components/Carousel";
import DashboardSampleProductBar from "../../Components/DashboardSampleProductBar";
import { useSelector, useDispatch } from "react-redux";
import {
	getProducts,
	clearState,
	productSelector,
} from "../../Services/Slices/productSlice";
import { Link } from "react-router-dom";
import Catagories from "./Catagories";
import ReactPaginate from "react-paginate";
import { getAllProducts } from "../../api/api";
import toast from "react-hot-toast";

const Dashboard = ({ toggle, handleToggle }) => {
	const dispatch = useDispatch();
	const { isFetching, errorMessage, isSuccess, result, count } =
		useSelector(productSelector);

	let limit = 3;
	let toastWaiting;
	const [pageCount, setpageCount] = useState(0);

	const handlePageClick = async (data) => {
		console.log(data.selected);
		let currentPage = data.selected + 1;
		// const commentsFormServer = await fetchComments(currentPage);
		fetchProducts(currentPage);
		// setItems(commentsFormServer);
		// scroll to the top
		// window.scrollTo(0, 0);
	};
	const fetchProducts = async (currentPage) => {
		// const data = await res.json();
		dispatch(getProducts(currentPage));
	};
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	useEffect(() => {
		console.log("");
		if (isFetching) {
			toast.loading("Waiting...", {
				id: toastWaiting,
			});
		}
	}, [isFetching]);
	useEffect(() => {
		if (errorMessage) {
			// toast.dismiss();
			toast.error(errorMessage, {
				id: toastWaiting,
			});
			dispatch(clearState());
		}
		if (isSuccess) {
			toast.dismiss(toastWaiting, {
				id: toastWaiting,
			});
			setpageCount(Math.ceil(count / limit));
			toast.success("Fetch Successfully");
		}
	}, [errorMessage, isSuccess]);

	return (
		<div>
			<Main toggle={toggle} handleToggle={handleToggle}>
				<section className='text-gray-600 body-font'>
					<Carousel />
					<Catagories />
					<DashboardSampleProductBar />

					<div className='container px-5 py-24 mx-auto'>
						<div className='flex flex-wrap -m-4'>
							{result !== null
								? result.map((item, index) => (
										<DashboardCard key={index} {...item} />
								  ))
								: ""}
						</div>
					</div>
					<ReactPaginate
						previousLabel={"previous"}
						nextLabel={"next"}
						breakLabel={"..."}
						pageCount={pageCount}
						marginPagesDisplayed={1}
						pageRangeDisplayed={pageCount}
						onPageChange={handlePageClick}
						containerClassName={"flex"}
						pageLinkClassName={
							"px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
						}
						previousLinkClassName={
							"px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white"
						}
						// previousLinkClassName={"page-link"}
						nextLinkClassName={
							"px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white"
						}
						// nextLinkLinkClassName={"page-link"}
						breakLinkClassName={
							"px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
						}
						// breakLinkLinkClassName={"page-link"}
						activeLinkClassName={" bg-green-500"}
					/>
				</section>
			</Main>
		</div>
	);
};

export default Dashboard;
