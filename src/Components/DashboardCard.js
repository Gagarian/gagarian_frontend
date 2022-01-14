import React from "react";
import { useNavigate } from "react-router-dom";
import { AddShoppingCart } from "@material-ui/icons";
// src={item.image}
// <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
//             {item.category.name}
//           </h2>

//            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
//             {item.name}
//           </h1>

const DashboardCard = ({ item }) => {
  // console.log(item);
  let navigate = useNavigate();
  return (
    <div class="flex flex-col items-center justify-center max-w-sm mx-auto">
      <div
        class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)",
        }}
      ></div>

      <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          Nike Revolt
        </h3>

        <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
          <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
