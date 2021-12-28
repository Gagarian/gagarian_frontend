import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import "./App.css";
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/'>
					<Route index element={<Dashboard />} />
					<Route path='signup' element={<Signup />} />
					<Route path='login' element={<Login />} />
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
