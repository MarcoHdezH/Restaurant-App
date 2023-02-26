import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { NuevaReservacion ,action as nuevaReservacionAction} from './pages/NuevaReservacion'
import { Index} from './pages/Index'
import { Reservaciones, loader as ReservacionesLoader} from './pages/Reservaciones'
import { ErrorPage } from './components/ErrorPage'
import { EditarCliente } from './pages/EditarCliente'
import { Nosotros } from './pages/Nosotros'

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
        action: nuevaReservacionAction
      },
      {
        path: '/Reservaciones/:ReservacionID/Editar',
        element : <EditarCliente/> 
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
