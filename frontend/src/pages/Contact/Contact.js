import React from 'react';

import Title from 'components/UI/Title';
import { ContactContainer } from './styled';

const Contact = () => {
  return (
    <ContactContainer>
      <Title h1 content={'Contact'} maxFontSize={'52'} minFontSize={'30'} />
    </ContactContainer>
  );
}

export default Contact;