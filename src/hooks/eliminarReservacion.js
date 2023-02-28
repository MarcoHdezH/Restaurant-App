import { db } from "./firebase";

export async function eliminarReservacion(id) {
    try {

        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE',
        })
        await respuesta.json;

    } catch (error) {
        console.log(error);
    }
}