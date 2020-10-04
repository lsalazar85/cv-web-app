import React, { Fragment } from 'react';

import { string, bool } from  'prop-types';

import { H1, H2 } from './styled';

const Title = ({ h1, h2, content, minFontSize, maxFontSize }) => (
    <Fragment>
        { h1 && <div><H1 minFontSize={minFontSize} maxFontSize={maxFontSize}>{content}</H1></div> }
        { h2 && <div><H2 minFontSize={minFontSize} maxFontSize={maxFontSize}>{content}</H2></div> }
    </Fragment>
)

Title.defaultProps = {
    h1: false,
    h2: false,
}

Title.propTypes = {
    h1: bool,
    h2: bool,
    content: string.isRequired,
    minFontSize: string.isRequired,
    maxFontSize: string.isRequired,
}


export default Title;