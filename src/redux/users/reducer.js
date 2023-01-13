import { USER_AUTH_SUCCESS } from "./types";

const initialState = {
	isAuthenticated: false,
	isLoading: false,
	user: {
		username: "",
		password: "",
	},
	error: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_AUTH_SUCCESS:
			return {
				...state,
				user: {
					username: action.payload.username,
					password: "",
					id: "",
				},
				isAuthenticated: true,
				isLoading: false,
				error: null,
			};

		default:
			return state;
	}
};
export default userReducer;
