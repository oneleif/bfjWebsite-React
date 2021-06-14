import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../components/Container';
import ArticleContainer from '../components/ArticleContainer';
import { STORIES } from '../constants/stories';

const IndividualStoryView = ({ match }) => {
    const story = STORIES.find((story) => story.id === match.params.id);

    const scrollToTop = () => {
        scrollTo({ behavior: 'smooth', top: 0 });
    };

    return story ? (
        <div className="individual-story-view-container">
            <div className="individual-story-view-hero">
                <Container maxWidth="xl">
                    <nav className="breadcrumb">
                        <ol className="breadcrumb-list">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to="/stories">Stories</Link>
                            </li>
                            <li className="breadcrumb-item active">{story.title}</li>
                        </ol>
                    </nav>

                    <h1>{story.title}</h1>
                </Container>
            </div>
            <Container maxWidth="xl">
                <main className="individual-story-view-content">
                    <div className="charity">
                        <div className="text">
                            <p>
                                <span className="icon"></span>
                                {story.sponsorsAmount} sponsors
                            </p>
                            <p>
                                <span className="icon"></span>
                                {story.donationsAmount} USD
                            </p>
                        </div>
                        <div className="btn">
                            <button>Donate </button>
                        </div>
                    </div>
                    <div className="image">
                        <img src={story.image} alt={story.title} />
                    </div>
                    <Container maxWidth="lg" className="details">
                        {story.description}
                    </Container>
                    <Container maxWidth="lg" className="footnote">
                        See their website at:
                        <p>
                            <a target="_blank" rel="noreferrer" href="https://changeofomaha.com/">
                                https://changeofomaha.com/
                            </a>
                        </p>
                        <p>Here is a KETV segment on Change of Omaha</p>
                        <p>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.ketv.com/article/change-of-omaha-leads-volunteers-to-clean-up-north-omaha/32790106"
                            >
                                https://www.ketv.com/article/change-of-omaha-leads-volunteers-to-clean-up-north-omaha/32790106
                            </a>
                        </p>
                        <p>
                            Bread for the Journey can’t wait to see what lies ahead for Change of
                            Omaha and the great things they will do for our community!
                        </p>
                    </Container>
                </main>

                {/* LATEST STORIES */}
                <section className="individual-story-view-latest">
                    <div className="head">
                        <span>Latest Stories</span>
                        <Link className="link" to="/stories">
                            view more
                        </Link>
                    </div>
                    <div className="content">
                        {/* get three items only that's not this story */}
                        {STORIES.filter((story) => story.id !== match.params.id)
                            .slice(0, 3)
                            .map((item) => (
                                <Link
                                    onClick={scrollToTop}
                                    key={item.id}
                                    to={`/stories/${item.id}`}
                                >
                                    <ArticleContainer key={item.id} article={item} />
                                </Link>
                            ))}
                    </div>
                </section>
            </Container>
        </div>
    ) : (
        <Container maxWidth="xl">
            <div className="not-found">
                {/* TODO */}
                Nothing found
            </div>
        </Container>
    );
};

export default IndividualStoryView;
