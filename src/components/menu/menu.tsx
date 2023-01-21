import { type } from "os";
import React from "react";
import { Link } from "react-router-dom";
import { buttonsAndLinks } from "./i-menu";
import { iMenu } from "./i-menu";
import { StyledMenu } from "./menu-style";
import { StyledList } from "./menu-style";

export function Menu({menu: {buttons, links}} : iMenu){
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