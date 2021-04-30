import React from 'react';
import { NavLink } from 'react-router-dom';

import LINKS from '../../constants/nav_links';

export default function NavLinks({ handleCloseNav }) {
    return (
        <div className="navbar__links">
            {LINKS.map((link, index) => (
                <NavLink
                    exact
                    key={index}
                    to={link.path}
                    activeClassName="active"
                    onClick={handleCloseNav || null}
                >
                    {link.label}
                </NavLink>
            ))}
        </div>
    );
}
