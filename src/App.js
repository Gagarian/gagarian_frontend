import React, { useState } from "react";
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
import { useTranslation } from 'react-i18next';
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
		i18n.changeLanguage(lang)
	}

	return (
		<div className='App'>
			<Toaster position='top-center' reverseOrder={false} />
			<Routes>
				<Route path='/'>
					<Route
						index
						element={<Dashboard toggle={toggle} handleToggle={handleToggle} />}
					/>
					<Route path='signup' element={<Signup />} />

					<Route path='login' element={<Login />} />
					<Route
						path='/catagories'
						element={<Catagories toggle={toggle} handleToggle={handleToggle} />}
					/>
					<Route path='/item/:id' element={<Item />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/purchase' element={<Purchase />} />
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
		</div>
	);
}

export default App;
