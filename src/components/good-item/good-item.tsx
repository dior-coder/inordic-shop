import { Link } from 'react-router-dom'

import { StyledDiscription, StyledImg, StyledTitle, StyledButtons } from './style'
import { iGood } from '../good-list/types'
import { useAppDispatch } from '../../store'
import { createExtraActions } from '../../store/actions/goods'

export function GoodItem(data: iGood){

    const { addToBasket } = createExtraActions() 
    const dispatch = useAppDispatch()

    return (
        <> 
            <StyledImg src={data.IMG} />
            <StyledTitle>
                {data.TITLE}
            </StyledTitle>
            <StyledDiscription>
                {data.DISCR}
            </StyledDiscription>
            <StyledButtons>
                <button onClick={ () => dispatch( addToBasket(data) ) }>
                    Добавить в корзину
                </button>
                <Link to={`/goods/${data.ID}`}>
                    Подробнее
                </Link>
            </StyledButtons>
        </>
    )
}