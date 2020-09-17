import React from 'react';
import { render, cleanup } from '@testing-library/react';

import SideMenu from '../../../components/SideMenu';

describe('SideMenu', () => {
    afterEach(cleanup);

    test('should render correctly', () => {
        const { asFragment } = render(
          <SideMenu />
        );
    
        expect(asFragment()).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    });

})