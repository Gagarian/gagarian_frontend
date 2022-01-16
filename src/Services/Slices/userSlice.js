import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser, userLogin } from "../../api/api";
import _ from "lodash";
const initialState = {
	username: null,
	profile: [],
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
			let token = response.data.key;
			const user = await getUser(token);
			console.log(user.data);
			localStorage.setItem("token", response.data.key);
			console.log(_.merge(response.data, user.data));

			return _.merge(response.data, { user: user.data });
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
// export const registerUser =
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
				token: payload.key,
				username: payload.user.username,
				profile: payload.user,
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
