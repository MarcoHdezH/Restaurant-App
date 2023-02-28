import { db } from "./firebase";

export async function obtenerReservacion(id){

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const resultado = await respuesta.json();

    return resultado;
}