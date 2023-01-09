import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import "../../styles/forms.css";

const USER_REGEX = /^[a-zA_Z][a-zA-Z0-9-_@.]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterPage = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
		confirmPass: "",
	});

	const handleChange = (event) => {
		console.log("email on chabge", event.value);

		const result = USER_REGEX.test(event.value);

		console.log(result);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className="wrap">
			<Navbar />
			<main>
				<section>
					<Logo />
					<form
						className="long-form"
						onSubmit={(e) => handleSubmit(e)}
					>
						<label className="pri-color">
							Hola por favor ingresa tus datos
						</label>
						<label>
							<input
								name="email"
								type="text"
								placeholder="Usuario o email"
								onChange={(e) => handleChange(e.target)}
							/>
							{/* <div>
								email o username debe ser minimo 3 caracteres,
								minuscula y mayusculas solamente{" "}
								<CheckRoundedIcon color="success" />
							</div> */}
						</label>
						<label>
							<input
								name="password"
								type="password"
								placeholder="Contraseña"
							/>
							{/* <CloseRoundedIcon color="error" /> */}
						</label>
						<label>
							<input
								name="repeatPass"
								type="password"
								placeholder="Confirmar Contraseña"
							/>
						</label>
						<label>
							<input type="checkbox" name="conditions" /> Acepto y
							he leído los{" "}
							<a className="default" href="#terms">
								términos y condiciones
							</a>{" "}
							y la{" "}
							<a className="default" href="#privacy">
								política de privacidad
							</a>
							.
						</label>
						<button type="submit" className="btn-pri">
							Registrar
						</button>
						<hr />
						<div>
							<p className="small-font small-padding">
								Ya tienes cuenta con nosotros?
							</p>
							<Link to="/login">
								<button type="button" className="btn-sec">
									Log In!
								</button>
							</Link>
						</div>
					</form>
				</section>
			</main>
		</div>
	);
};
export default RegisterPage;
