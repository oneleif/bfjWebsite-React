import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingEvents = ({ events = [] }) => {
    return (
        <section className="upcoming-events">
            <div className="title">
                <h4>Upcoming Events</h4>
                <Link to="/events">view all</Link>
            </div>
            <div className="events">
                {events.map((event) => (
                    <div key={event.title} className="event">
                        <div className="image">
                            <img src={event.image} alt="upcoming event" />
                        </div>
                        <p className="event-title">{event.title}</p>
                        <span className="event-date">{event.date}</span>
                        <p className="event-details">{event.details}</p>
                        <Link to={event.to} className="event-more">
                            learn more
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UpcomingEvents;
