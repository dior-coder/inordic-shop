import { createSlice } from '@reduxjs/toolkit'

import { iPayload } from '../types' 
import { createInitialState } from '../../state/goods'
import { createExtraReducers } from '../../reducers/goods/goods'

const name = 'goods';

export const slice = createSlice({ 
    name, 
    initialState: createInitialState(),
    reducers: createExtraReducers(),
    extraReducers: (builder) => {
        builder
        .addCase('CHANGE_COUNT_GOOD_IN_BASKET', (state, action: iPayload) => {
          console.log('Сработал CHANGE_COUNT_GOOD_IN_BASKET')
          console.log(action)
        })
        .addCase('DEL_FROM_BASKET', (state, action: iPayload) => {
          console.log('Сработал addCase DEL_FROM_BASKET')
          //Получить, то что нужно удалить и преобразовать состояние корзины
          console.log('То что нужно удалить ', action)
          console.log('То что нужно изменить ', state.basket)
          const filteredBasket = state.basket.filter((good) => good.ID !== action.payload.ID)
          console.log('filteredBasket', filteredBasket)
          state.basket = filteredBasket
        })
        .addCase('ADD_TO_BASKET', (state, action: iPayload) => {
           console.log('Сработал addCase ADD_TO_BASKET extraReducers')
           action.payload.COUNT_IN_BASKET = 1
           state.basket.push(action.payload) 
           //Помимо, просто добавления товара, так нужно добовлять поле количество (По умолчанию поле будет 1)

        })
        .addCase('GET_ALL_GOOD', (state, action: iPayload) => {
          console.log('Сработал addCase GET_ALL_GOOD extraReducers')
          state.list = action.payload
        })
      },
});