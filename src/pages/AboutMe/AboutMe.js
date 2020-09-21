import React from 'react';

import RegularTitle from '../../components/UI/RegularTitle/RegularTitle';
import { AboutMeContainer, Introduction } from './styled';

const AboutMe = () => {

    return(
        <AboutMeContainer>
            <RegularTitle content={'Hello'} maxFontSize={'52'} minFontSize={'30'} />
            <Introduction>
                <p>
                    I have worked on many projects with different technologies
                     and frontend tools ( React.js, React Native, Javascript, 
                     Modern React, Redux, Jest Enzyme Test, Node.js, Npm, 
                     Express.js, Yarn, HTML5, CSS3, Sass, Material-UI, 
                     Styled-components, FlexBox, Atomic Design Components). 
                </p>
            </Introduction>
        </AboutMeContainer>
    )
}

export default AboutMe