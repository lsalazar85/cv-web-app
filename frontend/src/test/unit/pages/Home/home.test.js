import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Home from '../../../../pages/Home'

describe('Home', () => {
  afterEach(cleanup)

  test('should render correctly', () => {
    const { asFragment } = render(
      <Router>
        <Home />
      </Router>
    )

    expect(asFragment()).toBeDefined()
    expect(asFragment()).toMatchSnapshot()
  })
})
