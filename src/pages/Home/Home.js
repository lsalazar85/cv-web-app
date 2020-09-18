import React from 'react';

import MainContent from '../../components/MainContent/MainContent';
import SideMenu from '../../components/SideMenu/SideMenu';
import Person from '../../components/Person';

import { HomeContainer, HomeContent, Side } from './styled';

const Home = () => (
  <HomeContainer>
    <HomeContent>
      <SideMenu />
      <Side>
        <Person />
        <MainContent />
      </Side>
    </HomeContent>
  </HomeContainer>
)

export default Home