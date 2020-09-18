import styled from 'styled-components'

const SideMenuContainer = styled.aside`
    display: flex;
    flex-direction: column;
    padding: 0 32px;
    @media (max-width: 992px){
        border-right: 1px solid #3dba7d;
        padding: 0 15px;
    }
`
const SideIcons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.position};
    align-items: center;
    height: 100vh;
    color: #ffffff;

    &:last-child{
        padding-bottom: ${props =>  props.position === 'flex-end' && '40px'}
    }

    svg {
        width: 2em;
        height: 2em;
        cursor: pointer;
        color: #ffffff;
        opacity: 0.95;
        transition: 0.25s;

        @media (max-width: 992px){
            width: 1.7em;
            height: 1.7em;
        }
        
        &:hover {
            color: #3dba7d;
            opacity: 1;
        }
    }

    a.active{
        svg {
            color: #3dba7d;
            transform: scale(1.20);
        }
    }

   ul {
        padding-top: 15em;
        @media (max-width: 992px){padding-top: 8em;}

        li {
            margin-bottom: 45px;

            &:last-child{
                margin-bottom: 0px;
            }
        }
   }
`


export { SideMenuContainer, SideIcons }