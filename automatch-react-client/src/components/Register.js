import React, { useState } from 'react';
import { FaUserAlt, FaLock, FaChevronRight, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
    
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.username === username);
    
        if (userExists) {
          setError('Username already taken');
          return;
        }
    
        const newUser = { username, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('isLoggedIn', 'true');
        alert("Registration successful!")
        navigate('/profile');
      };

    return (
        <div className="registercontainer">
        <div className="screen">
            <div className="screen__content">
                <form className="login" onSubmit={handleRegister}>
                {error && <div style={{ color: 'red' }}>{error}</div>}
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
                        <input type="text" className="login__input" placeholder="Username" value={username}onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="login__field">
                        <label htmlFor="Password"></label>
                        <i className="login__icon"> <FaLock /></i>
                        <input type="password" className="login__input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
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