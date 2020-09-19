import React from 'react';
import { render, cleanup } from '@testing-library/react';

import App from '../../../App';

describe('App', () => {
  afterEach(cleanup);

  test('should render correctly', () => {
      const { asFragment } = render(
        <App />
      );
      expect(asFragment()).toBeDefined();
      expect(asFragment()).toMatchSnapshot();
  });

})