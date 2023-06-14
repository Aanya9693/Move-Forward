import { useEffect} from 'react';
import "./Navbar.css";
import React from "react";


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
			<div className="logoDiv">
				<h1>forward</h1>
			</div>
			<div className="menu">
				<ul>
				{/* <div class="mode-toggle" onClick={toggleTheme}>
					<span class="material-icons light-mode">light_mode</span>
					<span class="material-icons dark-mode">dark_mode</span>	
				</div>	 */}
					<li className="menuList"><a href="/">Home</a></li> 
					<li className="menuList"><a href="/about">About</a></li>
					<li className="menuList"><a href="/register">Register</a></li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

