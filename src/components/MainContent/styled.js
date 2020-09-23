import styled from 'styled-components';

const MainContentContainer = styled.div`
    display: flex;
    flex: 2;
    height: 100%;

    @media (min-width: 320px){
        background: #1c1c1c;
        padding: 15px;
    }

    @media (min-width: 992px){
        background: transparent;
        padding: 32px;
    }
`

export { MainContentContainer }