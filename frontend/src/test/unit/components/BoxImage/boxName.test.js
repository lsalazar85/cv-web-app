import React from 'react';
import { render, cleanup } from '@testing-library/react';

import BoxName from '../../../../components/BoxName/BoxName';

describe('BoxName', () => {
    afterEach(cleanup);

    it('should render correctly', () => {
        const { asFragment } = render(
          <BoxName />
        );
        expect(asFragment()).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    });

})