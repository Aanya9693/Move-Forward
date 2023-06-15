import { useEffect} from 'react';
import "./Navbar.css";
import React from "react";
import {NavLink} from "react-router-dom"

const Navbar = () => {

	// const [theme, setTheme] = useState("light-theme");

	// const toggleTheme = () => {
	// 	const body = document.querySelector('body');
	// 	const lightModeIcon = document.querySelector('.light-mode');
	// 	const darkModeIcon = document.querySelector('.dark-mode');
		
	// 	if (body.classList.contains('light-theme')) {
	// 	  body.classList.replace('light-theme', 'dark-theme');
	// 	  lightModeIcon.style.opacity = 0;
	// 	  darkModeIcon.style.opacity = 1;
	// 	} else {
	// 	  body.classList.replace('dark-theme', 'light-theme');
	// 	  lightModeIcon.style.opacity = 1;
	// 	  darkModeIcon.style.opacity = 0;
	// 	}
	//   };

	// useEffect(() => {
	// 	document.body.className = theme;
	// }, [theme]);

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

