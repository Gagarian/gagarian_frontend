import React from "react";
import PropTypes from "prop-types";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const Main = ({ children }) => {
	return (
		<>
			<Header class='h-10  z-50' />
			<main class='flex-grow '>
				{/* sadf */}
				{children}
			</main>
			<footer
				class='
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
