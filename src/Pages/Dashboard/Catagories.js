import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	catagoiesSelector,
	retrievecatagories,
} from "../../Services/Slices/catagoriesSlice";
import { Link } from "react-router-dom";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
const CatagoriesCard = ({ id, name, image, description }) => {
	let navigate = useNavigate();

	return (
		<div
			className='cardscg'
			style={{
				background:
					"url( https://gagarianrest.herokuapp.com" + `${image}` + ")",
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
			onClick={() => navigate(`/catagories?cg=${name}`)}>
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
							<CatagoriesCard key={item.id} {...item} />
					  ))
					: ""}
			</div>
		</div>
	);
};

export default Catagories;
