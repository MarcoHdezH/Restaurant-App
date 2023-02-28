import { useState, useEffect } from 'react';
import { Error } from './Error'

export const Formulario = ({ reservaciones, setReservaciones, reservacion, setReservacion }) => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');

    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(reservacion).length > 0) {
            setNombre(reservacion.nombre)
            setTelefono(reservacion.telefono)
            setEmail(reservacion.email)
            setFecha(reservacion.fecha)
        }
    }, [reservacion])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del Formulario
        if ([nombre, telefono, email, fecha].includes('')) {
            console.log('Hay Al Menos un campo vacio')

            setError(true)
            return;
        }

        setError(false)

        const objetoReservacion = {
            nombre,
            telefono,
            email,
            fecha,
        }

        if (reservacion.id) {
            // Editando el Registro
            objetoReservacion.id = reservacion.id
            const reservacionesActualizados = reservaciones.map(reservacionState => reservacionState.id === reservacion.id ? objetoReservacion : reservacionState)

            setReservaciones(reservacionesActualizados)
            setReservacion({})

        } else {
            // Nuevo registro
            objetoReservacion.id = generarId();
            setReservaciones([...reservaciones, objetoReservacion]);
        }

        // Reiniciar el form
        setNombre('')
        setTelefono('')
        setEmail('')
        setFecha('')

    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Añadir Reservacion</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade una Reservacion
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className="mb-5">
                    <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
                        Nombre
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="telefono" className="block text-gray-700 uppercase font-bold">
                        Telefono Contacto
                    </label>
                    <input
                        id="telefono"
                        type="number"
                        placeholder="222-222-2222"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={reservacion.id ? 'Editar Reservacion' : 'Agregar Reservacion'}
                />
            </form>
        </div>
    )
}