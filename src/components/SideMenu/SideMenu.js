import React from 'react';
import {  NavLink } from 'react-router-dom';

import { 
    VscAccount, 
    VscCallOutgoing, 
    VscBriefcase,
    VscBook,
    VscCloudDownload
} from "react-icons/vsc";

import { SideMenuContainer, SideIcons } from './styled';

const SideMenu = () => {
    return(
        <SideMenuContainer>
            <SideIcons position={'center'}>
                <ul>
                    <li><NavLink exact to="/"><VscAccount /></NavLink></li>
                    <li><NavLink to="/personal-info"><VscCallOutgoing /></NavLink></li>
                    <li><NavLink to="/work-experience"><VscBriefcase /></NavLink></li>
                    <li><NavLink to="/education"><VscBook /></NavLink></li>
                </ul>
            </SideIcons>
            <SideIcons position={'flex-end'} padddingBotton={32}>
                <VscCloudDownload />
            </SideIcons>
        </SideMenuContainer>
    )
}

export default SideMenu