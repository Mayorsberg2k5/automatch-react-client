import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Retrieve username and password from localStorage
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
    
        // Check if entered credentials match stored credentials
        if (username === storedUsername && password === storedPassword) {
          alert('Login successful!');
          navigate('/login');
          // Redirect to dashboard or another page
        } else {
          alert('Invalid username or password');
        }
      };

    return (
        <div class="logincontainer">
        <div class="screen">
            <div class="screen__content">
                <form class="login" onSubmit={handleLogin}>

                    <div class="Username-Email">
                        <i class="login__icon"> <FaUserAlt /> </i>
                        <label for="userName"></label>
                        <input type="text" class="login__input" placeholder="User name" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div class="Password">
                        <i class="login__icon"> <FaLock /></i>
                        <label for="password"></label>
                        <input type="password" class="login__input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    
                    <div class="remember">
                
                    <label class = "remembercheckbox">                     
                        <input type = "checkbox" check="checked" /> 
                        <div> Remember me</div>
                    </label>
                    
                    <a href= "#" > Forgot Password</a>

                    </div>
                    <button class="button login__submit" type="submit">
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
                    <Link to="/Register" class="register">Register Here</Link>
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