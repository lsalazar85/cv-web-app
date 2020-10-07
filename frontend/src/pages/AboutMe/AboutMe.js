import React from 'react';
import { FaGithub, FaNodeJs, FaJira, FaGitkraken } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiJest, SiLogitech, SiTypescript, SiSlack, SiStyledComponents } from "react-icons/si";

import { 
    DiJavascript1, 
    DiReact, 
    DiHtml5, 
    DiCss3, 
    DiSass, 
    DiLess, 
    DiBootstrap,
    DiNpm,
    DiApple,
    DiVisualstudio,
    DiTrello,
    DiMozilla,
    DiChrome,
    DiGoogleDrive,
    DiGit,
    DiMongodb,
    DiTerminal,
} from "react-icons/di";

import Title from 'components/UI/Title';
import Card from 'components/UI/Card';
import { AboutMeContainer, List } from './styled';

const ABOUT_ME  = {
    introduction: [
        {id:1, content: `I'm a Front End Developer with 5+ years of professional experience, 
            based in Buenos Aires - Argentina.`},
        {id:2, content: 'Professionally connected with the web development industry and information technology.'},
        {id:3, content: 'Building small and medium web apps with Javascript & React.js, features, animations, and coding interactive layouts.'},
        {id:4, content: 'Interested in the entire full-stack spectrum and working on ambitious projects with positive people.'},
    ],
}

const mySkills = [
    { id: 1, icon: <DiJavascript1 />},
    { id: 2, icon: <DiReact />},
    { id: 3, icon: <FaNodeJs />},
    { id: 4, icon: <DiNpm/>},
    { id: 5, icon: <GrGraphQl />},
    { id: 6, icon: <SiTypescript />},
    { id: 7, icon: <DiMongodb />},
    { id: 8, icon: <SiStyledComponents />},
    { id: 9, icon: <DiHtml5 />},
    { id: 10, icon: <DiCss3 />},
    { id: 11, icon: <DiSass />},
    { id: 12, icon: <DiLess />},
    { id: 13, icon: <DiBootstrap />},
    { id: 14, icon: <SiJest />},
    { id: 15, icon: <DiGit />},
]

const myTools = [
    { id: 1, icon: <DiApple />},
    { id: 2, icon: <DiVisualstudio />},
    { id: 3, icon: <DiChrome />},
    { id: 4, icon: <DiMozilla />},
    { id: 5, icon: <DiGoogleDrive />},
    { id: 6, icon: <FaGithub />},
    { id: 7, icon: <FaGitkraken />},
    { id: 8, icon: <DiTerminal />},
    { id: 9, icon: <DiTrello />},
    { id: 10, icon: <FaJira />},
    { id: 11, icon: <SiSlack />},
    { id: 12, icon: <SiLogitech />},
]


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
                <Title h2 content={'My Tools'} maxFontSize={'21'} minFontSize={'18'} />
                <List>
                    {
                       myTools.map(item => (
                           <li key={item.id}>{item.icon}</li>
                       )) 
                    }
                </List>
            </Card>
            <Card>
                <Title h2 content={'My Skills'} maxFontSize={'21'} minFontSize={'18'} />
                <List>
                    {
                       mySkills.map(item => (
                           <li key={item.id}>{item.icon}</li>
                       )) 
                    }
                </List>
            </Card>
            <Card>
                <Title h2 content={'Fun Facts'} maxFontSize={'21'} minFontSize={'18'} />
            </Card>
        </AboutMeContainer>
    )
}

export default AboutMe