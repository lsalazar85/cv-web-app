import styled from 'styled-components'

const BoxIconList = styled.ul`
    display: flex;
    flex-direction: row;
`
const BoxIconContainer = styled.li`
    display: flex;
    flex-direction: column;
    width: 50%;
`
const BoxIconDescription = styled.div`
    display: flex;
`
const BoxIconImage = styled.div`
    display: flex;
`


export { BoxIconContainer, BoxIconList, BoxIconDescription,  BoxIconImage };