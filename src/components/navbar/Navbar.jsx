import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>Super Carlist</h1>
            <Link className="home-link" to="/">
                Home
            </Link>
        </nav>
    );
};

export default Navbar;
