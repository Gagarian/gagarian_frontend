import React, { useEffect } from "react";
import Main from "../../Layouts/Main";
import ItemCard from "../../Components/ItemCard";
import { useSelector, useDispatch } from "react-redux";
import { retrievecatagories } from "../../Services/Slices/catagoriesSlice";

const Item = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(retrievecatagories());
		// console.log(x);
	}, [dispatch]);
	return (
		<div>
			<Main>
				<section className='text-gray-600 body-font'>
					<div className='container px-5 py-24 mx-auto'>
						<div className='flex flex-wrap -m-4'>
							<ItemCard />
						</div>
					</div>
				</section>
			</Main>
		</div>
	);
};

export default Item;
