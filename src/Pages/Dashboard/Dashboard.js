import React, { useEffect } from "react";
import Main from "../../Layouts/Main";
import DashboardCard from "../../Components/DashboardCard";
import Carousel from "../../Components/Carousel";
import DashboardSampleProductBar from "../../Components/DashboardSampleProductBar";
import { useSelector, useDispatch } from "react-redux";
import HeroSection from "../../Components/HeroSection";
import {
  getProducts,
  clearState,
  productSelector,
} from "../../Services/Slices/productSlice";
import { Link } from "react-router-dom";
import Catagories from "./Catagories";

const Dashboard = ({ toggle, handleToggle }) => {
  const dispatch = useDispatch();

  const { result } = useSelector(productSelector);
  useEffect(() => {
    dispatch(getProducts());
    console.log(result);
  }, [dispatch]);
  return (
    <div>
      <Main toggle={toggle} handleToggle={handleToggle}>
        <section className="text-gray-600 body-font">
          <HeroSection />
          <Catagories />
          <DashboardSampleProductBar />

          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {result !== null
                ? result.map((item, index) => (
                    <DashboardCard key={index} item={item} />
                  ))
                : ""}
            </div>
          </div>
        </section>
      </Main>
    </div>
  );
};

export default Dashboard;
