import React from 'react';

import Title from '../../components/UI/Title';
import Card from '../../components/UI/Card';
import { AboutMeContainer } from './styled';

const ABOUT_ME  = {
    introduction: [
        {id:1, content: `I'm a Front End Developer with 5+ years of professional experience, 
            based in Buenos Aires - Argentina.`},
        {id:2, content: 'Professionally connected with the web development industry and information technology.'},
        {id:3, content: 'Building small and medium web apps with Javascript & React.js, features, animations, and coding interactive layouts.'},
        {id:4, content: 'Interested in the entire full-stack spectrum and working on ambitious projects with positive people.'},
    ],
}

const AboutMe = () => {
    return(
        <AboutMeContainer>
            <Title h1 content={'Hello,'} maxFontSize={'52'} minFontSize={'30'} />
            <Card>
                {
                    ABOUT_ME && ABOUT_ME.introduction.map(item => (
                        <p key={item.id}>{item.content}</p>
                    ))
                }
            </Card>
            <Card>
                <Title h2 content={'What I Do'} maxFontSize={'21'} minFontSize={'18'} />
            </Card>
            
            <Card>
                <Title h2 content={'My Principal Tools'} maxFontSize={'21'} minFontSize={'18'} />
            </Card>

            <Card>
                <Title h2 content={'My Skills'} maxFontSize={'21'} minFontSize={'18'} />
            </Card>

            <Card>
                <Title h2 content={'Fun Facts'} maxFontSize={'21'} minFontSize={'18'} />
            </Card>
        </AboutMeContainer>
    )
}

export default AboutMe