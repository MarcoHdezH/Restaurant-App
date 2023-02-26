import React from 'react'
import { useNavigate, Form, useActionData, redirect } from 'react-router-dom'
import { Formulario } from '../components/Formulario';
import {Error} from '../components/Error';
import { agregarReservacion } from '../hooks/agregarReservacion';

export async function action({request}){
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

    await agregarReservacion(datos);

    return redirect('/Reservaciones');
}

export const NuevaReservacion = () => {

    const errores = useActionData();
    const navigate = useNavigate();

    return (
        <>
            <h1 className='font-black text-4xl text-purple-900 text-center'>Nueva Reservacion</h1>
            <p className='mt-3 text-center'>Llena los campos para poder Reservar Correctamente</p>

            <div className='flex justify-end'>
                <button onClick={() => navigate('/')} className='bg-purple-900 text-white px-3 py-1 font-bold uppercase'>Volver</button>
            </div>

            <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10'>
            {errores?.length && errores.map( (error,i) => <Error key={i}>{error}</Error>)}

                <Form method='post' noValidate>
                    <Formulario />
                    <input type='submit' className='mt-5 w-full bg-purple-900 p-3 uppercase font-bold text-white text-lg' value="Registrar Reservacion"></input>
                </Form>
            </div>
        </>
    )
}