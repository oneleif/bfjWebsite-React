import React from 'react';

function StatementContent({ text, hero }) {
    return (
        <>
            {text.map((paragraph, idx) => {
                return <p key={`st-${idx}`}>{paragraph}</p>;
            })}
            <h2>{hero}</h2>
        </>
    );
}

export default StatementContent;
