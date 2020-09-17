import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Home from '../../../../pages/Home';

describe('Home', () => {
    afterEach(cleanup);

    test('should render correctly', () => {
        const { asFragment } = render(
          <Home />
        );
    
        expect(asFragment()).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    });

})