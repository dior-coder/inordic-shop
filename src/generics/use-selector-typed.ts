import { useSelector } from 'react-redux'

/**
 * Дженерик для хука селектора (утилита)
 * T и Y - в данной случае, являются абстрактными параметрами и могуть быть 
 * чем угодно, однако мы не можем обратится к нему, как к массиву, 
 * в этом случае, нужно заменить T на T[]
 * 
 * @param {any} T - это то, что мы передаем в пропс утилиты, данный тип мы используем, для типизации, входящих параметров
 * @param {any} Y - это то, что мы передаем в пропс утилиты, данный тип мы используем для типизации возвращаемого значения
 * @returns типизированный useSelector
 * 
 * Пример:
 * https://stackoverflow.com/questions/57472105/react-redux-useselector-typescript-type-for-state
 */
export function useSelectorTyped<T, Y>(fn: (state: T) => Y) {
    return useSelector(fn)
}