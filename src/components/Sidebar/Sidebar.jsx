import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./sidebar.css";
const Sidebar = () => {
	return (
		<nav className="flex-left">
			<div className="flex-center">
				<Logo />
				<ul>
					<li>Home</li>
					<li>Explore</li>
					<li>Blog</li>
					<li>Contact</li>
				</ul>
			</div>
			<div className="socials">
				<Link to="//www.instagram.com/">
					<Instagram />
				</Link>{" "}
				<Link to="//twitter.com/?lang=en">
					<Twitter />
				</Link>{" "}
				<Link to="//www.facebook.com/">
					<Facebook />
				</Link>
			</div>
		</nav>
	);
};

export default Sidebar;
