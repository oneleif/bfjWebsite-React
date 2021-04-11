import React from 'react';

import { ABOUT, BOARD, STATEMENT } from '../constants/page_content/landing';
import { EVENTS } from '../constants/events';
import { NEWS } from '../constants/news-items';
import { UPCOMING } from '../constants/upcoming-events';

import HeroSection from '../components/HeroSection/HeroSection';
import HelmetWrapper from '../components/HelmetWrapper';
// import HeroLanding from '../components/HeroLanding';
import TextContent from '../components/TextContent';
import StatementContent from '../components/StatementContent';
import BoardMembers from '../components/BoardMembers';
import Container from '../components/Container';
import UpcomingEvents from '../components/UpcomingEvents';

function Landing() {
    return (
        <React.Fragment>
            <HelmetWrapper />

            <HeroSection />
            <TextContent title={ABOUT.TITLE} text={ABOUT.PARAGRAPHS} />
            <StatementContent text={STATEMENT.PARAGRAPHS} hero={STATEMENT.HERO} />
            <TextContent title={BOARD.TITLE} text={BOARD.PARAGRAPHS} />
            <BoardMembers members={BOARD.MEMBERS} />
            <Container title="News" to="/stories" items={NEWS} className="news" />
            <Container title="Events" to="/events" items={EVENTS} className="event" />
            <UpcomingEvents events={UPCOMING} />
        </React.Fragment>
    );
}

export default Landing;
