import styled from 'styled-components'

const ImageContainer = styled.div`
    width: ${props => props.width};
    height: auto;
    
    img {
        width: 100%;
        height: auto;
        border-radius:${props => props.circular && '50%'};
    }
`

export { ImageContainer }