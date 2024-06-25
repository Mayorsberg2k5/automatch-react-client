import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faGlobe, faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <div>
      <nav>
        <ul className="nav-home">
          <li>
            <Link to="./"> <FontAwesomeIcon icon={faHouse} /></Link>
          </li>
        </ul>

        <ul className="topnav-centered">
          <li>
            <Link to="./howitworks"> How It Works </Link>
          </li>
          <li>
            <a href="./faq"> FAQs</a>
          </li>
          <li>
            <a href="./contact"> Contact Us</a>
          </li>
        </ul>

        <ul className="topnav-right">
          <li>
          {!isLoggedIn ? (
                <Link to="/profile">
                <FontAwesomeIcon icon={faUser} />
                </Link>
            ) : (
                <>
                <Link to="/profile">
                </Link>
                <FontAwesomeIcon icon={faSignOutAlt} onClick={onLogout} />
                </>
          )}
          </li>
          <li>
            <Link to="./news"><FontAwesomeIcon icon={faGlobe} /></Link>
          </li>
        </ul>

        <button className="hamburgerbutton">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </div>
  );
}

export default Header;