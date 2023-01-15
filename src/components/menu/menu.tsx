import React from "react";

interface iMenu3{
    icon: string
    text: string
    link: string
}

/* 
interface iMenu2{
    buttons : [iMenu3]
    links : [iMenu3]
}

interface iMenu{
    menu: iMenu2
}
*/

export function Menu({menu: {buttons, links}} : any){
    return (
        <>

        <div>
            {
                links.map((link : any) => <>{link.text}</>)
            }
        </div>

        <div>
            {
                buttons.map((button : any) =>   <>{button.text}</>)
            }
        </div>

        </>
    )
}