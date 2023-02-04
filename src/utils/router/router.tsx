import { 
    createBrowserRouter,
} from 'react-router-dom'

import {MainLayout} from '../../components/main-layout'
import {GoodList} from '../../components/good-list'
import {GoodItem} from '../../components/good-item'


import {Main} from '../../pages/main'
import {Basket} from '../../pages/basket'
import {Detail} from '../../pages/detail'
import { Auth } from '../../pages/email/auth'
import { Reg } from '../../pages/email/reg'
import { About } from '../../pages/about'


/**
 * Router - утилс который опредяет маршруты приложения
 * Маршруты:
 */
 export const Router = createBrowserRouter(
    [
        {
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <Main />,
                    children: [
                        {
                            index: true,
                            element: <GoodList />
                        },
                        {
                            path: '/goods/:id',
                            element: <Detail />
                        },
                        {
                            path: '/auth',
                            element: <Auth />
                        },
                        {
                            path: '/reg',
                            element: <Reg />
                        }
                        ,
                        {
                            path: '/about',
                            element: <About />
                        }
                        ,
                        {
                            path: '/basket',
                            element: <Basket />
                        }
                    ]
                },
                {
                    path: '/basket',
                    element: <Basket />
                }
            ]
        }
    ]
)