import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
const Navbar = props => {
    return(
        <nav className='navbar'>
            <h1>{props.logo}</h1>
            <ul>
                {
                    props.links.map(link => 
                        <li>
                            <Link to={link.redirect}>{link.titulo}</Link>               
                        </li>)
                }
            </ul>
        </nav>
    )
}

export default Navbar;