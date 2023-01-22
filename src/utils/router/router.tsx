import { 
    createBrowserRouter,
} from 'react-router-dom'
import { MainLayout } from '../../components/main-layout'
import { Main } from '../../pages/main'
import { GoodList } from '../../components/good-list'
import { Basket } from '../../pages/basket'
import { GoodItem } from '../../components/good-item'
/**
 * Router - утилс который опредяет маршруты приложения
 * Маршруты:
 * Основной - '/': Отображается компонент Main (Основная страница)
 * Товары - '/goods': Отображается компонент Goods (товары)
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
                            element: <GoodList />,
                        },
                        {
                            path: '/goods/:id',
                            element: <GoodItem/>
                        },
                    
                            ],
                
                
                },
                {
                    path: '/basket',
                    element: <Basket/>
                }
            ]
        }
    ]
)
