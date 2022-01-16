import React, { useEffect, useRef, useState } from "react";
import Main from "../../Layouts/Main";
import DashboardCard from "../../Components/DashboardCard";
import HomeCarousel from "../../Components/HomeCarousel";
import DashboardSampleProductBar from "../../Components/DashboardSampleProductBar";
import { useSelector, useDispatch } from "react-redux";
import {
	getProducts,
	clearState,
	productSelector,
} from "../../Services/Slices/productSlice";
import { Link } from "react-router-dom";
import Catagories from "./Catagories";
import { getAllProducts } from "../../api/api";
import toast from "react-hot-toast";
import Paginate from "../../Components/Paginate";
import HeroSection from "./HeroSection";
import Carousel from "react-elastic-carousel";

const Dashboard = ({ toggle, handleToggle }) => {
	const dispatch = useDispatch();
	const { isFetching, errorMessage, isSuccess, result, count } =
		useSelector(productSelector);
	let limit = 10;
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

	const carouselRef = useRef(null);
	const Loop = (currentItem) => {
		if (currentItem.index == 1) {
			setTimeout(() => {
				carouselRef.current.goTo(0);
			}, 4500);
		}
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
					<Carousel
						onChange={Loop}
						ref={carouselRef}
						showArrows={false}
						enableSwipe={false}
						enableMouseSwipe={false}
						disableArrowsOnEnd={false}
						pagination={false}
						itemPadding={[5, 10]}
						itemsToShow={1}
						itemsToScroll={1}
						enableAutoPlay
						autoPlaySpeed={4500}>
						<HomeCarousel />
						<HeroSection />
					</Carousel>
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

					<Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
				</section>
			</Main>
		</div>
	);
};

export default Dashboard;
