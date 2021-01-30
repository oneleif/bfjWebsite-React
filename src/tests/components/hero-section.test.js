import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import HeroSection from '../../components/HeroSection/HeroSection';

const INTRO_DESCRIPTION =
    'The Omaha chapter of Bread for the Journey helps make passion projects come to life that are intended to enrich the community.';
const INTRO_TEXT1 = 'We’re Part of';
const INTRO_TEXT2 = 'Something Big';

describe('Hero section test', () => {
    test('should render intro-text', () => {
        const { queryByText } = render(<HeroSection />);

        expect(queryByText(INTRO_DESCRIPTION)).toBeInTheDocument();
        expect(queryByText(INTRO_TEXT1)).toBeInTheDocument();
        expect(queryByText(INTRO_TEXT2)).toBeInTheDocument();
    });
});
