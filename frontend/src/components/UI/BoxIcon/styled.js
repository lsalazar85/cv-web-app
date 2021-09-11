import styled from 'styled-components'

const BoxIconList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
`
const BoxIconContainer = styled.li`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    padding-right: 1.1rem;

    @media (min-width: 320px){flex: 0 0 100%;}
    @media (min-width: 992px){flex: 0 0 50%;}
`
const BoxIconDescription = styled.div`
    display: flex;
`
const BoxIconImage = styled.div`
    display: flex;
  
    svg {
        width: 45px;
        height: 45px;
    }
`

const BoxIconTitle = styled.h5`
    color: #ffffff;
    margin: 0.7rem 0;
    font-size: 1.2rem;
`


export { BoxIconContainer, BoxIconList, BoxIconDescription,  BoxIconImage, BoxIconTitle };