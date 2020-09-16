import styled from 'styled-components'

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    background: #0a0000;
    color: #888888;
    height: 100vh;
`
const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 1048px){
        width: 800px;
    }
`

export { HomeContainer, HomeContent }