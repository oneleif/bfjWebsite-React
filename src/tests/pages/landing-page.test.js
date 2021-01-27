import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import LandingPage from '../../pages/Landing';

describe('Landing View Test', () => {
    test('Initial render', () => {
        const { queryByText } = render(<LandingPage />);
        expect(queryByText('Landing')).toBeInTheDocument();
    });
});
