import React, { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

const Loding = ({ children, isLoding }) => {
	return (
		<>
			{isLoding ? (
				<div className='z-20 text-center bg-white flex justify-center items-center w-full h-screen'>
					<HashLoader color={"#1e1e2c"} loading={isLoding} size={40} />
				</div>
			) : (
				children
			)}
		</>
	);
};

export default Loding;
