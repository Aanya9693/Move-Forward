import React, {useState} from "react";
import "./Footer.css"

const Footer = () => {
	
	return (
		<div className="footer">
			<div className="awaits-container">
				<div className="tagline">
					<h1 className="tagline-heading">Your Opportunity Awaits...</h1>
					<h2 className="tagline-description"> Let's get Started!</h2>
				</div>
				<a href="/" className="get-started-button">Get Started</a>
			</div>
            
			<footer className="footer-container">
				<div className="footer-column">
					<h3 className="footer-heading">Move-Forward</h3>
					<p className="footer-description">Welcome to Move Forward, your comprehensive platform for discovering and applying to over 500 internship, fellowship, mentorship, and research opportunities. Our mission is to empower students and professionals by connecting them with valuable career development experiences.</p>
				</div>
               
				<div className="footer-column">
					<h3 className="footer-heading">Contact Info</h3>
					<ul className="footer-list">
						<li>Email: info@opportunity.com</li>
						<li className="icons">
							<a href="#"><i className="fab fa-facebook"></i></a>
							<a href="#"><i className="fab fa-twitter"></i></a>
							<a href="#"><i className="fab fa-instagram"></i></a>
						</li>
					</ul>
				</div>
			</footer>
		</div>	
	);
};

export default Footer;
