import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SubHeader = () => {
  let navigate = useNavigate();
  return (
    <nav class="bg-white shadow dark:bg-gray-800">
      <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <a
          href="#"
          onClick={() => navigate(`/Catagories/4`)}
          class="text-gray-800 transition-colors duration-200 transform  hover:border-blue-500 border-b-2  mx-1.5 sm:mx-6"
        >
          Home
        </a>

        <a
          href="#"
          onClick={() => navigate(`/Catagories/4`)}
          class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          እንጀራ (Injera)
        </a>

        <a
          href="#"
          onClick={() => navigate(`/Catagories/4`)}
          class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          ዳቦ (Bread)
        </a>

        <a
          href="#"
          onClick={() => navigate(`/Catagories/4`)}
          class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          ጠላ (Tela)
        </a>

        <a
          href="#"
          onClick={() => navigate(`/Catagories/4`)}
          class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          ጠጅ (Tej)
        </a>

        <a
          href="#"
          onClick={() => navigate(`/Catagories/4`)}
          class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Other
        </a>
      </div>
    </nav>
  );
};

export default SubHeader;
