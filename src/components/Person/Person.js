import React from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

import { PersonContainer, PersonName } from './styled';

const SOCIAL_MEDIA = [
  { icon: <FaInstagram />, url: 'https://www.instagram.com/lanzaroth.js/' },
  { icon: <FaLinkedinIn/>, url: 'https://www.linkedin.com/in/lsalazar85/' },
  { icon: <FaGithub />, url: 'https://github.com/lsalazar85' },
]

const Person = () => {
  return (
    <PersonContainer>
      <PersonName>
        <h2>Luis Salazar</h2>
        <span>Front End Developer</span>
        <ul>
          {
            SOCIAL_MEDIA.map((item, index) => (
              <li key={index}>
              <a rel="noopener noreferrer" href={item.url} target="_blank">{item.icon}</a>                
              </li>
            )) 
          }
        </ul>
      </PersonName>
    </PersonContainer>
  );
}

export default Person;