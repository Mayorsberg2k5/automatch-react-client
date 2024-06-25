import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {useState} from "react";

import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        // Validate and store username and password in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Registration successful!');
        navigate("/Profile")

      };

    return (
        <div className="registercontainer">
        <div className="screen">
            <div className="screen__content">
                <form className="login" onSubmit={handleRegister}>
                    <div className="login__field">
                        <i className="login__icon"> <FaUserAlt /> </i>
                        <label htmlFor="fistName"></label>
                        <input type="text" className="login__input" placeholder="First Name" />
                    </div>
                    <div className="login__field">
                        <label htmlFor="lastName"></label>
                        <i className="login__icon"> <FaUserAlt /></i>
                        <input type="text" className="login__input" placeholder="Last Name" />
                    </div>
                    <div className="login__field">
                        <label htmlFor="Username"></label>
                        <i className="login__icon"> <FaUserAlt /></i>
                        <input type="text" className="login__input" placeholder="Username" value={username}onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="login__field">
                        <label htmlFor="Password"></label>
                        <i className="login__icon"> <FaLock /></i>
                        <input type="password" className="login__input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <a href="./Profile.html">
                        <button type="submit" className="button register__submit">
                            <span className="button__text">SIGN UP</span>
                            <i className="button__icon"> <FaChevronRight /> </i>
                        </button>
                    </a>				
                </form>
                <div className="register-login">
                    <h3>sign up via</h3>
                    <div className="social-icons">
                        <a href="#" className="social-login__icon"> <FaInstagram  /> </a>
                        <a href="#" className="social-login__icon"> <FaFacebookF /> </a>
                        <a href="#" className="social-login__icon"> <FaTwitter /> </a>
                    </div>
                </div>
            </div>
            <div className="screen__background">
                <span className="screen__background__shape screen__background__shape4"></span>
                <span className="screen__background__shape screen__background__shape3"></span>		
                <span className="screen__background__shape screen__background__shape2"></span>
                <span className="screen__background__shape screen__background__shape1"></span>
            </div>		
        </div>
    </div>
    )
  }

 export  default Register