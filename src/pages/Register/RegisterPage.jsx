import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormAlert from "../../components/FormAlert/FormAlert";
import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import "../../styles/forms.css";

const USER_REGEX = /^[a-zA_Z][a-zA-Z0-9-_@.]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*]).{8,24}$/;

const RegisterPage = () => {
	const [user, setUser] = useState({
		username: "",
		password: "",
		confirmPass: "",
	});

	const [userValid, setUserValid] = useState(false);
	const [passwordValid, setPasswordValid] = useState(false);
	const [conpassValid, setConpassValid] = useState(false);

	const handleChange = (event) => {
		setUser({
			...user,
			[event.name]: event.value,
		});

		if (event.name === "username") {
			console.log("checking username");
			setUserValid(USER_REGEX.test(event.value));
		}

		if (event.name === "password") {
			console.log("checking password");
			setPasswordValid(PWD_REGEX.test(event.value));
		}

		if (event.name === "confirmPass") {
			console.log("checking confirm password");
		}
	};

	useEffect(() => {
		console.log("confirmpass is being change");
		setConpassValid(user.password === user.confirmPass);
	}, [user.password, user.confirmPass]);

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log(user);
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
						<label className="input-label">
							<input
								name="username"
								type="text"
								placeholder="Usuario o email"
								autoComplete="off"
								onChange={(e) => handleChange(e.target)}
								className="wrap-input"
							/>
							{user.username !== "" ? (
								userValid ? (
									<CheckRoundedIcon
										color="success"
										className="wrap-icon"
									/>
								) : (
									<CloseRoundedIcon
										color="error"
										className="wrap-icon"
									/>
								)
							) : null}

							{user.username !== "" && !userValid ? (
								<FormAlert from="username" />
							) : null}
						</label>
						<label className="input-label">
							<input
								name="password"
								type="password"
								placeholder="Contraseña"
								onChange={(e) => handleChange(e.target)}
								className="wrap-input"
							/>
							{user.password !== "" ? (
								passwordValid ? (
									<CheckRoundedIcon
										color="success"
										className="wrap-icon"
									/>
								) : (
									<CloseRoundedIcon
										color="error"
										className="wrap-icon"
									/>
								)
							) : null}
							{user.password !== "" && !passwordValid ? (
								<FormAlert from="password" />
							) : null}
						</label>
						<label className="input-label">
							<input
								name="confirmPass"
								type="password"
								placeholder="Confirmar Contraseña"
								onChange={(e) => handleChange(e.target)}
								className="wrap-input"
							/>
							{user.confirmPass !== "" && user.password !== "" ? (
								conpassValid ? (
									<CheckRoundedIcon
										color="success"
										className="wrap-icon"
									/>
								) : (
									<CloseRoundedIcon
										color="error"
										className="wrap-icon"
									/>
								)
							) : null}

							{user.confirmPass !== "" &&
							user.password !== "" &&
							!conpassValid ? (
								<FormAlert from="confirm" />
							) : null}
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
						<button
							type="submit"
							className="btn-pri"
							disabled={
								userValid && passwordValid && conpassValid
									? false
									: true
							}
						>
							Registrar
						</button>
						<hr />
						<div>
							<p className="small-font small-padding">
								Ya tienes cuenta con nosotros?
							</p>
							<Link to="/login">
								<button type="button" className="btn-sec">
									Iniciar Sesion
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
