import React from 'react';

//Импортируем созданный роутер
import {Router} from './utils/router'
//Импортируем провайдер для роутера
import {RouterProvider} from 'react-router-dom'

export function App() {
  return (
    <div className="App">
      <RouterProvider router={Router}/>
    </div>
  );
}
