
//Obtiene las Reservaciones para Mostrar en Pantalla
export async function obtenerReservaciones(){

    const respuesta = await fetch(import.meta.env.VITE_API_URL);
    const resultado = await respuesta.json();

    return resultado;
}