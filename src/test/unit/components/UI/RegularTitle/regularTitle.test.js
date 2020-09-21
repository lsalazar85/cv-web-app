import React from 'react';
import { render, cleanup } from '@testing-library/react';

import RegularTitle from '../../../../../components/UI/RegularTitle';

describe('RegularTitle', () => {
    afterEach(cleanup);

    it('should render correctly', () => {
        const { asFragment } = render(
            <RegularTitle content={'Luis Salazar'} maxFontSize={'48'} minFontSize={'18'} />
        );
        expect(asFragment()).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    });
})