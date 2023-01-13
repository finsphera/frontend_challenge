import { faFaceLaughBeam, faQuestion, faSkull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./characters.css";

const Characters = () => {
	const [charList, setCharlist] = useState([]);

	const generateNumArray = () => {
		//const randomNum = Math.floor(Math.random() * 826);
		const randomArray = Array(8)
			.fill()
			.map(() => Math.floor(1 + (826 - 1 + 1) * Math.random()));

		console.log("a random number", randomArray);

		return randomArray;
	};

	const getRandomCharacters = useCallback(() => {
		//Usecallback es para retener la ref de la funcion 1 sola vez...
		axios
			.get(`https://rickandmortyapi.com/api/character/${generateNumArray()}`)
			.then((res) => {
				console.log(res.data);
				setCharlist(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [setCharlist]);

	useEffect(() => {
		getRandomCharacters();
	}, [getRandomCharacters]);

	return (
		<section className="cha-container">
			<div className="character-holder">
				{charList.length > 0 &&
					charList.map((person) => {
						return (
							<div className="card" key={person.id}>
								<img src={person.image} alt="a character" className="card-img" />
								<div className="card-details">
									<div className="card-status-title">
										{person.status === "Alive" ? (
											<FontAwesomeIcon icon={faFaceLaughBeam} className="fa-2x left-icon" color="#28a745" />
										) : person.status === "Dead" ? (
											<FontAwesomeIcon icon={faSkull} className="fa-2x left-icon" color="#dc3545" />
										) : (
											<FontAwesomeIcon icon={faQuestion} className="fa-2x left-icon" color="#6c757d" />
										)}
										<h3 className="card-title">{person.name}</h3>
									</div>
									<label className="card-label-1">Species: {person.species}</label>
									<label className="card-label-2">Gender: {person.gender}</label>
									<label className="card-label-3">Origin: {person.origin.name}</label>
								</div>
							</div>
						);
					})}
			</div>
			<button onClick={getRandomCharacters}>Get Random Characters!</button>
		</section>
	);
};

export default Characters;
