import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiMailSendLine } from 'react-icons/ri'

import MyResume from '../../static/MyResume.pdf'

import {
  VscAccount,
  VscBriefcase,
  VscBook,
  VscCloudDownload,
} from 'react-icons/vsc'

import {
    SideMenuContainer,
    SideIcons,
    SideIconListWrapper,
    SideIconList,
    DownloadLink
} from './styled';

const ICONS = [
  { id: 1, icon: <VscAccount />, url: '/' },
  { id: 2, icon: <VscBook />, url: '/education' },
  { id: 3, icon: <VscBriefcase />, url: '/work-experience' },
  { id: 4, icon: <RiMailSendLine />, url: '/contact' },
]

const SideMenu = () => {
    return(
        <SideMenuContainer>
            <SideIcons position={'center'}>
                <SideIconListWrapper>
                    { ICONS.map(item => (
                        <SideIconList
                            key={item.id}>
                            <NavLink exact to={item.url}>
                                {item.icon}
                            </NavLink>
                        </SideIconList>
                    ))}
                </SideIconListWrapper>
            </SideIcons>
            <SideIcons position={'flex-end'} padddingBotton={32}>
                <DownloadLink href={MyResume} download="Luis_Salazar"><VscCloudDownload /></DownloadLink>
            </SideIcons>
        </SideMenuContainer>
    )
}

export default SideMenu
