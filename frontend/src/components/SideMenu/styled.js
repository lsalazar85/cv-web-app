import styled from 'styled-components'

const SideMenuContainer = styled.aside`
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) {
    padding: 0 15px;
  }
  @media (min-width: 992px) {
    padding: 0 32px;
  }
`
const SideIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.position};
  align-items: center;
  height: 100vh;
  color: #ffffff;

  &:last-child {
    height: auto;
    padding-bottom: 32px;
  }

  svg {
    cursor: pointer;
    color: #ffffff;
    opacity: 0.95;
    transition: 0.25s;

    &:hover {
      color: #3dba7d;
      opacity: 1;
    }

    @media (min-width: 320px) {
      width: 1.7em;
      height: 1.7em;
    }
    @media (min-width: 992px) {
      width: 2em;
      height: 2em;
    }
  }

  a.active {
    svg {
      color: #3dba7d;
      transform: scale(1.2);
    }
`

const SideIconListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`

const SideIconList = styled.li`
  margin-bottom: 45px;
  &:last-child{margin-bottom: 0;}
`

const DownloadLink = styled.a`
    display: flex;
`

export { SideMenuContainer, SideIcons, SideIconListWrapper, SideIconList, DownloadLink }

