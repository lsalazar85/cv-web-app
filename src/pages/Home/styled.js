import styled from 'styled-components'

const HomeContainer = styled.div`
    @media (min-width: 320px){
        display: flex;
        flex-direction: column; 
        align-items: center;
        justify-content: center;
        background: #0a0000;
        color: #888888;
        height: 100vh;
    }
`
const HomeContent = styled.div`
    @media (min-width: 320px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-radius: 5px;
        background: #1d1f21;
        max-height: 100%;
        max-width: 100%;
        width: 100%; 
        height: 100%;
    }
    @media (min-width: 992px){width: 90%; height: 90%;}
    @media (min-width: 1100px){width: 1140px;}    
`

const Side = styled.div`
    @media (min-width: 320px){
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        flex-grow: 1;
    }
    @media (min-width: 992px){flex-direction: row;}
`

export { HomeContainer, HomeContent, Side }