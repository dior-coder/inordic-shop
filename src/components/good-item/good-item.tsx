import React from "react"


export function GoodItem({data}: any){
    return(
        <>
        <img src={data.IMG}/>
        {data.TITLE}
        {data.DISCR}
        {data.PRICE}
        </>
    )
}