import React from 'react';

function TextContent({ title, text }) {
    return (
        <div className="tc-container">
            <h2 className="tc-title">{title}</h2>
            {text.map((paragraph, idx) => {
                return (
                    <p key={`tc-${idx}`} className="tc-paragraph">
                        {paragraph}
                    </p>
                );
            })}
        </div>
    );
}

export default TextContent;
