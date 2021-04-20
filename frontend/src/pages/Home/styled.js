import styled from 'styled-components'

const HomeContainer = styled.main`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    background: #0a0000;
    color: #888888;
    height: 100vh;
`
const HomeContent = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 5px;
    background: #1d1f21;
    max-height: 100%;
    max-width: 100%;

    @media (min-width: 320px) {width: 100%; height: 100%;}
    @media (min-width: 992px) {width: 90%; height: 90%;}
    @media (min-width: 1100px) {width: 1140px;}    
`

const Side = styled.section`
    display: flex;
    flex-grow: 1;
    
    @media (min-width: 320px) {flex-direction: column; align-items: space-between;}
    @media (min-width: 992px) {flex-direction: row; justify-content: space-between;}
`

export { HomeContainer, HomeContent, Side }