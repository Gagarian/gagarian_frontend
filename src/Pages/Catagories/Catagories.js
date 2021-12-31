import React from "react";
import Main from "../../Layouts/Main";
import CatagoriesCard from "../../Components/CatagoriesCard";
const Catagories = ({ toggle, handleToggle }) => {
	return (
		<div>
			<Main toggle={toggle} handleToggle={handleToggle}>
				<section class='text-gray-400  body-font overflow-hidden'>
					<div class='container px-5 py-24 mx-auto'>
						<div class='-my-8 divide-y-2 divide-gray-800'>
							<CatagoriesCard />
							<CatagoriesCard />
							<CatagoriesCard />
							<CatagoriesCard />
							<CatagoriesCard />
							<CatagoriesCard />
						</div>
					</div>
				</section>
			</Main>
		</div>
	);
};

export default Catagories;
