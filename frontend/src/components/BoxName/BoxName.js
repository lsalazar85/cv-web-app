import React from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

import { MY_PHOTO } from '../../constans';
import Image from '../../components/UI/Image/Image';
import Title from '../../components/UI/Title';
import {
    BoxNameContainer,
    BoxNameContent,
    BoxNameAvatar,
    NameDeveloper,
    BoxNameListContent,
    BoxNameList,
    BoxNameLink
} from './styled';

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
      <Title h1 content={'Luis Salazar'} maxFontSize={'45'} minFontSize={'18'} />
      <NameDeveloper>Front End Developer</NameDeveloper>
      <BoxNameListContent>
        {
          SOCIAL_MEDIA.map(item => (
            <BoxNameList key={item.id}>
              <BoxNameLink rel="noopener noreferrer" href={item.url} target="_blank">{item.icon}</BoxNameLink>
            </BoxNameList>
          ))
        }
      </BoxNameListContent>
    </BoxNameContent>
  </BoxNameContainer>
);

export default BoxName;