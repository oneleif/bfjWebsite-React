import React from 'react';

import { ReactComponent as CloseIcon } from '../../assets/icons/close-icon.svg';

const Drawer = ({ open, onClose, children }) => {
    return (
        <div className={`drawer ${open ? 'open' : ''}`.trim()}>
            <span className="icon">
                <CloseIcon onClick={onClose} />
            </span>
            <div className="content">{children}</div>
        </div>
    );
};

export default Drawer;
