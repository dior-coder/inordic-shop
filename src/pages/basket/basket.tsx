import { useSelectorTyped } from '../../generics/use-selector-typed'

import { Item, OrderFormBlock } from './components'

import { iGoods, iGood } from '../../components/good-list/types';
import { StyledBasket } from './style';
import { IReduxGoodsState, } from '../../types/i-redux-goods-state'
import { ReactNode } from 'react';

export function Basket(){

    const basket: iGoods = useSelectorTyped<IReduxGoodsState, iGoods>(state => state.goods.basket) 

    return (
        <StyledBasket>
            <h1>Корзина</h1>
            {
                basket.map((item: iGood) => 
                    <Item key={`id_${item.ID}`} {...item} />
                ) as JSX.Element[] | ReactNode
            }
            { basket.length > 0 ? <OrderFormBlock /> : 'Ваша корзина пуста' }
        </StyledBasket>
    )
}