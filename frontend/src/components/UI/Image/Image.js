import React from 'react'
import { string, bool } from 'prop-types'

import { ImageContainer } from './styled'

const Image = ({ width, alt, src, circular }) => (
  <ImageContainer width={width} circular={circular}>
    <img src={src} alt={alt} />
  </ImageContainer>
)

Image.defaultProps = {
  circular: false,
}

Image.propTypes = {
  width: string.isRequired,
  src: string.isRequired,
  alt: string.isRequired,
  circular: bool,
}

export default Image
