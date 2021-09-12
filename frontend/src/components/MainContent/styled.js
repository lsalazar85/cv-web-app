import styled from 'styled-components';
import { fadeIn } from '../../styles/animation';

const MainContentContainer = styled.main`
    display: flex;
    flex: 2;
    height: 100%;
    overflow: auto;
    scrollbar-width: thin;    
    scrollbar-color: rgba(136, 136, 136, 0.15) transparent;
    ${fadeIn({time: '400ms'})};

    &::-webkit-scrollbar {
        width:  5px;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(136, 136, 136, 0.15);
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    @media (min-width: 320px){
        background: #1c1c1c;
        padding: 15px;
    }

    @media (min-width: 992px){
        background: transparent;
        padding: 32px;
        max-width: 624px;
    }
`

export { MainContentContainer }