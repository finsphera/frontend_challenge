import axios from "axios";
import { useEffect } from "react";
import "./characters.css";

const Characters = () => {
	return (
		<section className="cha-container">
			<h1>Characters section</h1>
			<button onClick={getRandomChar}></button>
		</section>
	);
};

export default Characters;
