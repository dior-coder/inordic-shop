import styled, { css } from 'styled-components'

export const StyledItem = styled.div<any>`
    display: flex;
    align-items: center;
    border: 1px solid #dadce0;
    max-width: 90%;
    margin: 10px auto;
    border-radius: 10px;
    margin-left: 10px;
    position: relative;
    &:hover{
        box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
    }
    img{
        max-height: 200px;
    }
`