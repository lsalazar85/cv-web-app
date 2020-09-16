import React from 'react';

import Experience from '../../components/Experience';
import Education from '../../components/Education';
import Dates from '../../components/Dates';

import { HomeContainer, HomeContent } from './styled';

const Home = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <Experience />
        <Education />
        <Dates />
      </HomeContent>
    </HomeContainer>
  );
}

export default Home