import React from 'react';

import MainContent from '../../components/MainContent/MainContent';
import SideMenu from '../../components/SideMenu/SideMenu';

import { HomeContainer, HomeContent } from './styled';

const Home = () => (
  <HomeContainer>
    <HomeContent>
      <SideMenu />
      <MainContent />
    </HomeContent>
  </HomeContainer>
)

export default Home