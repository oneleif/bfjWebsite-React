import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../Container';
import Logo from '../../assets/BFT-logo.png';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="info">
                <Container maxWidth="xl">
                    <div className="info__content">
                        <div className="logo">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="contacts">
                            <h5>Contact us</h5>
                            <p>
                                <Link to="#">
                                    <PhoneIcon />
                                </Link>
                                <Link to="#">
                                    <EmailIcon />
                                </Link>
                                <Link to="#">
                                    <FacebookIcon />
                                </Link>
                            </p>
                        </div>
                        <div className="events">
                            <h5>Upcoming Events</h5>
                            <p>
                                Bread for the Journey Fall Table - Email Fundraiser <br />
                                October 8, 2020 at 5:30pm <br />
                                2120 S 72nd St, Omaha, NE 68124-2303, United States
                            </p>
                        </div>
                        <div className="mission">
                            <h5>Our Mission</h5>
                            <p>
                                Bread for the Journey® empowers people who are passionate about
                                improving their community, one gift at a time. We help individuals
                                implement community-based giving by providing the necessary tools to
                                start small, local philanthropy groups, sometimes called giving
                                circles, to provide micro-grants in their communities.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="copyright">
                <Container maxWidth="xl">
                    <div className="copyright__content">
                        Copyright {new Date().getFullYear()}. All rights reserved.
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Footer;
