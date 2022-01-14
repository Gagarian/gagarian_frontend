import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	catagoiesSelector,
	retrievecatagories,
} from "../../Services/Slices/catagoriesSlice";
import { Link } from "react-router-dom";
import _ from "lodash";
const CatagoriesCard = ({ name, image, description }) => {
	return (
		<div
			className='cardscg'
			style={{
				background:
					"url( https://gagarianrest.herokuapp.com" + `${image}` + ")",
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
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

	useEffect(() => {
		dispatch(retrievecatagories());
		console.log(catagoires);
	}, []);
	return (
		<div>
			<div className='cards'>
				{catagoires !== null
					? _.orderBy(catagoires, ["id"], ["asc"]).map((item, index) => (
							<CatagoriesCard {...item} />
					  ))
					: ""}
			</div>
		</div>
	);
};

export default Catagories;
