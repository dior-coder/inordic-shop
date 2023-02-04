import { useSelector } from 'react-redux'

import { Item } from './components/item'
import { iGoods, iGood } from '../../components/good-list/types';

import { StyledBasket } from './style';

import { IReduxGoodsState, } from '../../types/i-redux-goods-state'

export function Basket(){

    //ДЗ Типизировать basket
    const basket: iGoods = useSelector<IReduxGoodsState, iGoods>(state => state.goods.basket) 

    return (
        <StyledBasket>
            <h1>Корзина</h1>
            {
                basket.map((item: iGood) => 
                    <Item key={`id_${item.ID}`} {...item}/>
                )
            }
        </StyledBasket>
    )
}