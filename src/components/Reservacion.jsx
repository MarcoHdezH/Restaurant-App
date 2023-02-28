export const Reservacion = ({ reservacion, setReservacion, eliminarReservacion }) => {
    const { nombre, telefono, email, fecha, id } = reservacion

    const handleEliminar = () => {
        eliminarReservacion(id)
    }

    return (
        <div className="lg:mx-5 lg:my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Telefono: {''}
                <span className="font-normal normal-case">{telefono}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Reservacion: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            {/* <div className="lg:flex justify-evenly p-10 mt-10 text-center">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setReservacion(reservacion)}
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 mt-10 lg:mt-0 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div> */}
            
        </div>
    )
}