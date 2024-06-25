

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {FaLinkedin} from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import React from 'react'



const Contact = () => {

    
    return (

<div class="pagebackground">
    <div className="contactcontainer">
    <h1> Connect With Us</h1>
    <p>Drop us a line through the form below and we will get back to you</p>
    <div className="contactbox">
        <div className="contact-left">
        <h3> Send your request</h3>
        <form>
            <div className="input-row">
            <div className="input-group">
                <label>Name</label>
                <input type="text" placeholder="John Smith" />
            </div>
            <div className="input-group">
                <label>Phone</label>
                <input type="text" placeholder="+1 323-422-0745" />
            </div>
            </div>
            <div className="input-row">
            <div className="input-group">
                <label>Email</label>
                <input type="text" placeholder="john.smith@gmail.com" />
            </div>
            <div className="input-group">
                <label>Subject</label>
                <input type="text" placeholder="Question about website" />
            </div>
            </div>
            <label>Message</label>
            <textarea
            rows={5}
            placeholder="Enter our message here"
            defaultValue={""}
            />
            <button type="submit" className="contactsend">
            SEND
            </button>
        </form>
        </div>
        <div className="contact-right">
        <h3> Reach us </h3>
        <div className="contacts-logos">
        <a href="mailto:mayorsberg2k5@gmail.com">
        {" "}
        <FontAwesomeIcon icon={faEnvelope}/>
        </a>
        <a
        href="https://www.linkedin.com/in/mayowa-ojuade-b54792171/"
        target="_blank"
        >
        <FaLinkedin />{" "}
        </a>
        <a href="https://github.com/Mayorsberg2k5" target="_blank">
        {" "}
        <FaGithubSquare />{" "}
        </a>
        <a href="tel:6031112298">
        {" "}
        <FontAwesomeIcon icon={faPhone} />
        </a>
    </div>
        
        <table>
            <tbody>
            <tr>
                <td>Email:</td>
                <td>contactus@mayowa.com</td>
            </tr>
            <tr>
                <td>Phone:</td>
                <td>+1 405-323-7835</td>
            </tr>
            <tr>
                <td>Address: </td>
                <td>
                2336 Bedford Avenue
                <br />
                Brooklyn, NY 11226{" "}
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>

    </div>
</div>
    )
  }


  export default Contact