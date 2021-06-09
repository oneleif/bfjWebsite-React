import React from 'react';

/**
 *
 * @param {{maxWidth:'sm' | 'md' | 'lg' | 'xl'}} props
 * @returns
 */
const Container = ({ maxWidth, children }) => {
    return <div className={`container ${maxWidth || ''}`.trim()}>{children}</div>;
};

export default Container;
