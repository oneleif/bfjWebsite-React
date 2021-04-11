import React from 'react';
import { Link } from 'react-router-dom';

import { ABOUT, BOARD, STATEMENT } from '../constants/page_content/landing';
import { EVENTS } from '../constants/events';
import { NEWS } from '../constants/news-items';
import { UPCOMING } from '../constants/upcoming-events';

import HeroSection from '../components/HeroSection/HeroSection';
import HelmetWrapper from '../components/HelmetWrapper';
import TextContent from '../components/TextContent';
import StatementContent from '../components/StatementContent';
import BoardMembers from '../components/BoardMembers';
import UpcomingEvents from '../components/UpcomingEvents';
import ArticleContainer from '../components/ArticleContainer/ArticleContainer';

function Landing() {
    return (
        <div className="landing-view-container">
            <HelmetWrapper />

            <HeroSection />
            <TextContent title={ABOUT.TITLE} text={ABOUT.PARAGRAPHS} />
            <StatementContent text={STATEMENT.PARAGRAPHS} hero={STATEMENT.HERO} />
            <TextContent title={BOARD.TITLE} text={BOARD.PARAGRAPHS} />
            <BoardMembers members={BOARD.MEMBERS} />

            <section className="landing-view-news container">
                <div className="head">
                    <span>News</span>
                    <Link className="link" to="/stories">
                        view more
                    </Link>
                </div>
                <div className="content">
                    {NEWS.map((item, index) => (
                        <ArticleContainer key={index} article={item} />
                    ))}
                </div>
            </section>

            <section className="landing-view-events container">
                <div className="head">
                    <span>Events</span>
                    <Link className="link" to="/events">
                        view more
                    </Link>
                </div>
                <div className="content">
                    {EVENTS.map((item, index) => (
                        <ArticleContainer key={index} article={item} />
                    ))}
                </div>
            </section>

            <UpcomingEvents events={UPCOMING} />
        </div>
    );
}

export default Landing;
