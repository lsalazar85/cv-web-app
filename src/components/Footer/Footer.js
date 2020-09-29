import React from 'react';
import { FaCode, FaReact } from "react-icons/fa";

import { FooterContainer } from './styled';

const Footer = () => (
    <FooterContainer>
       <span>
            Take a look at the code of this project
            <a rel="noopener noreferrer" target="_blank" href='https://github.com/lsalazar85/cv-web-app'>
                <FaReact /><FaCode />
            </a>
        </span>
    </FooterContainer>
)

export default Footer;