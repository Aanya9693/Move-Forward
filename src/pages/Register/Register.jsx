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



//   const [account, toggleAccount] = useState('login');

//   const toggleSignup = () => {
// 	account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
//   };

  return (
    <div className="login-container">
			<div className="login-box">
				<div className="form-container">
					<h2 className="form-title">SignUp</h2>
					<button className="google-btn" onClick={googleLogin}>Sign Up with Google  <i className="fa-brands fa-google"></i></button>
					<span className="or-text">OR</span>
					<button className="google-btn" onClick={googleLogin}>Sign Up with GitHub  <i class="fa-brands fa-github"></i></button>
					
					{/* <form id="login-form"> */}
							{/* <div className="form-group">
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
							</div> */}

					{/* <div className="form-error" id="login-error"></div> */}
						{/* <div className="form-actions">
							<button type="submit" className="button button-primary"> Login </button>
							<span className="or-text">OR</span>
							<button type="button" className="button button-secondary" id="signup-toggle" onClick={() => toggleSignup()} > Create an Account </button>
							
						</div> */}
					{/* </form> */}
				</div>
			</div>
    </div>
  );
};

export default Register;