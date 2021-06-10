import React from 'react';

/**
 *
 * @param {{maxWidth:'sm' | 'md' | 'lg' | 'xl',className:string}} props
 * @returns
 */
const Container = ({ maxWidth = '', className = '', children }) => {
    return <div className={`container ${className} ${maxWidth}`.trim()}>{children}</div>;
};

export default Container;
