import { createSlice } from '@reduxjs/toolkit'


import { iGood } from '../../../components/good-list/types' 
import { iPayload } from '../types' 
import { createInitialState } from '../../state/goods'
import { createExtraReducers } from '../../reducers/goods/goods'
import { createExtraActions } from '../../actions/goods'

const extraActions: {
  getAllGoods: any, 
  addToBasket: any, 
  changeCountGoodInBasket: any,
  delFromBasket: any,
} = createExtraActions()

const name = 'goods';

export const slice = createSlice({ 
    name, 
    initialState: createInitialState(),
    reducers: createExtraReducers(),
    extraReducers: (builder) => {
        builder
        .addCase('CHANGE_COUNT_GOOD_IN_BASKET', (state, action: iPayload) => {
          console.log('Сработал CHANGE_COUNT_GOOD_IN_BASKET')

          //ДЗ, сделать сложение суммы и блок вывода этой общей суммы ( дз 52 занятия )

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

          //ДЗ, сделать сложение суммы и блок вывода этой общей суммы ( дз 52 занятия )

           console.log('Сработал addCase ADD_TO_BASKET extraReducers')
          // Мы ввели переменную switcher, для того, что бы определить, необходимо ли добавлять переданный товар в состояние корзины
          // По умолчанию, значение false, те добавляется товар в состояние корзины
          let switcher = false 
           //Перебираем состояние корзины в сторе
           state.basket.map( (good: iGood) => {
              //Если, находим в сторе корзины совпадение по ID
              //товара, который мы передали для добавление
              //с товарами, которые уже есть в корзине
              if(good.ID === action.payload.ID){
                //тогда, к товару, который уже есть в корзине, добавляем к его полю COUNT_IN_BASKET, единицу
                good.COUNT_IN_BASKET = good.COUNT_IN_BASKET + 1
                // дополнительно переменнной  switcher, устанавливаем значение TRUE
                switcher = true
              }
           }) 

           //По умолчанию, товар добавляемы в корзину, имеет значение количества = 1
           action.payload.COUNT_IN_BASKET = 1
           
           //Если в итоге, наш switcher равен false, то мы довляем переданный товар в корзину
           if(!switcher)
            state.basket.push(action.payload) 
           

        })
        /*
        Старый вариант получения всех товаров
        .addCase('GET_ALL_GOOD', (state, action: iPayload) => {
          console.log('Сработал addCase GET_ALL_GOOD extraReducers')
          state.list = action.payload
        })
        */
       .addCase(extraActions.getAllGoods.pending, (state, action: iPayload) => {
          console.log('action', action)
       })

      },
});