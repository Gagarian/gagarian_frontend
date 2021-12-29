import React from "react";
import Main from "../../Layouts/Main";
import DashboardCard from "../../Components/DashboardCard";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Main>
        <div class=" flex items-center justify-center py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">
          <a
            class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
            href="#"
            onClick={() => navigate(`/Catagories/2`)}
          >
            እንጀራ Injera
          </a>
          <a
            class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
            href="#"
            onClick={() => navigate(`/Catagories/3`)}
          >
            {" "}
            ዳቦ Bread
          </a>
          <a
            class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
            href="#"
            onClick={() => navigate(`/Catagories/4`)}
          >
            {" "}
            ጠላ Tela
          </a>
          <a
            class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
            href="#"
            onClick={() => navigate(`/Catagories/5`)}
          >
            ጠጅ Tej
          </a>
          <a
            class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
            href="#"
            onClick={() => navigate(`/Catagories/6`)}
          >
            Other
          </a>
        </div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
              <DashboardCard />
              <DashboardCard />
              <DashboardCard />
              <DashboardCard />
              <DashboardCard />
              <DashboardCard />
            </div>
          </div>
        </section>
      </Main>
    </div>
  );
};

export default Dashboard;
