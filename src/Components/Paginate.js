import React from "react";
import ReactPaginate from "react-paginate";

const Paginate = ({ pageCount, handlePageClick }) => {
	return (
		<ReactPaginate
			previousLabel={"previous"}
			nextLabel={"next"}
			breakLabel={"..."}
			pageCount={pageCount}
			marginPagesDisplayed={1}
			pageRangeDisplayed={pageCount}
			onPageChange={handlePageClick}
			containerClassName={"flex"}
			pageLinkClassName={
				"px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
			}
			previousLinkClassName={
				"px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white"
			}
			// previousLinkClassName={"page-link"}
			nextLinkClassName={
				"px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white"
			}
			// nextLinkLinkClassName={"page-link"}
			breakLinkClassName={
				"px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
			}
			// breakLinkLinkClassName={"page-link"}
			activeLinkClassName={" bg-green-500"}
		/>
	);
};

export default Paginate;
