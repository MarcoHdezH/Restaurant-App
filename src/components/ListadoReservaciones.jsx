import {Reservacion} from "./Reservacion"

export const ListadoReservaciones = ({reservaciones, setReservacion, eliminarReservacion}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {reservaciones && reservaciones.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Reservaciones Activas</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administrar {''}
                        <span className="text-purple-900 font-bold ">Reservaciones</span>
                    </p>

                    { reservaciones.map( reservacion => (
                        <Reservacion 
                            key={reservacion.id}
                            reservacion={reservacion}
                            setReservacion={setReservacion}
                            eliminarReservacion={eliminarReservacion}
                        />
                    ))}
                </>

            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay Reservaciones</h2>
                    <p className="text-lg mt-5 mb-10 text-center">
                        Comienza agregando alguna Reservacion {''}
                        <span className="text-indigo-600 font-bold ">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}