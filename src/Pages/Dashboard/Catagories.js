import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	catagoiesSelector,
	retrievecatagories,
} from "../../Services/Slices/catagoriesSlice";
import { Link } from "react-router-dom";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import Carousel from "react-elastic-carousel";
const CatagoriesCard = ({ id, name, image, description }) => {
	let navigate = useNavigate();

	return (
		<div
			className='cardscg'
			style={{
				background:
					"url( https://gagarianrest.herokuapp.com" + `${image}` + ")",
				// background: "url( https://dummyimage.com/600x400/)",
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
			onClick={() => {
				navigate(`/catagories?cg=${name}`);
				window.scrollTo(0, 0);
			}}>
			<h1 className='text-white'>{name}</h1>
			<Link to={`/Shop/?cg=`} className='ShopNowcg'>
				Shop Now
			</Link>
		</div>
	);
};
const Catagories = () => {
	const dispatch = useDispatch();
	const { catagoires } = useSelector(catagoiesSelector);
	const carouselRef = useRef(null);
	const Loop = (currentItem) => {
		if (currentItem.index == catagoires.length - 3) {
			setTimeout(() => {
				carouselRef.current.goTo(0);
			}, 1500);
		}
	};
	useEffect(() => {
		window.scroll(0, 0);
		dispatch(retrievecatagories());
	}, []);
	return (
		<div>
			{/* <Carousel className='cards' itemsToShow={3}> */}
			<div className='cards'>
				<Carousel
					onChange={Loop}
					ref={carouselRef}
					itemPadding={[5, 10]}
					itemsToShow={3}
					itemsToScroll={1}
					enableAutoPlay
					autoPlaySpeed={1500}>
					{catagoires !== null
						? _.orderBy(catagoires, ["id"], ["asc"]).map((item, index) => (
								<CatagoriesCard key={item.id} {...item} />
						  ))
						: ""}
				</Carousel>
			</div>
		</div>
	);
};

export default Catagories;
