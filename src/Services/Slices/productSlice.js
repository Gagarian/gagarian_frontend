import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../../api/api";

const initailState = {
	result: null,
	isFetching: false,
	isSuccess: false,
	count: null,
	next: null,
	previous: null,
	errorMessage: null,
};

export const getProducts = createAsyncThunk(
	"product/getAllProducts",
	async (id, { rejectWithValue }) => {
		try {
			let page = id || 1;
			const response = await getAllProducts(page);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

const productSlice = createSlice({
	name: "product",
	initialState: initailState,
	reducers: {
		clearState: (state) => {
			state.errorMessage = null;
			state.isFetching = false;
			return state;
		},
	},
	extraReducers: {
		[getProducts.pending]: (state) => {
			state.isFetching = true;
			state.isSuccess = false;
		},
		[getProducts.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.errorMessage = payload;
		},
		[getProducts.fulfilled]: (state, { payload }) => {
			return {
				...state,
				result: payload.results,
				count: payload.count,
				next: payload.next,
				isSuccess: true,
				previous: null,
				isError: false,
				isFetching: false,
			};
		},
	},
});

export const productSelector = (state) => state.product;

export const { clearState } = productSlice.actions;

const { reducer } = productSlice;

export default reducer;
