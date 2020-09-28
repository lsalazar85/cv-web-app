import React from 'react';

import Title from '../../components/UI/Title';
import Separator from '../../components/UI/Card';
import { AboutMeContainer, Introduction } from './styled';

const ABOUT_ME  = {
    introduction: [
        {id: 1, content: `I'm a Front End Developer with 5+ years of professional experience, 
            based in Buenos Aires - Argentina.`},
        {id:2, content: 'Professionally connected with the web development industry and information technology.'},
        {id:3, content: 'Interested in the entire full-stack spectrum and working on ambitious projects with positive people.'},
    ],
    mySkills: [
        {content: `The main area of my expertise is front end development (client side of the web and SSR).
        Building small and medium web apps with Javascript & React.js, features, animations,
        and coding interactive layouts.`},
        {content: 'I have full-stack developer experience with Node.js, Express, MongoDB and GraphQl.'}
    ]
}

const AboutMe = () => {
    return(
        <AboutMeContainer>
            <Title h1 content={'Hello,'} maxFontSize={'52'} minFontSize={'30'} />
            <Introduction>
                {
                    ABOUT_ME && ABOUT_ME.introduction.map(item => (
                        <p key={item.id}>{item.content}</p>
                    ))
                }
            </Introduction>

            <Separator />
            <Title h2 content={'What I Do'} maxFontSize={'21'} minFontSize={'18'} />

            <Separator />
            <Title h2 content={'My Principal Tools'} maxFontSize={'21'} minFontSize={'18'} />

            <Separator />
            <Title h2 content={'My Skills'} maxFontSize={'21'} minFontSize={'18'} />
                {
                    ABOUT_ME && ABOUT_ME.mySkills.map(item => (
                        <p key={item.id}>{item.content}</p>
                    ))
                }
            <Separator />
            <Title h2 content={'Fun Facts'} maxFontSize={'21'} minFontSize={'18'} />
        </AboutMeContainer>
    )
}

export default AboutMe