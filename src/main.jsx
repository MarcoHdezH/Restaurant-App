import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { NuevaReservacion ,action as nuevaReservacionAction} from './pages/NuevaReservacion'
import { Index} from './pages/Index'
import { Reservaciones, loader as ReservacionesLoader} from './pages/Reservaciones'
import { ErrorPage } from './components/ErrorPage'
import { EditarReservacion, loader as editarReservacionLouder, action as editarReservacionAction} from './pages/EditarReservacion'
import { Nosotros } from './pages/Nosotros'
import { EliminarReservacion } from './pages/EliminarReservacion'
import {action as eliminarReservacionAction} from './components/Reservacion';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index:true,
        element : <Index/>
      },
      {
        path:'/Reservaciones/',
        element: <Reservaciones/>,
        loader:ReservacionesLoader,
        errorElement: <ErrorPage/>
      },
      {
        path:'/Reservaciones/Nuevo',
        element: <NuevaReservacion/>,
        action: nuevaReservacionAction,
        errorElement : <ErrorPage/>
      },
      {
        path: '/Reservaciones/:ReservacionID/Editar',
        element : <EditarReservacion/>,
        loader: editarReservacionLouder,
        action: editarReservacionAction,
        errorElement: <ErrorPage/>

      },
      {
        path: '/Reservaciones/:ReservacionID/Eliminar',
        action: eliminarReservacionAction
      },
      {
        path : '/Nosotros',
        element : <Nosotros/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
