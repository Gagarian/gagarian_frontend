import React from "react";
import { catagoiesSelector } from "../Services/Slices/catagoriesSlice";
import { useSelector } from "react-redux";
import SidePanelCard from "./SidePanelCard";
import _ from "lodash";

const SidePanel = ({ current }) => {
	const { catagoires } = useSelector(catagoiesSelector);

	return (
		<div className='flex flex-col w-64  px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600'>
			<div className='relative mt-6'>
				<span className='absolute inset-y-0 left-0 flex items-center pl-3'>
					<svg
						className='w-5 h-5 text-gray-400'
						viewBox='0 0 24 24'
						fill='none'>
						<path
							d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'></path>
					</svg>
				</span>

				<input
					type='text'
					className='w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
					placeholder='Search'
				/>
			</div>

			<div className='flex flex-col justify-between flex-1 mt-6'>
				<nav>
					{catagoires != null
						? _.sortBy(catagoires, ["id"]).map((item, index) => (
								<SidePanelCard key={index} {...item} current={current} />
						  ))
						: ""}

					{/* Border Divider */}
					<hr className='my-6 border-gray-200 dark:border-gray-600' />

					<a
						className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700'
						href='#'>
						<svg
							className='w-5 h-5'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>

						<span className='mx-4 font-medium'>Packages</span>
					</a>
				</nav>
			</div>
		</div>
	);
};
export default SidePanel;
