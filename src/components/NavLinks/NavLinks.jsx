import React from 'react';
import { NavLink } from 'react-router-dom';

import LINKS from '../../constants/nav_links';

/**
 *
 * @param {{mobile:boolean,handleCloseNav:function}} props
 * @returns
 */
export default function NavLinks({ mobile, handleCloseNav }) {
    return (
        <div className={`navbar__links ${mobile ? '' : 'desktop'}`.trim()}>
            {LINKS.map((link, index) => (
                <NavLink
                    exact
                    key={index}
                    to={link.path}
                    className={`${mobile ? '' : 'desktop'}`.trim()}
                    activeClassName="active"
                    onClick={handleCloseNav || null}
                >
                    {link.label}
                </NavLink>
            ))}
        </div>
    );
}
