import React, {useState} from 'react'
//Импортируем в основной шабоон приложения меню
import {Menu} from '../menu/'
//Импортируем механизмы роутер дома
//Outlet - 
import {Outlet} from 'react-router-dom'

export function MainLayout(){

    const [menu, setMenu] = useState({
        links: [
            {
                text: 'Главная',
                link: '/'
            },
            {
                text: 'О нас',
                link: '/'
            },
            {
                text: 'Контакты',
                link: '/'
            }
        ],
        buttons: [
            {
                icon: 'https://img.icons8.com/fluency/512/full-recycle-bin.png',
                text: 'Корзина',
                link: '/basket'
            },
            {
                icon: 'https://img.icons8.com/fluency/512/full-recycle-bin.png',
                text: 'Авторизаия',
                link: '/auth'
            },
            {
                icon: 'https://img.icons8.com/fluency/512/full-recycle-bin.png',
                text: 'Регистрация',
                link: '/reg'
            }
        ]
    })

    return(
        <div>
            <header>
                <Menu menu={menu}/>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}