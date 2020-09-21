import React from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

import { MY_PHOTO } from '../../constans';
import Image from '../UI/Image/Image';
import { BoxNameContainer, BoxNameContent, BoxNameAvatar } from './styled';
import RegularTitle from '../UI/RegularTitle';

const SOCIAL_MEDIA = [
  { id: 1, icon: <FaInstagram />, url: 'https://www.instagram.com/lanzaroth.js/' },
  { id: 2, icon: <FaLinkedinIn/>, url: 'https://www.linkedin.com/in/lsalazar85/' },
  { id: 3, icon: <FaGithub />, url: 'https://github.com/lsalazar85' },
]

const BoxName = () => (
  <BoxNameContainer>
    <BoxNameAvatar>
      <Image src={MY_PHOTO} alt={'Avatar Image'} width={'80%'} circular />
    </BoxNameAvatar>
    <BoxNameContent>
      <RegularTitle content={'Luis Salazar'} maxFontSize={'48'} minFontSize={'18'} />
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
    </BoxNameContent>
  </BoxNameContainer>
);

export default BoxName;