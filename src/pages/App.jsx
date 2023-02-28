import { useState, useEffect } from 'react'
import {Formulario} from "../components/Formulario"
import {Header} from "../components/Header"
import {ListadoReservaciones} from "../components/ListadoReservaciones"

export function App() {

  const [reservaciones, setReservaciones] = useState(JSON.parse(localStorage.getItem('reservaciones')) ?? []);
  const [reservacion, setReservacion] = useState({});

  useEffect(() => {
    localStorage.setItem('reservaciones', JSON.stringify( reservaciones ));
  }, [reservaciones])

  const eliminarReservacion = id => {
    const reservacionesActualizados = reservaciones.filter( reservacion => reservacion.id !== id);
    setReservaciones(reservacionesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
          <Formulario 
            reservaciones={reservaciones}
            setReservaciones={setReservaciones}
            reservacion={reservacion}
            setReservacion={setReservacion}
          />
          <ListadoReservaciones
            reservaciones={reservaciones}
            setReservacion={setReservacion}
            eliminarReservacion={eliminarReservacion}
          />
      </div>

    </div>
  )
}