import React from 'react'
import { useNavigate, Form, useActionData } from 'react-router-dom'
import { Formulario } from '../components/Formulario';
import {Error} from '../components/Error';

export async function action({request}){
    const formData= await request.formData();

    const datos = Object.fromEntries(formData);

    // const email = formData.get('email');

    //Validacion
    const errores=[];
    if(Object.values(datos)){
        errores.push('Todos los Campos son Obligatorios');
    }

    // let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    // if(!regex.test(email)){
    //     errores.push("Email Invalido")
    // }

    //Retornar Errores
    if(Object.keys(errores).length){
        return errores;
    }
    return null;
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

                <Form method='post'>
                    <Formulario />
                    <input type='submit' className='mt-5 w-full bg-purple-900 p-3 uppercase font-bold text-white text-lg' value="Registar Reservacion"></input>
                </Form>
            </div>
        </>
    )
}