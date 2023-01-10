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
	const [termsConditions, setTermConditions] = useState(false);

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
					<form className="long-form" onSubmit={(e) => handleSubmit(e)}>
						<label className="pri-color">Hola por favor ingresa tus datos</label>
						<label className="input-label">
							<input
								name="username"
								type="text"
								placeholder="Usuario o email"
								className="wrap-input"
								autoComplete="off"
								required
								onChange={(e) => handleChange(e.target)}
							/>
							{user.username !== "" ? (
								userValid ? (
									<CheckRoundedIcon color="success" className="wrap-icon" />
								) : (
									<CloseRoundedIcon color="error" className="wrap-icon" />
								)
							) : null}

							{user.username !== "" && !userValid ? <FormAlert from="username" /> : null}
						</label>
						<label className="input-label">
							<input
								name="password"
								type="password"
								placeholder="Contraseña"
								className="wrap-input"
								required
								onChange={(e) => handleChange(e.target)}
							/>
							{user.password !== "" ? (
								passwordValid ? (
									<CheckRoundedIcon color="success" className="wrap-icon" />
								) : (
									<CloseRoundedIcon color="error" className="wrap-icon" />
								)
							) : null}
							{user.password !== "" && !passwordValid ? <FormAlert from="password" /> : null}
						</label>
						<label className="input-label">
							<input
								name="confirmPass"
								type="password"
								className="wrap-input"
								placeholder="Confirmar Contraseña"
								required
								onChange={(e) => handleChange(e.target)}
							/>
							{user.confirmPass !== "" && user.password !== "" ? (
								conpassValid ? (
									<CheckRoundedIcon color="success" className="wrap-icon" />
								) : (
									<CloseRoundedIcon color="error" className="wrap-icon" />
								)
							) : null}

							{user.confirmPass !== "" && user.password !== "" && !conpassValid ? <FormAlert from="confirm" /> : null}
						</label>
						<label>
							<input type="checkbox" name="termsConditions" onChange={() => setTermConditions(!termsConditions)} /> Acepto y he leído
							los{" "}
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
							className={userValid && passwordValid && conpassValid && termsConditions ? "btn-pri" : "btn-disabled"}
							disabled={userValid && passwordValid && conpassValid && termsConditions ? false : true}
						>
							Registrar
						</button>
						<hr />
						<div>
							<p className="small-font small-padding">Ya tienes cuenta con nosotros?</p>
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
