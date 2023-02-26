import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formulario } from '../components/Formulario';

export const NuevaReservacion = () => {

    const navigate = useNavigate();
    return (
        <>
            <h1 className='font-black text-4xl text-purple-900 text-center'>Nueva Reservacion</h1>
            <p className='mt-3 text-center'>Llena los campos para poder Reservar Correctamente</p>

            <div className='flex justify-end'>
                <button onClick={()=>navigate('/')} className='bg-purple-900 text-white px-3 py-1 font-bold uppercase'>Volver</button>
            </div>

            <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10'>
                <Formulario/>
            </div>
        </>
    )
}