import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import HashLoader from "react-spinners/HashLoader";
import "./i18next";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Suspense
						fallback={
							<div className='z-20 text-center bg-white flex justify-center items-center w-full h-screen'>
								<HashLoader color={"#1e1e2c"} loading={true} size={40} />
							</div>
						}>
						<App />
					</Suspense>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
