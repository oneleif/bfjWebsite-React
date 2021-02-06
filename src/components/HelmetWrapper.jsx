import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetWrapper = ({ title, description }) => {
    return (
        <Helmet>
            <title lang="en">
                {title ? `${title} | Bread For The Journey` : 'Bread For The Journey'}
            </title>
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
        </Helmet>
    );
};

export default HelmetWrapper;
