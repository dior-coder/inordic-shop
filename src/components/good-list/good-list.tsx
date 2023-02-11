
import { useEffect } from 'react'
import { StyledListLi, StyledListUl } from './style'

import { iGood } from './types'
import { GoodItem } from '../good-item'
import { goodsActions } from '../../store/slices/goods/goods';
import { useAppDispatch } from '../../store'

import { useSelectorTyped } from '../../generics/use-selector-typed'
import { IReduxGoodsState, iGoods } from './types'



/**
 * ДЗ
 * Применить тип для as, заменить any
 */

export function GoodList() : JSX.Element{

    const dispatch = useAppDispatch()
   
    // Вызвать getAllGoods один раз при загрузке компонента
    useEffect(()=> {
        dispatch(
            goodsActions.getAllGoods()
        )
    }, [])
    // Заставить редакс получить данные
    //`Запрос к данным из редакса
    const goods: iGoods = useSelectorTyped<IReduxGoodsState, iGoods>(state => state.goods.list)

    return (
        <StyledListUl>
            {
                goods.map((good: iGood, index: number) => 
                    (
                        <StyledListLi key={good.TITLE + index}>
                            <GoodItem {...good}/>
                        </StyledListLi>
                    )
                ) as any
            }
        </StyledListUl>
    )
}