import { iGoods } from '../components/good-list/types/i-goods'

export interface IReduxGoodsState {
    goods: {
        basket: iGoods,
        list: iGoods
    };
 }

