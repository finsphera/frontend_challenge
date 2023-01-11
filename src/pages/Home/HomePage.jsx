import { useSelector } from "react-redux";
import Characters from "../../components/Characters/Characters";
import Searchbar from "../../components/Searchbar/Searchbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./homepage.css";

const HomePage = () => {
	const user = useSelector((state) => state.userReducer.user);
	return (
		<main className="main-container">
			<Sidebar />
			<div className="flex-right">
				<Searchbar />
				<h1>Home Page</h1>
				<div>Welcome back {user.username}!</div>
				<Characters />
			</div>
		</main>
	);
};

export default HomePage;
