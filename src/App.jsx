import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
// import AllRoutes from "./routes";
import "./App.css";
import Register from "./pages/Register/Register";

const App = () => {
	return (
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
	);
};

export default App;
