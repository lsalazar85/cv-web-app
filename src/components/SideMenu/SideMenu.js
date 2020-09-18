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
    { icon: <VscAccount />, url:'/' },
    { icon: <VscPinned />, url:'/address' },
    { icon: <VscBriefcase />, url:'/work-experience' },
    { icon: <VscBook />, url:'/education' },
]

const SideMenu = () => {
    return(
        <SideMenuContainer>
            <SideIcons position={'center'}>
                <ul>
                    { ICONS.map((item, index) => (
                        <li key={index}><NavLink exact to={item.url}>{item.icon}</NavLink></li>
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