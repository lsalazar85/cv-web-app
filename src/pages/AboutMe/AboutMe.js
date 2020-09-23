import React from 'react';

import Title from '../../components/UI/Title';
import Separator from '../../components/UI/Card';
import { AboutMeContainer, Introduction } from './styled';

const AboutMe = () => {

    return(
        <AboutMeContainer>
            <Title h1 content={'Hello Everyone!'} maxFontSize={'52'} minFontSize={'30'} />
            <Introduction>
                <p>
                    I have worked on many projects with different technologies
                     and frontend tools ( React.js, React Native, Javascript,
                     Modern React, Redux, Jest Enzyme Test, Node.js, Npm,
                     Express.js, Yarn, HTML5, CSS3, Sass, Material-UI,
                     Styled-components, FlexBox, Atomic Design Components).
                </p>
            </Introduction>
            <Separator />
            <Title h2 content={'What I Do'} maxFontSize={'21'} minFontSize={'18'} />
        </AboutMeContainer>
    )
}

export default AboutMe