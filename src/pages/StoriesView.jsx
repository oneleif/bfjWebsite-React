import React from 'react';

import ArticleContainer from '../components/ArticleContainer/ArticleContainer';
import HelmetWrapper from '../components/HelmetWrapper';
import { EVENTS } from '../constants/events';

const StoriesView = () => {
    return (
        <div className="stories-view-container">
            <HelmetWrapper title="Stories" />

            <div className="stories-view-hero">
                <h1>Stories</h1>
            </div>
            <div className="stories-view-articles">
                {EVENTS.map((event, index) => (
                    <ArticleContainer key={index} article={event} />
                ))}
            </div>
        </div>
    );
};

export default StoriesView;
