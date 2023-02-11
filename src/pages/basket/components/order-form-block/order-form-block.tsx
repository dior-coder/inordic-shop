import React, {useRef} from 'react'

import { useSelectorTyped } from '../../../../generics/use-selector-typed'
import { IReduxGoodsState, } from '../../../../types/i-redux-goods-state'
import { iGoods } from '../../../../components/good-list/types'
import { telegramBot } from '../../../../utils/telegram-bot'

import { StyledForm, StyledInput } from './style'

export function OrderFormBlock(){


    //Забираем данные из редакса с помощью дженерика
    const basket: iGoods = useSelectorTyped<IReduxGoodsState, iGoods>(state => state.goods.basket) 

    //Описываем метод, который срабатывает при отправке формы (событие onSubmit)
    const sendOrderMessage = (event: any) => {
        event.preventDefault()

        //ДЗ Администратору, дополнительно телефон и почту

        const formObject = new FormData(event.target)
        
        const fio = formObject.get('fio')
        const tel = formObject.get('tel')
        const email = formObject.get('email')

        console.log('Отправляем данные')
        console.log(basket)
        console.log(fio)

        let textMessage = `Дорогой ${fio}, вы оформили заказ в iNordiShop! `

        basket.map(good => {
            //Формируем строку для отправки в телеграм бот
            textMessage += "Товар: " + good.TITLE
            textMessage += " в количестве: " + good.COUNT_IN_BASKET + ", "
        })

        telegramBot(textMessage)
    }

    return (
        <StyledForm onSubmit={(event) => sendOrderMessage(event)}>
            <h2>Форма для оформления заказа</h2>
            <StyledInput name='fio' placeholder="Введите ваше ФИО" />
            <StyledInput name='tel' placeholder="Введите ваш телефон" type='tel'/>
            <StyledInput name='email' placeholder="Введите ваш Email" type='email'/>
            <StyledInput value='Оставить заявку' type='submit'/>
        </StyledForm>
    )
}