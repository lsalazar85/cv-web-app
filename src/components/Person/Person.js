import React from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

import { PersonContainer, PersonName } from './styled';

const SOCIAL_MEDIA = [
  { id: 1, icon: <FaInstagram />, url: 'https://www.instagram.com/lanzaroth.js/' },
  { id: 2, icon: <FaLinkedinIn/>, url: 'https://www.linkedin.com/in/lsalazar85/' },
  { id: 3, icon: <FaGithub />, url: 'https://github.com/lsalazar85' },
]

const Person = () => (
  <PersonContainer>
    <PersonName>
      <h2>Luis Salazar</h2>
      <span>Software Engineer</span>
      <ul>
        {
          SOCIAL_MEDIA.map(item => (
            <li key={item.id}>
              <a rel="noopener noreferrer" href={item.url} target="_blank">{item.icon}</a>                
            </li>
          )) 
        }
      </ul>
    </PersonName>
    </PersonContainer>
);

export default Person;