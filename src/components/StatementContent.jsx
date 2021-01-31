import React from 'react';

function StatementContent({ text, hero }) {
    return (
        <>
            <div className="sc-container">
                <div className="sc-paragraphs">
                    {text.map((paragraph, idx) => {
                        return <p key={`st-${idx}`}>{paragraph}</p>;
                    })}
                </div>
                <h2 className="sc-hero">{hero}</h2>
            </div>
        </>
    );
}

export default StatementContent;
