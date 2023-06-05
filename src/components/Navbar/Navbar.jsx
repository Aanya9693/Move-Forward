import "./Navbar.css";
import React from "react";

const Navbar = () => {
	return (
		<div className="navBar">
			<div className="logoDiv">
				<h1 className="logo">
					Oppor<strong>tunities</strong>
				</h1>
			</div>
			<div className="menu">
				<li className="menuList">Opportunities</li>
				<li className="menuList">About</li>
				<li className="menuList">Register</li>
			</div>
		</div>
	);
};

export default Navbar;
