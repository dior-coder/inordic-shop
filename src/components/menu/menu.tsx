import { type } from "os";
import React from "react";
import { Link } from "react-router-dom";
import { buttonsAndLinks , iMenu } from "./i-menu";
import { StyledMenu , StyledList} from "./menu-style";
import { GoodList } from '../good-list'

export function Menu({menu: {buttons, links}} : iMenu) : JSX.Element {
    return (
        <StyledMenu>

        <StyledList>
            {
                links.map((link : buttonsAndLinks, index: number) => 
                <li key={link.text + index}>
                    <Link to={link.link}>
                        {link.text}
                    </Link>
                </li>) //
            }
        </StyledList>

        <StyledList type='buttons'>
            {
                buttons.map((button : buttonsAndLinks, index: number) => 
                <li key={button.text + index}>
                <Link to={button.link}>

                    {button.text}

                    </Link>
                </li>) //
            }
        </StyledList>

        </StyledMenu>
    )
}