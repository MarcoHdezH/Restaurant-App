import React from 'react'
import { obtenerReservacion} from '../hooks/InfoReservacion';
import { actualizarReservacion } from '../hooks/editarReservacion';
import { Formulario } from '../components/Formulario';
import { Form, useNavigate, useLoaderData, useActionData, redirect} from 'react-router-dom';
import { Error } from '../components/Error';

export async function loader({ params }) {
    const reservacion = await obtenerReservacion(params.ReservacionID);

    if (Object.values(reservacion).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Reservacion Inexistente'
        });

    }
    return reservacion;
}

export async function action({request,params}){
    const formData= await request.formData();
    const datos = Object.fromEntries(formData);

    //Validacion
    const errores=[];
    if(Object.values(datos).includes('')){
        errores.push('Todos los Campos son Obligatorios');
    }

    //Retornar Errores
    if(Object.keys(errores).length){
        return errores;
    }

    //Actualizar Reservacion
    await actualizarReservacion(params.ReservacionID, datos);
    return redirect('/Reservaciones');
}

export const EditarReservacion = () => {

    const navigate = useNavigate();
    const reservacion = useLoaderData();
    const errores = useActionData();

    return (
        <>
            <h1 className='font-black text-4xl text-purple-900 text-center'>Editar Reservacion</h1>
            <p className='mt-3 text-center'>Modifica los Datos Necesarios</p>

            <div className='flex justify-end'>
                <button onClick={() => navigate('/')} className='bg-purple-900 text-white px-3 py-1 font-bold uppercase'>Volver</button>
            </div>

            <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10'>
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form method='post' noValidate>
                    <Formulario reservacion={reservacion} />
                    <input type='submit' className='mt-5 w-full bg-purple-900 p-3 uppercase font-bold text-white text-lg' value="Guardar Cambios"></input>
                </Form>
            </div>
        </>
    )
}