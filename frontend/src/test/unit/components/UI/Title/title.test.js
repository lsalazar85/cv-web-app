import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Title from 'components/UI/Title';

describe('Title', () => {
    afterEach(cleanup);

    it('should render correctly with h1', () => {
        const { asFragment } = render(
            <Title h1 content={'Luis Salazar'} maxFontSize={'48'} minFontSize={'18'} />
        );
        expect(asFragment()).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render correctly with h2', () => {
        const { asFragment } = render(
            <Title h2 content={'Luis Salazar'} maxFontSize={'48'} minFontSize={'18'} />
        );
        expect(asFragment()).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    });
})