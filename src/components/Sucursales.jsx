import React from 'react'
import { useNavigate} from 'react-router-dom';

export const Sucursales = () => {
    const navigate = useNavigate();
    return (
        <>
        <h2 className='text-center text-4xl font-bold uppercase'>Sucursales</h2>
            <section className=' lg:grid grid-cols-3 mt-20 gap-5'>

                <div className='text-center'>
                    <h3 className='text-lg uppercase font-bold'>Monte Everest, Lomas de Chapultepec</h3>
                    <p className='text-center m-5'> <span className='font-bold uppercase'>Lunes y Martes</span> 13:00 a 23:00 hrs</p>
                    <p className='text-center m-5'> <span className='font-bold uppercase'>miercoles</span> 13:00 a 00:00 hrs</p>
                    <p className='text-center m-5'> <span className='font-bold uppercase'>jueves y viernes</span> 13:00 a 1:00 hrs</p>
                    <p className='text-center m-5'> <span className='font-bold uppercase'>sabado</span> 13:00 a 00:00 hrs</p>
                    <p className='text-center m-5'> <span className='font-bold uppercase'>domingo</span> 13:00 a 22:00 hrs</p>
                    <button type='button' onClick={()=>navigate('/Reservaciones')} className='bg-purple-900 text-center text-md text-white m-5 p-3 rounded-lg'>Reserva Ahora</button>
                </div>

                <div className='text-center'>
                    <h3 className='text-lg uppercase font-bold'>Parque Plaza Satélite, Naucalpan</h3>
                    <p className='text-center m-5'> <span className='font-bold uppercase'>Lunes y Martes</span> 13:00 a 23:00 hrs</p>
                    <p className='text-center m-5'> <span className='font-bold uppercase'>miercoles</span> 13:00 a 00:00 hrs</p>
                    <p className='text-center m-5'> <span className='font-bold uppercase'>jueves y viernes</span> 13:00 a 1:00 hrs</p>
                    <p className='text-center m-5'> <span className='font-bold uppercase'>sabado</span> 13:00 a 00:00 hrs</p>
                    <p className='text-center m-5'> <span className='font-bold uppercase'>domingo</span> 13:00 a 22:00 hrs</p>
                    <button type='button' onClick={()=>navigate('/Reservaciones')} className='bg-purple-900 text-center text-md text-white m-5 p-3 rounded-lg'>Reserva Ahora</button>
                </div>

                <div className='text-center'>
                    <h3 className='text-lg uppercase font-bold'>Temístocles 61, Polanco</h3>
                    <p className='text-center m-5'> <span className='font-bold uppercase'>Lunes y Martes</span> 13:00 a 23:00 hrs</p>
                    <p className='text-center m-5'> <span className='font-bold uppercase'>miercoles</span> 13:00 a 00:00 hrs</p>
                    <p className='text-center m-5'> <span className='font-bold uppercase'>jueves y viernes</span> 13:00 a 1:00 hrs</p>
                    <p className='text-center m-5'> <span className='font-bold uppercase'>sabado</span> 13:00 a 00:00 hrs</p>
                    <p className='text-center m-5'> <span className='font-bold uppercase'>domingo</span> 13:00 a 22:00 hrs</p>
                    <button type='button' onClick={()=>navigate('/Reservaciones')} className='bg-purple-900 text-center text-md text-white m-5 p-3 rounded-lg'>Reserva Ahora</button>
                </div>

            </section>

        </>
    )
}