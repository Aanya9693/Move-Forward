import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";
import AllRoutes from "./routes";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<AllRoutes></AllRoutes>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
