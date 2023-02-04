import styled from 'styled-components'

export const StyledSearchInput = styled.div`
    text-align: center;
    div{

    }
    input{
        padding: 20px;
        border: none;
        font-size: 20px;
        border-bottom: 1px solid #dadce0;
        margin-bottom: 30px;
        &:active, :hover, :focus {
            outline: 0;
            outline-offset: 0;
            border-bottom: 1px solid black;
        }
    }
`