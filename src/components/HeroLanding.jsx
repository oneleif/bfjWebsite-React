import React from 'react';

import '../styles/heroLanding.scss';

import { HERO } from '../constants/page_content/landing';

function HeroLanding() {
    return (
        <>
            <div className="hero">
                <h1 className="h1">{HERO.TITLE}</h1>
            </div>
            <p className="footnote">{HERO.FOOTNOTE}</p>
        </>
    );
}

export default HeroLanding;
