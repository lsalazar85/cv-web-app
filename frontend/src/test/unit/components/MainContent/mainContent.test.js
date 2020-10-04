import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

import MainContent from '../../../../components/MainContent';

describe('MainContent', () => {
    afterEach(cleanup);

    it('check render & navigating to home', () => {
        const history = createMemoryHistory();

        const { container, asFragment } = render(
          <Router history={history}>
            <MainContent />
          </Router>  
        );

        expect(container.innerHTML).toMatch('/')
        expect(asFragment()).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    });

    it('check render & navigating to work experience', () => {
      const history = createMemoryHistory()
      history.push('/work-experience')

      const { asFragment } = render(
        <Router history={history}>
          <MainContent />
        </Router>  
      );

      expect(history.location.pathname).toBe('/work-experience')
      expect(asFragment()).toBeDefined();
      expect(asFragment()).toMatchSnapshot();
    });

    it('check render & navigating to contact', () => {
      const history = createMemoryHistory()
      history.push('/contact')

      const { asFragment } = render(
        <Router history={history}>
          <MainContent />
        </Router>  
      );

      expect(history.location.pathname).toBe('/contact');
      expect(asFragment()).toBeDefined();
      expect(asFragment()).toMatchSnapshot();
    });

    it('check render & navigating to education', () => {
      const history = createMemoryHistory()
      history.push('/education')

      const { asFragment } = render(
        <Router history={history}>
          <MainContent />
        </Router>  
      );

      expect(history.location.pathname).toBe('/education');
      expect(asFragment()).toBeDefined();
      expect(asFragment()).toMatchSnapshot();
    });

})