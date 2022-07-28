import React from 'react'

import './SideContent.css';

import {
    FaFacebookSquare,
    FaInstagram,
    FaGithub,
    FaTwitter,
    FaLinkedin,
  } from "react-icons/fa";
//   import { BsLinkedin} from "react-icons/bs";

const SideContent = props => {
    return (
        <>
        <div className="container">
            <ul className='leftside-content'>
            <li><a href="https://github.com/its-kunaldev" rel='noreferrer' target={'_blank'}><FaGithub /></a></li>
                <li><a href="https://www.instagram.com/__13__kunal/" rel='noreferrer' target={'_blank'}><FaInstagram /></a></li>
                <li><a href="https://twitter.com/__13__kunal" rel='noreferrer' target={'_blank'}><FaTwitter /></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100014879986717" rel='noreferrer' target={'_blank'}><FaFacebookSquare /></a></li>
                <li><a href="https://www.linkedin.com/in/kunal-thakur-b07680211/" rel='noreferrer' target={'_blank'}><FaLinkedin /></a></li>
                <li className='line'></li>
            </ul>
            <ul className='rightside-content'>
                <li><a href="mailto:13kunalthakur@gmail.com" target={'_blank'} rel='noreferrer'>13kunalthakur@gmail.com</a></li>
                <li className='line'></li>
            </ul>
        </div>
        </>
    )
}

export default SideContent;