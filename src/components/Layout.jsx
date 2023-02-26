import React from 'react'
import { Outlet,Link,useLocation } from 'react-router-dom'

export const Layout = () => {

    const location = useLocation();

    return (
        <div className='md:flex md:min-h-screen'>
            <aside className='md:w-1/4 bg-purple-800 px-5 py-10'>
                <h2 className='text-4xl font-black text-center text-white'>Tokyo Dinner Restaurant</h2>
                <nav className='mt-10'>
                    <Link className={`${location.pathname=== '/' ? 'text-purple-300' : 'text-white'} text-2xl block mt-2 hover:text-purple-300 text-white text-center`} to='/'>Página Principal</Link>
                    <Link className={`${location.pathname=== '/Reservaciones' ? 'text-purple-300' : 'text-white'} text-2xl block mt-2 hover:text-purple-300 text-white text-center`} to='/Reservaciones'>Lista de Reservaciones</Link>
                    <Link className={`${location.pathname=== '/Reservaciones/Nuevo' ? 'text-purple-300' : 'text-white'} text-2xl block mt-2 hover:text-purple-300 text-white text-center`} to='/Reservaciones/Nuevo'>Nueva Reservacion</Link>
                </nav>
            </aside>

            <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
            <Outlet/>

            </main>
        </div>

    )
}

