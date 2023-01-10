import "./form-alert.css";

const FormAlert = (props) => {
	if (props.from === "username") {
		return (
			<p className="alert">
				usuario o email debe tener minimo 3 caracteres y contener solo
				minusculas y mayusculas.
			</p>
		);
	}
	if (props.from === "password") {
		return (
			<p className="alert">
				contraseña debe ser de 8 - 24 caracteres
				<br />
				contener minusculas y mayuculas.
				<br />
				utilizar numeros y simbolos.
			</p>
		);
	}
	if (props.from === "confirm") {
		return (
			<p className="alert">
				contraseña y confirmar contraseña deben ser iguales...
			</p>
		);
	}

	return <p>no alert found!</p>;
};

export default FormAlert;
