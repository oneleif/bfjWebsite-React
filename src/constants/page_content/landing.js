import delana from '../../assets/board/delana.png';
import marc from '../../assets/board/marc.png';
import joe from '../../assets/board/joe.png';
import tom from '../../assets/board/tom.png';
import joni from '../../assets/board/joni.png';
import stephanie from '../../assets/board/stephanie.png';

export const HERO = {
    TITLE: "We're Part of Something Big",
    FOOTNOTE:
        'The Omaha chapter of Bread for the Journey helps make passion projects come to life that are intended to enrich the community.',
};

export const ABOUT = {
    TITLE: 'About Us',
    PARAGRAPHS: [
        'Founded in 2012, Bread for the Journey (BFJ) Omaha has a unique philosophy of providing support to people who are passionate about making a difference in the local community. BFJ Omaha has awarded over $40k in micro grants to more than 20 groups and individuals. We believe that people know best what is needed to impact those whose lives they touch and interact with daily. It’s about trust and grassroots solutions to community issues without all of the red tape and no expectation of repayment.',
        'From acclimation of Sudanese refugees to Omaha, to after school coding clubs for kids, to musical expression for teens, mobile medical clinics and young adults with autism, BFJ’s micro grants are helping to improve the quality of life of Omaha’s most vulnerable residents.',
    ],
};

const members = [
    {
        name: 'Delana Rauterkus',
        role: 'President',
        picture: delana,
    },
    {
        name: 'Marc Ferguson',
        role: 'VP - Chief Financial Officer',
        picture: marc,
    },
    {
        name: 'Joe Pruch',
        role: 'VP - Business Development and Communications',
        picture: joe,
    },
    {
        name: 'Tom Kiefer',
        role: 'VP - Business Development and Communications',
        picture: tom,
    },
    {
        name: 'Joni Wheeler',
        role: 'VP - Chief Financial Officer',
        picture: joni,
    },
    {
        name: 'Dr. Stephanie Miske',
        role: 'VP - Chief Financial Officer',
        picture: stephanie,
    },
];

export const BOARD = {
    TITLE: 'Board',
    PARAGRAPHS: [
        'I’d like to introduce you to the Omaha Metro Chapter.  Our board was introduced to BFJ through a leadership program, Bringing Spirit to Leadership, and is based on Wayne Muller’s book ‘How Then Shall We Live’.  The many stories Wayne shared touched us personally. We could see the opportunity to create similar stories in our own community.',
        'Every grant is a witness to Wayne’s belief that a community has within itself the people who know best how to improve it. Our role is to seed those good ideas and to foster the generosity in every human heart.',
        'BFJ is a wonderful way for us to give back to our community. We look forward to the opportunities that lie ahead for our chapter and the difference the amazing grantees are making in the Omaha Metro community.',
    ],
    MEMBERS: members,
};

export const STATEMENT = {
    PARAGRAPHS: [
        'We help individuals implement community-based giving by providing the necessary tools to start small, local philanthropy groups, sometimes called giving circles, to provide micro-grants in their communities.',
    ],
    HERO: 'One Gift at a Time',
};
