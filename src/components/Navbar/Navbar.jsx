import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'rc-drawer';

import { ReactComponent as HamburgerIcon } from '../../assets/icons/hamburger_menu.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close-icon.svg';
import Logo from '../../assets/BFT-logo.png';
import NavbarLinks from '../../components/NavLinks/NavLinks';

const Navbar = () => {
    /********************
     * Hooks
     ********************/
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

    /********************
     * Functions
     ********************/
    const handleResize = useCallback(() => {
        return setIsMobile(window.innerWidth < 1280);
    }, [setIsMobile]);

    function handleCloseNav() {
        setIsOpen(false);
    }
    function handleOpenNav() {
        setIsOpen(true);
    }

    useEffect(() => {
        // adds event listener for window resizing
        window.addEventListener('resize', handleResize);
        return () => {
            // removes the event listener whenever component unmounted
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    /********************
     * Render
     ********************/
    return (
        <nav className="navbar-container container">
            <Link to="/">
                <img src={Logo} alt="logo" />
            </Link>

            {isMobile ? <HamburgerIcon onClick={handleOpenNav} /> : <NavbarLinks />}

            <Drawer
                open={isOpen}
                width="100vw"
                placement="left"
                handler={
                    <span className="drawer__close">
                        <CloseIcon onClick={handleCloseNav} />
                    </span>
                }
            >
                <NavbarLinks handleCloseNav={handleCloseNav} />
            </Drawer>
        </nav>
    );
};

export default Navbar;
