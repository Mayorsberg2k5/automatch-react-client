import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Register = () => {



    return (
        <div className="registercontainer">
        <div className="screen">
            <div className="screen__content">
                <form className="login">
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
                        <label htmlFor="Email"></label>
                        <i className="login__icon"> <FaUserAlt /></i>
                        <input type="text" className="login__input" placeholder="Email" />
                    </div>
                    <div className="login__field">
                        <label htmlFor="Password"></label>
                        <i className="login__icon"> <FaLock /></i>
                        <input type="password" className="login__input" placeholder="Password" />
                    </div>
                    <a href="./Profile.html">
                        <button className="button register__submit">
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