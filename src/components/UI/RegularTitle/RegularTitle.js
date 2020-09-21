import React from 'react';
import { string } from  'prop-types';

import { H2 } from './styled';

const RegularTitle = ({ content, minFontSize, maxFontSize }) => (
    <div><H2 minFontSize={minFontSize} maxFontSize={maxFontSize}>{content}</H2></div>
)

RegularTitle.propTypes = {
    content: string.isRequired,
    minFontSize: string.isRequired,
    maxFontSize: string.isRequired,
}


export default RegularTitle;