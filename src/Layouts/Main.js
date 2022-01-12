import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SubHeader from "../Components/SubHeader";
import { useNavigate } from "react-router-dom";

const Main = ({ children, toggle, handleToggle }) => {
	console.log(toggle);
	return (
		<>
			<Header className='h-10  z-50' />
			{/* <SubHeader toggle={toggle} handleTG={handleToggle} /> */}
			<main className='flex-grow '>
				{/* sadf */}
				{children}
			</main>
			<footer
				className='
             inset-x-0
             bottom-0
             '>
				<Footer />
			</footer>
		</>
	);
};

Main.prototype = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element.isRequired,
	]),
};
export default Main;
