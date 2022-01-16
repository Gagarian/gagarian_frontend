import React, { useEffect, useState } from "react";
import Main from "../../Layouts/Main";
import ItemCard from "../../Components/ItemCard";
import RelatedProduct from "../../Components/RelatedProduct";
import { useSelector, useDispatch } from "react-redux";
import { retrievecatagories } from "../../Services/Slices/catagoriesSlice";
import { getProduct } from "../../api/api";
import {
	getProducts,
	clearState,
	productSelector,
} from "../../Services/Slices/productSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router";
const Item = ({ props }) => {
	const { result } = useSelector(productSelector);
	const dispatch = useDispatch();

	const [item, setItem] = useState(null);
	const [searchParams, setSearchParams] = useSearchParams();
	const { slug } = useParams();
	useEffect(() => {
		const fetchProducts = async () => {
			const response = await getProduct(slug);
			setItem(response.data);
			toast.success("Fetch Successfully");
		};
		fetchProducts();
		dispatch(getProducts(1));

		console.log(result);
	}, [dispatch]);

	return (
		<div>
			<Main>
				<section className='text-gray-600 body-font'>
					<div className='container px-5 py-24 mx-auto'>
						<div className='flex flex-wrap -m-4'>
							{item != null ? <ItemCard {...item} /> : ""}
							<div className='flex flex-wrap -m-4'>
								{result !== null
									? result
											.slice(0, 3)
											.map((item, index) => (
												<RelatedProduct key={index} item={item} />
											))
									: ""}
							</div>
						</div>
					</div>
				</section>
			</Main>
		</div>
	);
};

export default Item;
