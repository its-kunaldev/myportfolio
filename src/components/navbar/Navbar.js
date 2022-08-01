import React from 'react';
// import Button from '../UI/Button';

// import { AiOutlineHome} from "react-icons/ai";
import { AiOutlineProject} from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import { BiBook } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";

import './Navbar.css';

const Navbar = props => {

    return (
        <nav className='navbar'>
            <ul className='nav-ul'>
                {/* <li><a className='active' href="#home"><AiOutlineHome /></a></li> */}
                <li><a href="#about"><AiOutlineUser /></a></li>
                <li><a href="#experience"><BiBook /></a></li>
                <li><a href="#Projects"><AiOutlineProject /></a></li>
                <li><a href="#contact"><TiContacts /></a></li>
                <li><a href="#home"><IoIosArrowUp /></a></li>
            </ul>
        </nav>
    )
}

export default Navbar;