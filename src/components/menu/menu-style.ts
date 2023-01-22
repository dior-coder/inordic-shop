import styled , {css} from "styled-components"

export const StyledMenu = styled.div
        `
            font-size : 30px;
            background: #2a284f;
            color: #fff;
            display: flex;
            justify-content: space-between;
        li{
                list-style: none
            }

        `

        interface  iStyledList    {
            type?: string
          }

export const StyledList = styled.ul<iStyledList>
        `
            list-style: none;
            display : flex;

        li{
            margin: 0 3px;
            border-bottom: 1px solid white;
            margin-right: ${prop => prop.type === 'buttons' ? '30px' : '25px'};
            &:hover{
                border-radius: 1px solid #fdc931;
                box-shadow: rgba(240, 46, 170, 0.4) 
                5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 
                15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
            }
        a{
            text-decoration: none;
            ${props => props.type === 'buttons' ? css`
            color: #2a284;
            background: white;
            border: 1px solid white;
            border-radius: 5px;
            padding: 5px;
            `:css`
            color:white
            `
            }
        }
`