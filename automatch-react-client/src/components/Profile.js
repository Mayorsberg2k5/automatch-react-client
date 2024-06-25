import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


const Profile = () => {


    return (


        <div class="logincontainer">
        <div class="screen">
            <div class="screen__content">
                <form class="login">

                    <div class="Username-Email">
                        <i class="login__icon"> <FaUserAlt /> </i>
                        <label for="userName"></label>
                        <input type="text" class="login__input" placeholder="User name / Email" />
                    </div>

                    <div class="Password">
                        <i class="login__icon"> <FaLock /></i>
                        <label for="password"></label>
                        <input type="password" class="login__input" placeholder="Password" />
                    </div>
                    
                    <div class="remember">
                
                    <label class = "remembercheckbox">                     
                        <input type = "checkbox" check="checked" /> 
                        <div> Remember me</div>
                    </label>
                    
                    <a href= "#" > Forgot Password</a>

                    </div>
                    <button class="button login__submit">
                        <span class="button__text">LOGIN</span>
                        <i class="button__icon fas fa-chevron-right"></i>
                    </button>
                    
                </form>
                <div class="social-login">
                    <h3>log in via</h3>
                    <div class="social-icons">
                        <a href="#" class="social-login__icon fab fa-instagram"><FaInstagramSquare /> </a>
                        <a href="#" class="social-login__icon fab fa-facebook"><FaFacebook /></a>
                        <a href="#" class="social-login__icon fab fa-twitter"> <FaTwitter /></a>
                    </div>
                    <a href="./Register.html" class="register">Register Here</a>
                </div>
            </div>

            <div class="screen__background">
                <span class="screen__background__shape screen__background__shape4"></span>
                <span class="screen__background__shape screen__background__shape3"></span>		
                <span class="screen__background__shape screen__background__shape2"></span>
                <span class="screen__background__shape screen__background__shape1"></span>
            </div>		
        </div>
    </div>
    )
  }

  export default Profile