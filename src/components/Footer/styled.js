import styled from 'styled-components';

const FooterContainer = styled.footer`
    
    @media (min-width: 320px){
        display: flex;
        flex-direction: row;
        display: none;
        position: absolute;
        bottom: 1.5%;

        span {
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            font-size: 11px;

            svg {
                margin-left: 3px;

                &:first-child {
                    color: #64d1ee;
                }

                &:last-child {
                    color: #6e5493;
                    margin-top: 3px;
                }
            }
        }
    }
    
    @media (min-width: 992px){display: block;}
`

export { FooterContainer };