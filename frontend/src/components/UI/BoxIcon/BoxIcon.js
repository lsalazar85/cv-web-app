import React from 'react';
import { string , object } from 'prop-types'
import { BoxIconContainer, BoxIconDescription, BoxIconImage } from './styled';

const BoxIcon = ({ icon, description }) => (
    <BoxIconContainer>
        <BoxIconImage>{icon}</BoxIconImage>
        <BoxIconDescription>{description}</BoxIconDescription>
    </BoxIconContainer>
)

BoxIcon.propTypes = {
    icon: object.isRequired,
    description: string.isRequired,
}

export default BoxIcon;