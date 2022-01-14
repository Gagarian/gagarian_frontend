import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCatagories } from "../../api/api";
const initialState = {
	catagoires: [],
};

export const retrievecatagories = createAsyncThunk(
	"catagories/retrievecatagories",
	async (rejectWithValue) => {
		try {
			const response = await getCatagories();
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
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
			return { ...state, catagoires: payload };
		},
	},
});

export const catagoiesSelector = (state) => state.catagories;
const { reducer } = catagoriesSlice;
export default reducer;
