import { useSelector } from "react-redux";

const HomePage = () => {
	const user = useSelector((state) => state.userReducer.user);
	return (
		<div>
			<h1>Home Page</h1>
			<div>Welcome back {user.username}!</div>
		</div>
	);
};

export default HomePage;
