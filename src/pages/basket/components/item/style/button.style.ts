import styled, { css } from 'styled-components'

export const StyledButton = styled.button<any>`
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    ${props => props.action === 'del' && `
        position: absolute;
        top: -10px;
        right: 0px;
        height: 50px;
    `}
    img{
        width: 100%;
        height: 100%;
    }
`