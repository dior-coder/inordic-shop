import styled, { css } from 'styled-components'
import {iStyledList} from '../types'

export const StyledList = styled.ul<iStyledList>`
    list-style: none;
    display: flex;
    li{
        margin: 0 3px;
        border-bottom: 1px solid white;
        margin-right: ${prop => prop.type === 'buttons' ? "25px" : "5px"};

        &:hover {
            border-bottom: 1px solid #fdc931;  
        }

        a {
            text-decoration: none;
            ${props => props.type === 'buttons' ? css`
                    color: #2a284f; 
                    background: white;
                    border: 1px solid white;  
                    border-radius: 5px;  
                    padding: 5px; 
                `: css`
                    color: white
                `
            }
        }
        
    }
`