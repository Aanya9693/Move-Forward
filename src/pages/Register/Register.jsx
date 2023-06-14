import React, { useState } from "react";
import "./Register.css";
import { useGoogleLogin } from "@react-oauth/google";
// import { googleAuth } from "../service/api";

const Register = () => {



	const responseGoogle = async (authResult) => {
        try {
            if (authResult["code"]) {
                console.log(authResult.code);
                const result = await googleAuth(authResult.code);
                props.setUser(result.data.data.user);
                alert("successfuly logged in");
            } else {
                console.log(authResult);
                throw new Error(authResult);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: "auth-code",
    });



  const [account, toggleAccount] = useState('login');

  const toggleSignup = () => {
	account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
  };

  return (
    <div className="login-container">
      {
	  	account === 'login' ? (

			<div className="login-box">
			


				<div className="form-container">
					<h2 className="form-title">Login</h2>
					<button className="google-btn" onClick={googleLogin}>Sign in with Google  </button>
					{/* <FontAwesomeIcon icon="fa-brands fa-google"/> */}
					
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
						<button type="submit" className="button button-primary"> Login </button>
						<span className="or-text">OR</span>
						<button type="button" className="button button-secondary" id="signup-toggle" onClick={() => toggleSignup()} > Create an Account </button>
						
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