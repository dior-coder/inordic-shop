import styled from 'styled-components'

export const StyledButtons = styled.div`
   display: flex;
   a{
        display: flex;
        align-items: center;
        margin: 3px;
        border: 1px solid #2a284f;
        color: white;
        text-decoration: none;
        background: #2a284f;
        padding: 3px;
        cursor: pointer;
        &:hover{
            background: #fdc931;
            color: white;
        }
   }
   button{
        padding: 3px;
        margin: 3px;
        color: white;
        border: 1px solid #2a284f;
        background: #2a284f;
        cursor: pointer;
        &:hover{
            background: #fdc931;
            color: white;
        }
   }
`