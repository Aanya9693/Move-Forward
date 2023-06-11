import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [account, toggleAccount] = useState('login');

  const toggleSignup = () => {
	account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
  };

  return (
    <div className="login-container">
      {
	  	account === 'login' ? (
			<div className="login-box">
			{/* <img
				src=""
				alt="logo"
				className="login-logo"
			/> */}
			<div className="form-container">
				<h2 className="form-title">Login</h2>
				<form id="login-form">
				<div className="form-group">
					<label htmlFor="username">Username:</label>
					<input
					type="text"
					id="username"
					name="username"
					className="form-input"
					required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input
					type="password"
					id="password"
					name="password"
					className="form-input"
					required
					/>
				</div>

				<div className="form-error" id="login-error"></div>
				<div className="form-actions">
					<button type="submit" className="button button-primary">
					Login
					</button>
					<span className="or-text">OR</span>
					<button
					type="button"
					className="button button-secondary"
					id="signup-toggle"
					onClick={() => toggleSignup()}
					>
					Create an Account
					</button>
				</div>
				</form>
			</div>
			</div>
      ) : (
		<div className="login-box">
			{/* <img
				src=""
				alt="logo"
				className="login-logo"
			/> */}
			<div className="form-container">
				<h2 className="form-title">Signup</h2>
				<form id="signup-form">
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input
					type="text"
					id="name"
					name="name"
					className="form-input"
					required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="new-username">Username:</label>
					<input
					type="text"
					id="new-username"
					name="username"
					className="form-input"
					required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="new-password">Password:</label>
					<input
					type="password"
					id="new-password"
					name="password"
					className="form-input"
					required
					/>
				</div>
				<div className="form-error" id="signup-error"></div>
				<div className="form-actions">
					<button type="submit" className="button button-primary">
					Signup
					</button>
					<span className="or-text">OR</span>
					<button
					type="button"
					className="button button-secondary"
					id="login-toggle"
					onClick={() => toggleSignup()}
					>
					Already have an account
					</button>
				</div>
				</form>
			</div>
		</div>
      )}
    </div>
  );
};

export default Register;