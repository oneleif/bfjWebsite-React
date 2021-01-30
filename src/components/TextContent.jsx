import React from 'react';

function TextContent({ title, text }) {
    return (
        <>
            <h2>{title}</h2>
            {text.map((paragraph, idx) => {
                return <p key={`rt-${idx}`}>{paragraph}</p>;
            })}
        </>
    );
}

export default TextContent;
