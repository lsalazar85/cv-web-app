import React from 'react'
import { string, object } from 'prop-types'
import {
  BoxIconContainer,
  BoxIconDescription,
  BoxIconImage,
  BoxIconTitle,
} from './styled'

const BoxIcon = ({ icon, description, title }) => (
  <BoxIconContainer>
    <BoxIconImage>{icon}</BoxIconImage>
    <BoxIconTitle>{title}</BoxIconTitle>
    <BoxIconDescription>{description}</BoxIconDescription>
  </BoxIconContainer>
)

BoxIcon.propTypes = {
  icon: object.isRequired,
  description: string.isRequired,
  title: string.isRequired,
}

export default BoxIcon
