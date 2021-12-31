import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin, userRegistation } from "../../api/api";

const initialState = {
	username: null,
	isFetching: false,
	isSuccess: false,
	isError: false,
	errorMessage: "",
	token: null,
};

export const loginUser = createAsyncThunk(
	"users/loginuser",
	async ({ username, password }, { rejectWithValue }) => {
		try {
			const response = await userLogin(username, password);
			localStorage.setItem("token", response.data.key);
			// console.log(response);

			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
export const registerUser = createAsyncThunk(
	"users/signin",
	async ({ username, password, email }, { rejectWithValue }) => {
		try {
			const response = await userRegistation(username, password, email);
			localStorage.setItem("token", response.data.key);
			// console.log(response);

			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		clearState: (state) => {
			state.isError = false;
			state.isSuccess = false;
			state.isFetching = false;

			return state;
		},
	},
	extraReducers: {
		[loginUser.pending]: (state) => {
			state.isFetching = true;
			state.isSuccess = false;
		},
		[loginUser.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.isError = true;
			state.isSuccess = false;
			state.errorMessage = payload.message;
		},
		[loginUser.fulfilled]: (state, { payload }) => {
			return {
				...state,
				token: payload,
				username: "teyouale",
				isSuccess: true,
				isError: false,
			};
		},
		[userRegistation.pending]: (state) => {
			state.isFetching = true;
			state.isSuccess = false;
		},
		[userRegistation.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.isError = true;
			state.isSuccess = false;
			state.errorMessage = payload.message;
		},
		[userRegistation.fulfilled]: (state, { payload }) => {
			return {
				...state,
				token: payload,
				username: "teyouale",
				isSuccess: true,
				isError: false,
			};
		},
	},
});

export const userSelector = (state) => state.user;
export const { clearState } = userSlice.actions;
const { reducer } = userSlice;

export default reducer;
