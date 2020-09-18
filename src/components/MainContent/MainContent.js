import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AboutMe from '../AboutMe';
import InfoPersonal from '../InfoPersonal';
import Education from '../Education';
import WorkExperience from '../WorkExperience';

import { MainContentContainer } from './styled';

const MainContent = () => (
    <Switch>
        <MainContentContainer>
            <Route exact path="/" render={() => <AboutMe />}/>
            <Route path="/personal-info" render={() => <InfoPersonal />}/>
            <Route path="/work-experience" render={() => <WorkExperience />}/>
            <Route path="/education" render={() => <Education />}/>                                   
        </MainContentContainer>
    </Switch>  
)

export default MainContent