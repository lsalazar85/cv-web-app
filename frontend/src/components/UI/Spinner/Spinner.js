import React from 'react';

import Image from 'components/UI/Image';
import { SpinnerContainer } from './styled';

const Spinner = () => (
    <SpinnerContainer>
        <Image width={'50px'} alt={'Loaging'} src={'https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-3.jpg'} />
    </SpinnerContainer>
)

export default Spinner;