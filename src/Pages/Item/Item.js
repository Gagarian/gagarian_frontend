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

const Item = () => {
	const { result } = useSelector(productSelector);
	const [item, setItem] = useState(null);
	useEffect(() => {
		const fetchProducts = async () => {
			const response = await getProduct("Barley-Teff-Injera");
			setItem(response.data);
			toast.success("Fetch Successfully");
		};
		fetchProducts();
		console.log(item);
	}, []);

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
