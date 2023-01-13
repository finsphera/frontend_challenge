import { SAVE_CHARACTERS } from "./types";

const characterReducer = (state = {}, action) => {
	switch (action.type) {
		case SAVE_CHARACTERS:
			return {
				...state,
				characters: action.payload,
			};

		default:
			return state;
	}
};

export default characterReducer;
