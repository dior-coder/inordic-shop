import styled from "styled-components"

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
            &:hover{
                border-radius: 1px solid #fdc931;
            }
        a{
            color: unset;
            text-decoration: none;
            color: ${prop => prop.type === 'buttons' ? '#2a284f' : null};
            background: ${prop => prop.type === 'buttons' ? 'white' : null};
            border: ${prop => prop.type === 'buttons' ? '1px solid white' : null};
            border-radius: ${prop => prop.type === 'buttons' ? '5px' : null};
            padding: ${prop => prop.type === 'buttons' ? '5px' : null};
        }
        margin-right: ${prop => prop.type === 'buttons' ? '25px' : '5px'};
        }
        `