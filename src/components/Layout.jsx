import React from 'react'
import { Outlet,Link,useLocation } from 'react-router-dom'

export const Layout = () => {

    const location = useLocation();

    return (
        <div className='md:min-h-screen'>
            <aside className='bg-purple-800 px-5 py-3'>
                <h2 className='text-4xl font-black text-center text-white'>Tokyo Night Restaurant</h2>
                <nav className='mt-10 lg:flex justify-evenly'>
                    <Link className={`${location.pathname=== '/' ? 'text-purple-300' : 'text-white'} text-2xl block mt-2 hover:text-purple-300 text-white text-center`} to='/'>Nosotros</Link>
                    <Link className={`${location.pathname=== '/Reservaciones' ? 'text-purple-300' : 'text-white'} text-2xl block mt-2 hover:text-purple-300 text-white text-center`} to='/Reservaciones'>Reservaciones</Link>
                    <Link className={`${location.pathname=== '/Nosotros' ? 'text-purple-300' : 'text-white'} text-2xl block mt-2 hover:text-purple-300 text-white text-center`} to='/Nosotros'>Menú</Link>
                </nav>
            </aside>

            <main className='p-10 md:h-screen overflow-scroll'>
            <Outlet/>
            </main>
        </div>

    )
}

