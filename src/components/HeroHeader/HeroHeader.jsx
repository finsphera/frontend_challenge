import "./heroheader.css";
import { useSelector } from "react-redux";
import useRandomCharacters from "../../hooks/useRandomCharacters";

const HeroHeader = () => {
	const user = useSelector((state) => state.userReducer.user);
	const { getCharacters } = useRandomCharacters();

	return (
		<div className="hero-container">
			<section className="splitted">
				<h1>Hero Container</h1>
				<h3>Welcome Back {user.username}!</h3>
			</section>
			<section className="splitted">
				<button onClick={getCharacters} className="btn btn-secondary">
					Random Characters!
				</button>
			</section>
		</div>
	);
};

export default HeroHeader;
