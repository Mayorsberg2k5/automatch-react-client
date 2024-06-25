import React, { useState, useEffect } from 'react';
import { FaUserAlt, FaLock, FaTwitter, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Profile = ({ isLoggedIn, onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/Form");
        }
    }, [isLoggedIn, navigate]);

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent the form from submitting
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            onLogin(true);
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/Form');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="logincontainer">
            <div className="screen">
                <div className="screen__content">
                    <form className="login" onSubmit={handleLogin}>
                        <div className="Username-Email">
                            <i className="login__icon"> <FaUserAlt /> </i>
                            <label htmlFor="userName"></label>
                            <input
                                type="text"
                                className="login__input"
                                placeholder="User name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="Password">
                            <i className="login__icon"> <FaLock /></i>
                            <label htmlFor="password"></label>
                            <input
                                type="password"
                                className="login__input"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="remember">
                            <label className="remembercheckbox">
                                <input type="checkbox" />
                                <div> Remember me</div>
                            </label>
                            <a href="#"> Forgot Password</a>
                        </div>
                        <button className="button login__submit" type="submit">
                            <span className="button__text">LOGIN</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
                    <div className="social-login">
                        <h3>log in via</h3>
                        <div className="social-icons">
                            <a href="#" className="social-login__icon fab fa-instagram">
                                <FaInstagramSquare />
                            </a>
                            <a href="#" className="social-login__icon fab fa-facebook">
                                <FaFacebook />
                            </a>
                            <a href="#" className="social-login__icon fab fa-twitter">
                                <FaTwitter />
                            </a>
                        </div>
                        <Link to="/register" className="register">Register Here</Link>
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
    );
};

export default Profile;