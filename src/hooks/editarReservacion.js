
export async function actualizarReservacion(id,datos){
    try{

        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        await respuesta.json;

    }catch(error){
        console.log(error);
    }
} 