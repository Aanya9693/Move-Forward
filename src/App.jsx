import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
// import AllRoutes from "./routes";
import { useEffect, useState } from "react";
import "./App.css";
import Register from "./pages/Register/Register";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import GoogleLogin from "./components/GoogleLogin";

const App = () => {
	const [user, setUser] = useState();

	return (

		<GoogleOAuthProvider clientId="257792586258-fkfdrv2va7g1ss5sql89n3mu7g8k243o.apps.googleusercontent.com">
			<div className="App">
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/register" element={<Register />} />
						
					</Routes>
					<Footer />
				</Router>
			</div>
		</GoogleOAuthProvider>
	);
};

export default App;
