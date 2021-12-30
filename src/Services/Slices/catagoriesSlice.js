import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCatagories } from "../../api/api";
import { logger } from "workbox-core/_private";
const initialState = {
	movies: [],
};

export const retrievecatagories = createAsyncThunk(
	"catagories/retrievecatagories",
	async () => {
		// logger(ss)
		return (await getCatagories()).data;
	},
);

const catagoriesSlice = createSlice({
	name: "catagories",
	initialState,
	extraReducers: {
		// [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
		// console.log("Fetched Successfully!");
		// return { ...state, movies: payload };
		// },
		[retrievecatagories.fulfilled]: (state, { payload }) => {
			return { ...state, movies: payload };
		},
	},
});

const { reducer } = catagoriesSlice;
export default reducer;
