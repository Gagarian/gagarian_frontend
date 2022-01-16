import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import "./App.css";
import Catagories from "./Pages/Catagories/Catagories";
import Item from "./Pages/Item/Item";
import Cart from "./Pages/Cart/Cart";
import Purchase from "./Pages/Cart/Purchase";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HashLoader from "react-spinners/HashLoader";
import ScrollIntoView from "./Middlewares/ScrollIntoView";
import Package from "./Pages/Package/Package";

function App() {
	let navigate = useNavigate();

	const [toggle, setToggle] = useState(0);
	const handleToggle = (index) => {
		setToggle(index);
		if (index == 0) {
			navigate(`/`);
		} else {
			navigate(`/Catagories/${index}`);
		}
	};

	const { t, i18n } = useTranslation();
	function handleClick(lang) {
		i18n.changeLanguage(lang);
	}

	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);

	return (
		<div className='App'>
			<Toaster position='top-center' reverseOrder={false} />
			<ScrollIntoView>
				{loading ? (
					<div className='z-20 text-center bg-white flex justify-center items-center w-full h-screen'>
						<HashLoader color={"#1e1e2c"} loading={loading} size={40} />
					</div>
				) : (
					<Routes>
						<Route path='/'>
							<Route
								index
								element={
									<Dashboard toggle={toggle} handleToggle={handleToggle} />
								}
							/>
							<Route path='signup' element={<Signup />} />

							<Route path='login' element={<Login />} />
							<Route
								path='/catagories'
								element={
									<Catagories toggle={toggle} handleToggle={handleToggle} />
								}
							/>
							<Route path='/item/:slug' element={<Item />} />
							<Route path='/cart' element={<Cart />} />
							<Route path='/purchase' element={<Purchase />} />
							<Route path='/package' element={<Package />} />

							<Route
								path='*'
								element={
									<main style={{ padding: "1rem" }}>
										<p>There's nothing here!</p>
									</main>
								}
							/>
						</Route>
					</Routes>
				)}
			</ScrollIntoView>
		</div>
	);
}

export default App;
