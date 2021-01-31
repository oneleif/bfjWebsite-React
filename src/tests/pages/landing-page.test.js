import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { ABOUT, BOARD, STATEMENT } from '../../constants/page_content/landing';

import TextContent from '../../components/TextContent';
import StatementContent from '../../components/StatementContent';
import BoardMembers from '../../components/BoardMembers';

describe('Landing Page Test', () => {
    test('About Section', () => {
        const { queryByText } = render(<TextContent title={ABOUT.TITLE} text={ABOUT.PARAGRAPHS} />);

        expect(queryByText(ABOUT.TITLE)).toBeInTheDocument();

        ABOUT.PARAGRAPHS.map((paragraph) => {
            expect(queryByText(paragraph)).toBeInTheDocument();
        });
    });

    test('Statemant Section', () => {
        const { queryByText } = render(
            <StatementContent text={STATEMENT.PARAGRAPHS} hero={STATEMENT.HERO} />
        );

        STATEMENT.PARAGRAPHS.map((paragraph) => {
            expect(queryByText(paragraph)).toBeInTheDocument();
        });

        expect(queryByText(STATEMENT.HERO)).toBeInTheDocument();
    });

    test('Board Section', () => {
        const { queryByText } = render(<TextContent title={BOARD.TITLE} text={BOARD.PARAGRAPHS} />);

        expect(queryByText(BOARD.TITLE)).toBeInTheDocument();

        // TODO: test board paragraphs
        //
        // BOARD.PARAGRAPHS.map((paragraph) => {
        //     expect(queryByText(paragraph)).toBeInTheDocument();
        // });
    });

    test('Statemant Section', () => {
        const { queryByText } = render(<BoardMembers members={BOARD.MEMBERS} />);

        BOARD.MEMBERS.map((member) => {
            expect(queryByText(member.name)).toBeInTheDocument();
        });
    });
});
