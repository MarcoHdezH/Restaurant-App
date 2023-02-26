import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { NuevaReservacion } from './pages/NuevaReservacion'
import { Index} from './pages/Index'
import { Reservaciones, loader as ReservacionesLoader} from './pages/Reservaciones'

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
        loader:ReservacionesLoader
      },
      {
        path:'/Reservaciones/Nuevo',
        element: <NuevaReservacion/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
