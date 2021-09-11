import React from 'react';
import { FaGithub, FaNodeJs, FaJira, FaGitkraken, FaVuejs, FaLaptopCode } from "react-icons/fa";
import { SiJest, SiLogitech, SiTypescript, SiSlack, SiStyledComponents, SiWebstorm } from "react-icons/si";
import { IoLogoGameControllerB, IoIosBeer, IoIosBicycle, IoIosBasketball, IoIosRocket } from 'react-icons/io';

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
    DiTrello,
    DiMozilla,
    DiChrome,
    DiGoogleDrive,
    DiGit,
    DiMongodb,
    DiTerminal,
} from "react-icons/di";

import { MdDevicesOther } from 'react-icons/md';
import { TiPencil } from 'react-icons/ti';

import Title from '../../components/UI/Title';
import Card from '../../components/UI/Card';
import BoxIcon from '../../components/UI/BoxIcon';
import { BoxIconList } from '../../components/UI/BoxIcon/styled';
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

const MY_SKILLS = [
    { id: 1, icon: <DiJavascript1 />},
    { id: 2, icon: <DiReact />},
    { id: 3, icon: <FaNodeJs />},
    { id: 4, icon: <DiNpm/>},
    { id: 8, icon: <SiStyledComponents />},
    { id: 9, icon: <DiHtml5 />},
    { id: 10, icon: <DiCss3 />},
    { id: 11, icon: <DiSass />},
    { id: 12, icon: <DiLess />},
    { id: 13, icon: <DiBootstrap />},
    { id: 14, icon: <SiJest />},
    { id: 15, icon: <DiGit />},
]

const ALTERNATIVES_SKILLS = [
    { id: 1, icon: <FaVuejs />},
    { id: 2, icon: <SiTypescript />},
    { id: 3, icon: <DiMongodb />},
]

const MY_TOOLS = [
    { id: 1, icon: <DiApple />},
    { id: 2, icon: <SiWebstorm />},
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

const WHAT_I_DO = [
    {id: 1, icon: <FaLaptopCode />, title: 'Custom Web Apps', description: 'I develop dedicated applications with an efficient and functional front-end.'},
    {id: 2, icon: <TiPencil />, title: 'UX/UI Analysis', description: 'I develop dedicated applications with an efficient and functional front-end.'},
    {id: 3, icon: <IoIosRocket />, title: 'Advance Development', description: 'I develop dedicated applications with an efficient and functional front-end.'},
    {id: 4, icon: <MdDevicesOther />, title: 'Multi Devices', description: 'I develop dedicated applications with an efficient and functional front-end.'},
]

const FUN_FACTS = [
    {id: 1, icon: <IoLogoGameControllerB /> },
    {id: 2, icon: <IoIosBeer /> },
    {id: 3, icon: <IoIosBicycle /> },
    {id: 4, icon: <IoIosBasketball /> },
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
                <BoxIconList>
                    {
                        WHAT_I_DO && WHAT_I_DO.map(item => (
                            <BoxIcon key={item.id} icon={item.icon} title={item.title} description={item.description} />
                        ))
                    }
                </BoxIconList>
            </Card>
            <Card>
                <Title h2 content={'My Tools'} maxFontSize={'21'} minFontSize={'18'} />
                <List>
                    {
                        MY_TOOLS.map(item => (
                           <li key={item.id}>{item.icon}</li>
                       )) 
                    }
                </List>
            </Card>
            <Card>
                <Title h2 content={'Main Skills'} maxFontSize={'21'} minFontSize={'18'} />
                <List>
                    {
                        MY_SKILLS.map(item => (
                           <li key={item.id}>{item.icon}</li>
                       )) 
                    }
                </List>
            </Card>
            <Card>
                <Title h2 content={'Alternative Technologies'} maxFontSize={'21'} minFontSize={'18'} />
                <List>
                    {
                        ALTERNATIVES_SKILLS.map(item => (
                            <li key={item.id}>{item.icon}</li>
                        ))
                    }
                </List>
            </Card>
            <Card>
                <Title h2 content={'My Hobbies'} maxFontSize={'21'} minFontSize={'18'} />
                <List>
                    {
                        FUN_FACTS.map(item => (
                            <li key={item.id}>{item.icon}</li>
                        ))
                    }
                </List>
            </Card>
        </AboutMeContainer>
    )
}

export default AboutMe