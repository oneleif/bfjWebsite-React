import React from 'react';

import HeroSection from '../components/HeroSection/HeroSection';
import Navbar from '../components/Navbar/Navbar';

function Landing() {
    return (
        <React.Fragment>
            <header>
                <Navbar />
                <HeroSection />
            </header>
        </React.Fragment>
    );
}

export default Landing;
