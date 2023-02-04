import { createSlice } from '@reduxjs/toolkit'


import { iGood } from '../../../components/good-list/types' 
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
          const { operation, good } = action.payload       
          // Что нужно, чтобы изменить количество товара в корзине?
          // Поличить символ операции
          const flteredBasket = state.basket.filter((goodInState: iGood) => {
            //Если ID Передоваемого товара, совпал с тем, что мы ищем в массиве товаров, которые находятся в корзине
            if(goodInState.ID === good.ID){
                //Проверить тип операции
                if(operation === '+'){
                  goodInState.COUNT_IN_BASKET = goodInState.COUNT_IN_BASKET + 1
                }else{
                  goodInState.COUNT_IN_BASKET = goodInState.COUNT_IN_BASKET - 1
                }
            }
            return goodInState
          })

          state.basket = flteredBasket
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
          let switcher = false 
           //Проверяем6 есть ли в корзине, элмент, с такимже ID
           //Доработать на 52 занятии
           state.basket.map( (good: iGood) => {
              if(good.ID === action.payload.ID){
                good.COUNT_IN_BASKET = good.COUNT_IN_BASKET + 1
                switcher = true
              }
           }) 

           action.payload.COUNT_IN_BASKET = 1
           
           if(!switcher)
            state.basket.push(action.payload) 
           
           //Помимо, просто добавления товара, так нужно добовлять поле количество (По умолчанию поле будет 1)

        })
        .addCase('GET_ALL_GOOD', (state, action: iPayload) => {
          console.log('Сработал addCase GET_ALL_GOOD extraReducers')
          state.list = action.payload
        })
      },
});