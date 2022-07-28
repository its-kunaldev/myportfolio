import React from 'react';
import './Footer.css';

import {
    FaFacebookSquare,
    FaInstagram,
    FaGithub,
    FaTwitter,
  } from "react-icons/fa";
  import { BsLinkedin} from "react-icons/bs";
  import { IoMdRocket } from "react-icons/io";


const Footer = props => {

    return (
        <section className='footer-section' id="footer">
            <h1>kunal Thakur</h1>
            <ul className='allSections'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <ul className="social-apps">
                <li><a href="https://github.com/its-kunaldev" rel='noreferrer' target={'_blank'}><FaGithub /></a></li>
                <li><a href="https://www.instagram.com/__13__kunal/" rel='noreferrer' target={'_blank'}><FaInstagram /></a></li>
                <li><a href="https://twitter.com/__13__kunal" rel='noreferrer' target={'_blank'}><FaTwitter /></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100014879986717" rel='noreferrer' target={'_blank'}><FaFacebookSquare /></a></li>
                <li><a href="https://www.linkedin.com/in/kunal-thakur-b07680211/" rel='noreferrer' target={'_blank'}><BsLinkedin /></a></li>
            </ul>
            <span><IoMdRocket className='rocket'/></span>
            <p className='copyright'> &copy; kunal. All rights reserved</p>
        </section>
    )
}

export default Footer;