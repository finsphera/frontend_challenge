import { SAVE_CHARACTERS } from "./types";

export const saveCharacters = (characters) => {
	return {
		type: SAVE_CHARACTERS,
		payload: characters,
	};
};
