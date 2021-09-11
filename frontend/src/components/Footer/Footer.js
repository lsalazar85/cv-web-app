import React from 'react'
import { FaCode, FaReact } from 'react-icons/fa'

import { FooterContainer, FooterContent, FooterLink } from './styled'

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      Take a look at the code of this project
      <FooterLink
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/lsalazar85/cv-web-app"
      >
        <FaReact />
        <FaCode />
      </FooterLink>
    </FooterContent>
  </FooterContainer>
)

export default Footer
