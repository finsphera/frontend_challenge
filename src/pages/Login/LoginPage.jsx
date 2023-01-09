import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import "../../styles/forms.css";

const Loginpage = () => {
	return (
		<div className="wrap">
			<Navbar />
			<main>
				<section>
					<Logo />
					<form action="">
						<label className="pri-color">
							Hola, por favor ingresa tus datos
						</label>
						<label>
							<input
								type="text"
								name="email"
								placeholder="Usuario o email"
							/>
						</label>
						<label>
							<input
								type="password"
								name="password"
								placeholder="Contraseña"
							/>
						</label>
						<button type="submit" className="btn-pri">
							Iniciar Sesion
						</button>
						<hr />
						<div>
							<p className="small-font small-padding">
								Aun no tienes cuenta con nosotros?
							</p>

							<Link to="/register">
								<button
									type="button"
									className="btn btn-sec small-padding"
								>
									Registrate aqui!
								</button>
							</Link>
						</div>
					</form>
				</section>
			</main>
		</div>
	);
};

export default Loginpage;
