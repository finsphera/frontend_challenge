import Logo from "../Logo/Logo";
import "./navbar.css";

const Navbar = () => {
	return (
		<header>
			<Logo />
			<nav>
				<ul>
					<li>
						<a href="#about">Acerca de nosotros</a>
					</li>
					<li>
						<a href="#info">¿Cómo funciona?</a>
					</li>
					<li>
						<a href="#Contact">Contáctanos</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
