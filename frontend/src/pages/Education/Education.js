import React from 'react';

import { EducationContainer } from './styled';
import Title from '../../components/UI/Title';

const Education = () => {

  return (
    <EducationContainer>
      <Title h1 content={'Education'} maxFontSize={'52'} minFontSize={'30'} />
    </EducationContainer>
  );
}

export default Education;
