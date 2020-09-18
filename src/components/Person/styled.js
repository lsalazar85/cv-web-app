import styled from 'styled-components'

const PersonContainer = styled.div`
    width: 480px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-image: url('https://w5.foxdsgn.com/niko/black/wp-content/uploads/sites/4/2019/03/niko_img.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 0.95;
    transition: 0.25s;

    @media(max-width: 1100px) {width: 300px;}

    @media(max-width: 992px) {
        background-image: none; 
        justify-content: flex-start;
        width: 100%;
        padding: 10px;
    }
`
const PersonName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    line-height: 1.17;

    @media (max-width: 992px){
        display: flex; 
        flex-direction: row;
        justify-content: space-between;
    }

    h2 {
        font-size: calc(18px + (48 - 18) * ((100vw - 300px) / (1600 - 300)));
        @media(max-width: 992px) {margin-bottom: 0px;}
    }

    span {
        color: #00c483;
        margin: 24px 0;
        font-size: 22px;
        @media(max-width: 992px) {display: none;}
        @media(max-width: 1100px) {font-size: 18px;}
    }

    ul {
        display: flex;
        flex-direction: row;
        margin-bottom: 24px;
        @media(max-width: 992px) {margin-bottom: 0px;}

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
                width: 1.8em;
                height: 1.8em;
                @media(max-width: 992px) {
                    width: 1.4em;
                    height: 1.4em;
                }
            }
           }
        }
    }
`

export { PersonContainer, PersonName }