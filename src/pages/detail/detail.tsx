import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'

import { iGood } from '../../components/good-list/types'

import goodsJSON from '../../stub/goods.json'

import { StyledDetail } from './style'


export function Detail(){

    const { id } = useParams()
    const [ good, setGood ] = useState({
        TITLE: '',
        DISCR: '',
        PRICE: '', 
        IMG: '',
        COUNT: '', 
    })

    useEffect(()=>{
        const good = goodsJSON.find((good: iGood) => 
            good.ID === id
        ) as iGood

        setGood(good)
    }, [])

    return <StyledDetail>
        <img src={good.IMG}/>
        <h1>{good.TITLE}</h1>
        <h2>{good.DISCR}</h2>
        <span>{good.COUNT} штук на складе</span>
        <div>{good.PRICE} Р/шт</div>
    </StyledDetail>
}