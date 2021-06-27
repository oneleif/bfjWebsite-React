import React from 'react';

import Container from '../Container';

/**
 *
 * @param {{title:string}} props
 * @returns
 */
const FeatureText = ({ title, children }) => {
    return (
        <Container maxWidth="md">
            <div className="feature-text">
                <h2>{title}</h2>
                {children}
            </div>
        </Container>
    );
};

export default FeatureText;
