import React from 'react';

import Logo from '../../assets/BFT-logo.png';
import { ReactComponent as CloseIcon } from '../../assets/icons/close-icon.svg';

const Drawer = ({ open, onClose, children }) => {
    return (
        <div className={`drawer ${open ? 'open' : ''}`.trim()}>
            <div className="drawer__content">
                <div className="head">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="icon">
                        <CloseIcon onClick={onClose} />
                    </div>
                </div>
                <div className="children">{children}</div>
            </div>
        </div>
    );
};

export default Drawer;
