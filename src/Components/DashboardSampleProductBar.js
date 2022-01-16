import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import {
	retrievecatagories,
	catagoiesSelector,
} from "../Services/Slices/catagoriesSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const DashboardSampleProductBar = () => {
	let navigate = useNavigate();
	const dispatch = useDispatch();
	const { catagoires } = useSelector(catagoiesSelector);
	useEffect(() => {
		if (_.isNil(catagoires)) {
			dispatch(retrievecatagories());
		}
	}, []);

	const { t, i18n } = useTranslation();
	return (
		<nav className='bg-white shadow dark:bg-gray-800'>
			<div>
				<a
					className='text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'
					href='#'>
					Popular products
				</a>
				<ul className='grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-lg p-1'>
					{_.isNil(catagoires)
						? "  "
						: catagoires.map(({ name }, index) => (
								<li
									key={index}
									onClick={() => navigate(`/catagories?cg=${name}`)}>
									<a className='flex justify-center py-4'>{name}</a>
								</li>
						  ))}
				</ul>
			</div>
			<div className='container px-6 py-3 mx-auto md:flex'>
				<div className='flex items-center justify-between'>
					<div>
						<a
							className='text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'
							href='#'>
							<p>{t("Translate.5")}</p>
						</a>
					</div>
					{/*  Mobile Menu open: "block", Menu closed: "hidden" */}
					<div className='w-full md:flex md:items-center md:justify-between'>
						<div className='flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0'>
							<a
								href='#'
								class='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2'>
								<p>{t("Translate.6")}</p>
							</a>
							<a
								href='#'
								class='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2'>
								<p>{t("Translate.7")}</p>
							</a>
							<a
								href='#'
								class='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2'>
								<p>{t("Translate.8")}</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default DashboardSampleProductBar;
