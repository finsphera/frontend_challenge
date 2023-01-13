import Characters from "../../components/Characters/Characters";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import Searchbar from "../../components/Searchbar/Searchbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./homepage.css";

const HomePage = () => {
	return (
		<main className="main-container">
			<Sidebar />
			<div className="flex-right">
				<Searchbar />
				<HeroHeader />
				<Characters />
			</div>
		</main>
	);
};

export default HomePage;
