import styled from 'styled-components';

const MainContentContainer = styled.div`
    display: flex;
    flex: 2;
    height: 100%;
    overflow: auto;
    text-align: justify;
    scrollbar-width: thin;    
    scrollbar-color: rgba(136, 136, 136, 0.15) transparent;

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
    }

    p {
        margin-bottom: 16px;

        &:last-child {
            margin-bottom: 0px;
        }
    }
`

export { MainContentContainer }