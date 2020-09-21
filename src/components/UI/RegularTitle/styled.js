import styled from 'styled-components'

const H2 = styled.h2`
    color: #ffffff;
    font-weight: 700;
    font-size: ${props => `calc(${props.minFontSize}px + (${props.maxFontSize} - ${props.minFontSize}) * ((100vw - 300px) / (1600 - 300)))`}
`

export { H2 };