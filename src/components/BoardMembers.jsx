import React from 'react';

function BoardMembers({ members }) {
    return (
        <div className="bm-container container">
            {members.map((member, idx) => {
                return (
                    <div className="bm-member" key={`bm-${idx}`}>
                        <img src={member.picture} />
                        <h4 className="bm-name">{member.name}</h4>
                        <p className="bm-role">{member.role}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default BoardMembers;
