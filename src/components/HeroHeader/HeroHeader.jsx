import "./heroheader.css";
import { useSelector } from "react-redux";

const HeroHeader = () => {
	const user = useSelector((state) => state.userReducer.user);

	return (
		<div className="hero-container">
			<section className="splitted">
				<h1>Hero Container</h1>
				<h3>Welcome Back {user.username}!</h3>
			</section>
			<section className="splitted">
				<button className="btn btn-secondary">Random Characters!</button>
			</section>
		</div>
	);
};

export default HeroHeader;
