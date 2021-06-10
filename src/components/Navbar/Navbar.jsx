import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Drawer from '../Drawer';
import Container from '../Container';
import NavbarLinks from '../NavLinks';
//assets
import Logo from '../../assets/BFT-logo.png';
import { ReactComponent as HamburgerIcon } from '../../assets/icons/hamburger_menu.svg';

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
        <Container maxWidth="xl">
            <nav className="navbar">
                <div className="navbar__content">
                    <Link to="/" className="logo">
                        <img src={Logo} alt="logo" />
                    </Link>

                    {isMobile ? (
                        <HamburgerIcon onClick={handleOpenNav} />
                    ) : (
                        <NavbarLinks mobile={isMobile} />
                    )}
                </div>

                {isMobile && (
                    <Drawer open={isOpen} onClose={handleCloseNav}>
                        <NavbarLinks mobile={isMobile} handleCloseNav={handleCloseNav} />
                    </Drawer>
                )}
            </nav>
        </Container>
    );
};

export default Navbar;
