import { iGoods } from '../../../components/good-list/types'

export function createInitialState() {
    return {
        basket: [] as iGoods,
        list: [] as iGoods,
    }
}