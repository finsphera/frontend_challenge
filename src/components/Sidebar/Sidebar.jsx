import Logo from "../Logo/Logo";
import "./sidebar.css";
const Sidebar = () => {
	return (
		<nav className="flex-left">
			<div className="flex-center">
				<Logo />
				<ul>
					<li>home</li>
					<li>explore</li>
					<li>Blog</li>
					<li>Contact</li>
				</ul>
			</div>
			<div>links icons</div>
		</nav>
	);
};

export default Sidebar;
