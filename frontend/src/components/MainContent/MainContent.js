import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AboutMe from '../../pages/AboutMe'
import Contact from '../../pages/Contact'
import Education from '../../pages/Education'
import WorkExperience from '../../pages/WorkExperience'

import { MainContentContainer } from './styled'

const MainContent = () => (
  <Switch>
    <MainContentContainer>
      <Route exact path="/" render={() => <AboutMe />} />
      <Route path="/contact" render={() => <Contact />} />
      <Route path="/work-experience" render={() => <WorkExperience />} />
      <Route path="/education" render={() => <Education />} />
    </MainContentContainer>
  </Switch>
)

export default MainContent
