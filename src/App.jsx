import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
// import AllRoutes from "./routes";
import { useEffect, useState } from "react";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import GoogleLogin from "./components/GoogleLogin";

const App = () => {

	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);
	const login = (userData) => {
		setUser(userData);
		localStorage.setItem("user", JSON.stringify(userData));
	};
	const logout = () => {
		setUser(null);
		localStorage.setItem("user", JSON.stringify(null));
	};

	return (
		<GoogleOAuthProvider clientId="864641738960-hmru6vpqugdtpct6rogp74h2tqvck1ff.apps.googleusercontent.com">
			<div className="App">
				<Router>
					<Navbar user={user} login={login} logout={logout} />
					<Routes>
						<Route
							path="/"
							element={
								<Home
									user={user}
									login={login}
									logout={logout}
								/>
							}
						/>
						<Route
							path="/about"
							element={
								<About
									user={user}
									login={login}
									logout={logout}
								/>
							}
						/>
						<Route
							path="/auth"
							element={
								<Auth
									user={user}
									login={login}
									logout={logout}
								/>
							}
						/>
					</Routes>
					<Footer />
				</Router>
			</div>
		</GoogleOAuthProvider>
	);
};

export default App;
