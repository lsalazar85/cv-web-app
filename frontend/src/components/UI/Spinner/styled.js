import styled from 'styled-components';
import { fadeIn } from '../../../styles/animation';

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #1d1f21;
    ${fadeIn({ time: '400ms' })};
`

export { SpinnerContainer }