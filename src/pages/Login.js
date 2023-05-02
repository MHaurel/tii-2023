//import React, { useEffect, useRef, useState } from "react";

import "./Login.css";

function Login() {
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-logo">
                    <img src={process.env.PUBLIC_URL + '/images/FitTrack.png'} alt="logo" />
                </div>

                <h2 className="login-title"> Log In </h2>

                <form className="login-form">
                    <input type="text" id="email-phone" name="email-phone" placeholder="email or phone number" required />
                    <input type="password" id="password" name="password" placeholder="password" required />

                    <div className="remember-me">
                        <input type="checkbox" id="remember-me" name="remember-me" />
                        <label htmlFor="remember-me"> Remember me </label>
                    </div>

                    <a href="#" className="forgot-password"> Forgot password? </a>
                    <button type="submit" className="login-button"> Log In </button>

                    <div className="social-login">
                        <button className="google-button"> <img src={process.env.PUBLIC_URL + '/images/icons/googleLogo.png'} alt="google icon" /> Log in with Google </button>
                        <button className="facebook-button"> <img src={process.env.PUBLIC_URL + '/images/icons/facebookLogo.png'} alt="facebook icon" /> Log in with Facebook </button>
                    </div>
                </form>
            </div>

            <div className="login-illustration">
                <img src={process.env.PUBLIC_URL + '/images/weightIllustration1.png'} alt="weight illustration" />
            </div>
        </div>
    )
}

export default Login;