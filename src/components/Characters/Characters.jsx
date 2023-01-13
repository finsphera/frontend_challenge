import { faFaceLaughBeam, faQuestion, faSkull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useRandomCharacters from "../../hooks/useRandomCharacters";
import "./characters.css";

const Characters = () => {
	const { characters } = useSelector((state) => state.characterReducer);
	const { getCharacters } = useRandomCharacters();

	useEffect(() => {
		getCharacters();
	}, [getCharacters]);

	return (
		<section className="cha-container">
			<div className="character-holder">
				{characters &&
					characters.length > 0 &&
					characters.map((person) => {
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
		</section>
	);
};

export default Characters;
