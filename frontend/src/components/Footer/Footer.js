import React from 'react'
import { FaCode, FaReact } from 'react-icons/fa'

import { FooterContainer, FooterText, FooterLink } from './styled';

const Footer = () => (
    <FooterContainer>
       <FooterText>
            Take a look at the code of this project
            <FooterLink rel="noopener noreferrer" target="_blank" href='https://github.com/lsalazar85/cv-web-app'>
                <FaReact /><FaCode />
            </FooterLink>
        </FooterText>
    </FooterContainer>
)

export default Footer
