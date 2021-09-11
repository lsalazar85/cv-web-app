import styled from 'styled-components';

const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const ListWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

const List = styled.li`
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
`

const TextParagraph = styled.p`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`

export { AboutMeContainer, ListWrapper, List, TextParagraph}