import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Reservacion } from '../components/Reservacion';
import { obtenerReservaciones } from '../hooks/Reservacion';

export function loader() {
  const reservaciones = obtenerReservaciones();
}

export const Reservaciones = () => {

  const reservaciones = useLoaderData();

  //Error Boundries

  return (
    <>
      <h1 className='font-black text-4xl text-purple-900 text-center'>Lista de Reservaciones</h1>
      <p className='mt-3 text-center'>Administra tus Reservaciones</p>

      {reservaciones.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead className='bg-purple-800 text-white'>
            <tr>
              <th className='p-2'>Nombre</th>
              <th className='p-2'>Contacto</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {reservaciones.map(reservacion => (
              <Reservacion reservacion={reservacion} key={reservacion.id} />
            ))}
          </tbody>
        </table>

      ) : (
        <p className='text-center mt-10'>No hay Reservaciones Todavia</p>
      )}

    </>
  )
}