import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/**
 *
 * @param {{article:object,withLink:boolean,withDate:boolean}} props
 * @returns
 */
const ArticleContainer = ({ article, withLink, withDate }) => {
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
    const trimDescription = (description) => {
        if (isMobile) {
            return description.length > 70 ? `${description.substring(0, 70)}...` : description;
        } else {
            return description.length > 200 ? `${description.substring(0, 250)}...` : description;
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
                {withDate && <span className="date">{article.date}</span>}
                <p className="description">{trimDescription(article.description)}</p>
                {withLink && (
                    <Link className="link" to={article.link}>
                        learn more
                    </Link>
                )}
            </div>
        </article>
    );
};

export default ArticleContainer;
