import styled from 'styled-components';

const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const Introduction = styled.div`
    display: flex;
    flex-direction: column;
`

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;

    li {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 18px;
        

        @media (min-width: 320px){
            width: 33.33%;
        }

        @media (min-width: 768px){
            width: 25%;
        }

        svg{
            height: auto;

            @media (min-width: 320px){
                width: 50px;
            }

            @media (min-width: 768px){
                width: 60px;
            }
        }
    }
`

export { AboutMeContainer, Introduction, List}