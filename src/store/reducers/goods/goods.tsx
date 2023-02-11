/**
 * Заглушка, чтобы редакс работал без ошибок
 */
import {createExtraActions} from '../../actions/goods'

export function createExtraReducers() {

    return {
        ...getAllGoods,
    };

    function getAllGoods() {
        
    }
}