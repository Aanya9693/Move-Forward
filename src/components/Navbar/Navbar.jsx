import "./Navbar.css";
import React from "react";
import {NavLink} from "react-router-dom"

const Navbar = () => {
	return (
		<div className="navBar">
			<NavLink to="/">
				<div className="logoDiv">
					<p>Move</p>
					<h1>Forward</h1>
				</div>
			</NavLink>

			<div className="menu">
				<ul>
					<li className="nav-item">
						<NavLink to="/register">
							
							<span className="material-icons">person</span>
						
						</NavLink>
					</li>
					<li className="nav-item">
						<a href="#">
							<i className="fa-brands fa-github"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

