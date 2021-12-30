import { configureStore } from "@reduxjs/toolkit";
import catagoriesSlice from "./Services/Slices/catagoriesSlice";

// const reducer = {};
const reducer = {
	catagories: catagoriesSlice,
};
export const store = configureStore({
	reducer: reducer,
	devTools: true,
});
