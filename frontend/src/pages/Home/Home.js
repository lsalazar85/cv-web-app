import React from 'react'

import MainContent from '../../components/MainContent/MainContent'
import SideMenu from '../../components/SideMenu/SideMenu'
import BoxName from '../../components/BoxName'
import Footer from '../../components/Footer/Footer'

import { HomeContainer, HomeContent, Side } from './styled'

const Home = () => (
  <HomeContainer>
    <HomeContent>
      <SideMenu />
      <Side>
        <BoxName />
        <MainContent />
      </Side>
    </HomeContent>
    <Footer />
  </HomeContainer>
)

export default Home
