import { Link } from "react-router-dom";

const Loginpage = () => {
	return (
		<main className="app">
			<section>
				<h2 className="title">Login</h2>
				<form action="">
					<label>
						<p>Username:</p>
						<input type="text" />
					</label>
					<label>
						<p>Password:</p>
						<input type="password" />
					</label>
					<button>Sign In</button>
					<div>
						Need an account?{" "}
						<span>
							<Link to="/register">Sign up!</Link>
						</span>
					</div>
				</form>
			</section>
		</main>
	);
};

export default Loginpage;
