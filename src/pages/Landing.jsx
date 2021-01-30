import React from 'react';

import { ABOUT, BOARD, STATEMENT } from '../constants/page_content/landing';

import HeroLanding from '../components/HeroLanding';
import TextContent from '../components/TextContent';
import StatementContent from '../components/StatementContent';
import BoardMembers from '../components/BoardMembers';

function Landing() {
    return (
        <>
            <HeroLanding />
            <TextContent title={ABOUT.TITLE} text={ABOUT.PARAGRAPHS} />
            <StatementContent text={STATEMENT.PARAGRAPHS} hero={STATEMENT.HERO} />
            <TextContent title={BOARD.TITLE} text={BOARD.PARAGRAPHS} />
            <BoardMembers members={BOARD.MEMBERS} />
        </>
    );
}

export default Landing;
