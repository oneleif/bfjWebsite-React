import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Navbar from '../../components/Navbar/Navbar';

const links = ['About Us', 'Our Stories', 'Events', 'Donate'];

describe('Hero section test', () => {
    test('should render intro-text', () => {
        const history = createMemoryHistory();

        const { queryByText } = render(
            <Router history={history}>
                <Navbar />
            </Router>
        );

        links.map((link) => {
            expect(queryByText(link)).toBeInTheDocument();
        });
    });
});
