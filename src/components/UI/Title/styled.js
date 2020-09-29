import styled from 'styled-components'

const H1 = styled.h1`
    color: #ffffff;
    font-weight: 700;
    font-size: ${props => `calc(${props.minFontSize}px + (${props.maxFontSize} - ${props.minFontSize}) * ((100vw - 300px) / (1600 - 300)))`};
`

const H2 = styled.h2`
    color: #ffffff;
    font-weight: 700;
    font-size: ${props => `calc(${props.minFontSize}px + (${props.maxFontSize} - ${props.minFontSize}) * ((100vw - 300px) / (1600 - 300)))`};
    margin: 24px 0;
    display: inline-block;
    position: relative;
    padding-bottom: 7px;

    &:before {
        display: block;
        position: absolute;
        content: '';
        width: 100%;
        background-color: #353535;
        height: 2px;
        bottom: 0;
    }

    &:after {
        display: block;
        position: absolute;
        content: '';
        width: 30px;
        background-color: #00c483;
        height: 2px;
        bottom: 0;
    }
`

export { H1, H2 };