import React from "react";
import Main from "../../Layouts/Main";
import DashboardCard from "../../Components/DashboardCard";
const Dashboard = () => {
  return (
    <div>
      <Main>
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
