// Метод createExtraActions отвечает за создание действий, оторые будут происходить с товарами и возвращать их
import { createAsyncThunk } from '@reduxjs/toolkit';

export function createExtraActions() {

    return {
        addToBasket,
        getAllGoods: getAllGoods(),
        delFromBasket,
        changeCountGoodInBasket,
    };    

    //Метод для добавления товаров в корзину
    function addToBasket(good: any) {
      return {
        type: 'ADD_TO_BASKET',
        payload: {...good},
      };
    }

    //Метод для удаления товара из корзины
    function delFromBasket(good: any){
        //Внутри действия преобразим массив с элементами в корзине
        return {
           type: 'DEL_FROM_BASKET',
           payload: good
        }
    }

    //Метод дл изменения количества товаров в корзине
    function changeCountGoodInBasket(operation: string, good: any){
        //Передаем товар и операция, для изменения счетчика в корзине
        return {
            type: "CHANGE_COUNT_GOOD_IN_BASKET",
            payload: {
              operation,
              good,
            }   
        }
    }

    //Метод для ПЕРВОНАЧАЛЬНОЙ загрузки товаров с сервера
    /*
    function getAllGoods(){
      //Запрос к серверу
      fetch('http://localhost:3001/goods/get')
      .then((response) => {
          //После запроса, перерабатываем ответ в формат JSON и возвращаем
          return response.json()
      })
      //data - это то что мы вернули в прошлом блоке then (response.json())
      .then(data => {

        console.log(data)
        return {
          type: 'GET_ALL_GOOD',
          payload: [...data]
        }

      })

      //console.log(data)
      return {
        type: 'GET_ALL_GOOD',
        payload: []
      }
      }
      */

      function getAllGoods() {
        return createAsyncThunk<any>(
          'getAllGoods',
            //response ответ от сервера
            async (data: any) => {
                const response = await fetch(`http://localhost:3001/goods/get`).then( (response) => response.json())
                console.log(response)
                return response
            }
        );
      }   
    
}