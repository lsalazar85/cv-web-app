import React from 'react';
import {  NavLink } from 'react-router-dom';

import { 
    VscAccount, 
    VscPinned, 
    VscBriefcase,
    VscBook,
    VscCloudDownload
} from "react-icons/vsc";

import { SideMenuContainer, SideIcons } from './styled';

const ICONS = [
    { id: 1, icon: <VscAccount />, url:'/' },
    { id: 2, icon: <VscPinned />, url:'/address' },
    { id: 3, icon: <VscBriefcase />, url:'/work-experience' },
    { id: 4, icon: <VscBook />, url:'/education' },
]

const SideMenu = () => {
    return(
        <SideMenuContainer>
            <SideIcons position={'center'}>
                <ul>
                    { ICONS.map(item => (
                        <li key={item.id}><NavLink exact to={item.url}>{item.icon}</NavLink></li>
                    ))}
                </ul>
            </SideIcons>
            <SideIcons position={'flex-end'} padddingBotton={32}>
                <VscCloudDownload />
            </SideIcons>
        </SideMenuContainer>
    )
}

export default SideMenu