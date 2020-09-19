import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Footer from '../../../../components/Footer';

describe('Footer', () => {
    afterEach(cleanup);

    test('should render correctly', () => {
        const { asFragment } = render(
          <Footer />
        );
        expect(asFragment()).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    });

})