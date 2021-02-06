import React from 'react';
import { Link } from 'react-router-dom';

// Name is a work in progress
const Container = ({ title, to, items, className }) => {
    return (
        <section className={`${className}-container container`}>
            <div className="head">
                <span>{title}</span>
                <Link className="link" to={to}>
                    view more
                </Link>
            </div>
            <div className="content">
                {items.map((item, index) => {
                    return (
                        <div key={index} className={`${className}-item`}>
                            <img src={item.picture} alt={`${className}-image`} />
                            <p className="title">{item.title}</p>
                            <p className="description">{item.decription}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Container;
