import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainContent from '../../../../components/MainContent';

describe('MainContent', () => {
    afterEach(cleanup);

    test('should render correctly', () => {
        const { asFragment } = render(
          <Router>
            <MainContent />
          </Router>  
        );
        expect(asFragment()).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    });

})