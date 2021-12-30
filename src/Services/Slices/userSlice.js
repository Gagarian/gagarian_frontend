import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin } from "../../api/api";

const initialState = {
	username: null,
	isFetching: false,
	isSuccess: false,
	isError: false,
	errorMessage: "",
	token: null,
};

export const loginUser = createAsyncThunk("users/loginuser", async () => {
	const y = await userLogin();
	console.log(y);
	return (await userLogin()).data;
});

const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {},
	extraReducers: {
		[loginUser.pending]: (state) => {
			state.isFetching = true;
		},
		[loginUser.fulfilled]: (state, { payload }) => {
			return { ...state, token: payload.key, username: "teyouale" };
		},
		[loginUser.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.isError = true;
			state.errorMessage = payload.message;
		},
	},
});

export const userSelector = (state) => state.user;
const { reducer } = userSlice;

export default reducer;
