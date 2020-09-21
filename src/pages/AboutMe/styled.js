import styled from 'styled-components';

const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const GreetingTitle = styled.h2`
    color: #ffffff;
    font-size: calc(28px + (60 - 28) * ((100vw - 300px) / (1600 - 300)));
` 

const Introduction = styled.div`
    display: flex;
`

export { AboutMeContainer, GreetingTitle, Introduction}