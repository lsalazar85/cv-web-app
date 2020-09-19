import styled from 'styled-components';

const PersonContainer = styled.div`
    display: flex;  
    flex-direction: column;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 0.95;
    transition: 0.25s;
    
    @media(min-width: 320px){
        width: 100%;
        padding: 10px;
        justify-content: flex-start;
        background-image: none; 
    }

    @media(min-width: 992px) {
        width: 300px;
        padding: 0px;
        justify-content: flex-end;
        background-image: url('https://w5.foxdsgn.com/niko/black/wp-content/uploads/sites/4/2019/03/niko_img.jpg');
    }

    @media(min-width: 1100px) { width: 480px; }
`
const PersonName = styled.div`
    display: flex; 
    color: #ffffff;
    line-height: 1.17;

    @media(min-width: 320px) {
        flex-direction: row;
        justify-content: space-between;
    }
    
    @media (min-width: 992px) {flex-direction: column; align-items: center;}

    h2 {
        font-size: calc(18px + (48 - 18) * ((100vw - 300px) / (1600 - 300)));
        margin-bottom: 0px; 
    }

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
        @media(min-width: 992px){margin-bottom: 24px;}

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

export { PersonContainer, PersonName }