import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SideMenu from '../../../../components/SideMenu';

describe('SideMenu', () => {
    afterEach(cleanup);

    it('should render correctly', () => {
        const { asFragment } = render(
          <Router>
            <Route>
              <SideMenu />
            </Route>
          </Router>
        );
    
        expect(asFragment()).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    });

})