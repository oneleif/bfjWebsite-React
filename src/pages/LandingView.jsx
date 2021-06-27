import React from 'react';
import { Link } from 'react-router-dom';

import HelmetWrapper from '../components/HelmetWrapper';
import Container from '../components/Container';
import FeatureText from '../components/FeatureText';
import ArticleContainer from '../components/ArticleContainer';
import { EVENTS } from '../constants/events';
import { MEMBERS } from '../constants/board_members';
import { STORIES } from '../constants/stories';
import { UPCOMING } from '../constants/upcoming-events';

function Landing() {
    return (
        <main className="landing-view-container">
            <HelmetWrapper />

            {/* HERO SECTION */}
            <section className="landing-view-hero">
                <div className="maxim">
                    <Container maxWidth="xl">
                        <p>
                            We’re Part of <wbr />
                            Something Big
                        </p>
                    </Container>
                </div>
                <Container maxWidth="xl">
                    <p className="footnote">
                        The Omaha chapter of Bread for the Journey helps make passion projects come
                        to life that are intended to enrich the community.
                    </p>
                </Container>
            </section>

            {/* ABOUT US SECTION */}
            <section className="landing-view-about">
                <FeatureText title="About Us">
                    <p>
                        Founded in 2012, Bread for the Journey (BFJ) Omaha has a unique philosophy
                        of providing support to people who are passionate about making a difference
                        in the local community. BFJ Omaha has awarded over $40k in micro grants to
                        more than 20 groups and individuals. We believe that people know best what
                        is needed to impact those whose lives they touch and interact with daily.
                        It’s about trust and grassroots solutions to community issues without all of
                        the red tape and no expectation of repayment.
                    </p>
                    <p>
                        From acclimation of Sudanese refugees to Omaha, to after school coding clubs
                        for kids, to musical expression for teens, mobile medical clinics and young
                        adults with autism, BFJ’s micro grants are helping to improve the quality of
                        life of Omaha’s most vulnerable residents.
                    </p>
                </FeatureText>
            </section>

            {/* STATEMENT SECTION */}
            <section className="landing-view-statement">
                <Container maxWidth="md">
                    <p className="declaration">
                        We help individuals implement community-based giving by providing the
                        necessary tools to start small, local philanthropy groups, sometimes called
                        giving circles, to provide micro-grants in their communities.
                    </p>
                    <p className="maxim">One Gift at a Time</p>
                </Container>
            </section>

            {/* BOARD SECTION */}
            <section className="landing-view-board">
                <FeatureText title="Board">
                    <p>
                        I’d like to introduce you to the Omaha Metro Chapter. Our board was
                        introduced to BFJ through a leadership program, Bringing Spirit to
                        Leadership, and is based on Wayne Muller’s book ‘How Then Shall We Live’.
                        The many stories Wayne shared touched us personally. We could see the
                        opportunity to create similar stories in our own community.
                    </p>
                    <p>
                        Every grant is a witness to Wayne’s belief that a community has within
                        itself the people who know best how to improve it. Our role is to seed those
                        good ideas and to foster the generosity in every human heart.
                    </p>
                    <p>
                        BFJ is a wonderful way for us to give back to our community. We look forward
                        to the opportunities that lie ahead for our chapter and the difference the
                        amazing grantees are making in the Omaha Metro community.
                    </p>
                </FeatureText>

                {/* board members grid */}
                <Container maxWidth="xl">
                    <div className="board-members">
                        {MEMBERS.map((member, index) => {
                            return (
                                <div className="member" key={index}>
                                    <div className="member__image">
                                        <img src={member.picture} alt={member.name} />
                                    </div>
                                    <p className="member__name">{member.name}</p>
                                    <p className="member__role">{member.role}</p>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* NEWS SECTION */}
            <section className="landing-view-news">
                <Container maxWidth="xl">
                    <div className="head">
                        <span>News</span>
                        <Link className="link" to="/stories">
                            view more
                        </Link>
                    </div>
                    <div className="content">
                        {/* get first three items only */}
                        {STORIES.slice(0, 3).map((item) => (
                            <ArticleContainer key={item.id} article={item} />
                        ))}
                    </div>
                </Container>
            </section>

            {/* EVENTS SECTION */}
            <section className="landing-view-events">
                <Container maxWidth="xl">
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
                </Container>
            </section>

            {/* UPCOMING EVENTS SECTION */}
            <section className="landing-view-upcoming-events">
                <Container maxWidth="xl">
                    <div className="title">
                        <h4>Upcoming Events</h4>
                        <Link to="/events">view all</Link>
                    </div>
                    <div className="events">
                        {UPCOMING.map((event, index) => (
                            <ArticleContainer key={index} article={event} withDate withLink />
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}

export default Landing;
