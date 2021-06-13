import React from 'react';
import { Link } from 'react-router-dom';

import ArticleContainer from '../components/ArticleContainer/ArticleContainer';
import HelmetWrapper from '../components/HelmetWrapper';
import Container from '../components/Container';
import { STORIES } from '../constants/stories';

const StoriesView = () => {
    return (
        <div className="stories-view-container">
            <HelmetWrapper title="Stories" />

            <div className="stories-view-hero">
                <Container maxWidth="xl">
                    <h1>Our Stories</h1>
                </Container>
            </div>

            <Container maxWidth="xl">
                <div className="stories-view-articles">
                    {STORIES.map((story, index) => (
                        <Link className="stories-view-link" key={index} to={story.link}>
                            <ArticleContainer article={story} />
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default StoriesView;
