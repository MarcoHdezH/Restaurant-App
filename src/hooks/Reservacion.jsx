import React from 'react'

export const Reservacion = ({ reservacion }) => {

  const { nombre,email,telefono,fecha} = reservacion;
  return (
    <tr className='border-b'>
      <td className='p-6 space-y-2'>
        <p className='text-xl text-gray-800 font-bold'>{nombre}</p>
        <p className='text-gray-800'>Fecha Reservacion: {fecha}</p>

      </td>

      <td className='p-6 text-center'>
        <p className='text-gray-800'> <span className='text-gray-800 uppercase font-bold'>Email: </span>{email}</p>
        <p className='text-gray-800'> <span className='text-gray-800 uppercase font-bold'>Teléfono: </span>{telefono}</p>
      </td>

      <td className='p-6 flex justify-items-center text-center gap-10'>
        <button type='button' className='text-purple-500 hover:text-purple-900 uppercase font-bold text-xs'>Editar</button>
        <button type='button' className='text-red-500 hover:text-red-900 uppercase font-bold text-xs'>Eliminar</button>

      </td>
    </tr>
  )
}