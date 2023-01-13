import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { saveCharacters } from "../redux/characters/action";

const generateNumArray = () => {
	//const randomNum = Math.floor(Math.random() * 826);
	const randomArray = Array(8)
		.fill()
		.map(() => Math.floor(1 + (826 - 1 + 1) * Math.random()));

	return randomArray;
};

const useRandomCharacters = () => {
	const dispatch = useDispatch();

	const getCharacters = useCallback(() => {
		axios
			.get(`https://rickandmortyapi.com/api/character/${generateNumArray()}`)
			.then((res) => {
				//Aqui manda a guardar los personajes al store...
				dispatch(saveCharacters(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	}, [dispatch]);

	return { getCharacters };
};

export default useRandomCharacters;
