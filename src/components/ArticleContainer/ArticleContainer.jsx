import React, { useCallback, useEffect, useState } from 'react';

const ArticleContainer = ({ article }) => {
    /********************
     * Hooks
     ********************/
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = useCallback(() => {
        return setIsMobile(window.innerWidth <= 768);
    }, [isMobile]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    /********************
     * Custom Functions
     ********************/
    const cutDescription = (description) => {
        if (isMobile) {
            return description.length > 70 ? `${description.substring(0, 70)}...` : description;
        } else {
            return description.length > 200 ? `${description.substring(0, 200)}...` : description;
        }
    };

    /********************
     * Render
     ********************/
    return (
        <article className="article-container">
            <div className="article-image">
                <img src={article.image} alt={article.title} />
            </div>
            <div className="article-text">
                <p className="title">{article.title}</p>
                <p className="description">{cutDescription(article.description)}</p>
            </div>
        </article>
    );
};

export default ArticleContainer;
