import { configureStore } from "@reduxjs/toolkit";
import catagoriesSlice from "./Services/Slices/catagoriesSlice";
import userSlice from "./Services/Slices/userSlice";
// const reducer = {};
const reducer = {
	catagories: catagoriesSlice,
	user: userSlice,
};
export const store = configureStore({
	reducer: reducer,
	devTools: true,
});
