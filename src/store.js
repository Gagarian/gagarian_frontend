import { configureStore } from "@reduxjs/toolkit";
import catagoriesSlice from "./Services/Slices/catagoriesSlice";
import userSlice from "./Services/Slices/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
	catagories: catagoriesSlice,
	user: userSlice,
});

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: true,
});

export const persistor = persistStore(store);
