import styled from 'styled-components';

const BoxNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: none;

    @media(min-width: 320px){
        padding: 15px 15px 15px 0;
        justify-content: flex-start;
        background: none;
    }

    @media(min-width: 992px) {
        flex: 1.5;
        padding: 0px;
        justify-content: space-between;
        background: #1c1c1c;
        padding: 0 0 32px 0;
    }
`

const BoxNameAvatar = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    @media(min-width: 320px){display:none;}
    @media(min-width: 992px){display:flex;}

`

const BoxNameContent = styled.div`
    display: flex;
    color: #ffffff;
    line-height: 1.17;

    @media(min-width: 320px) {
        flex-direction: row;
        justify-content: space-between;
    }

    @media (min-width: 992px) {flex-direction: column; align-items: center;}

    span {
        color: #00c483;
        margin: 24px 0;

        @media (min-width: 320px) {display: none; font-size: 18px;}
        @media (min-width: 992px) {display: block; font-size: 22px}
    }

    ul {
        display: flex;
        flex-direction: row;

        @media(min-width: 320px){margin-bottom: 0px;}

        li {
            margin-right: 16px;

            &:last-child {
                margin-right: 0px;
            }

           a {
                color: #ffffff;
                opacity: 0.95;
                transition: 0.25s;

                &:hover{
                    color: #00c483;
                    opacity: 1;
                }

                svg {
                    @media (min-width: 320px) {width: 1.4em; height: 1.4em;}
                    @media (min-width: 992px) {width: 1.8em; height: 1.8em;}
                }
           }
        }
    }
`

export { BoxNameContainer, BoxNameContent, BoxNameAvatar }