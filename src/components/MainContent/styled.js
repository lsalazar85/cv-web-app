import styled from 'styled-components';

const MainContentContainer = styled.div`

    @media (min-width: 320px){
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        flex-grow: 1;
        background: #1c1c1c;
    }
    
    @media(min-width: 992px) {
        background: transparent;
    }
`

export { MainContentContainer }