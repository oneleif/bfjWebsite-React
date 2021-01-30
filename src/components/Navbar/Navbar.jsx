import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../../assets/BFT-logo.png';

const Navbar = () => {
    /********************
     * Hooks
     ********************/
    const [isOpen, setIsOpen] = useState(false);

    /********************
     * Functions
     ********************/
    function handleToggle() {
        setIsOpen(!isOpen);
    }
    function handleCloseNav() {
        setIsOpen(false);
    }

    /********************
     * Render
     ********************/
    return (
        <nav className="navbar-container container">
            <Link to="/">
                <img src={Logo} alt="logo" />
            </Link>

            <HamburgerMenu
                className="hamburger"
                isOpen={isOpen}
                menuClicked={handleToggle}
                width={25}
                height={15}
                strokeWidth={1.5}
                rotate={0}
                color="black"
                borderRadius={10}
                animationDuration={0.5}
            />

            <ul className={`nav-list${isOpen ? ' open' : ''}`}>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active" onClick={handleCloseNav}>
                        About Us
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/stories" activeClassName="active" onClick={handleCloseNav}>
                        Our Stories
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/events" activeClassName="active" onClick={handleCloseNav}>
                        Events
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/donate" activeClassName="active" onClick={handleCloseNav}>
                        Donate
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
