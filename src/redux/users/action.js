import { USER_AUTH_SUCCESS } from "./types";

export const loginUser = (user) => {
	return {
		type: USER_AUTH_SUCCESS,
		payload: user,
	};
};
