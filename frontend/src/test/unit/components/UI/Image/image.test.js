import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Image from '../../../../../components/UI/Image/Image'
import { MY_PHOTO } from '../../../../../constans'

describe('Image Component', () => {
  afterEach(cleanup)

  it('should render correctly', () => {
    const { asFragment } = render(
      <Image src={MY_PHOTO} alt={'Avatar Image'} width={'75%'} />
    )
    expect(asFragment()).toBeDefined()
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render correctly with circular prop', () => {
    const { asFragment } = render(
      <Image src={MY_PHOTO} alt={'Avatar Image'} width={'75%'} circular />
    )
    expect(asFragment()).toBeDefined()
    expect(asFragment()).toMatchSnapshot()
  })
})
