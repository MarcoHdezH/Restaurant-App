export const Formulario = ({ reservacion }) => {
    return (
        <>
            <div className="mb-4">
                <label className="text-gray-800" htmlFor="nombre">Nombre(s):</label>
                <input id="nombre" type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="A nombre de quien la Reservacion" name="nombre"
                />
            </div>

            <div className="mb-4">
                <label className="text-gray-800" htmlFor="email">E-mail:</label>
                <input id="email" type="email" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Email del Cliente" name="email"/>
            </div>

            <div className="mb-4">
                <label className="text-gray-800" htmlFor="telefono">Teléfono:</label>
                <input id="telefono" type="tel" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Teléfono del Cliente" name="telefono" />
            </div>
            <div className="mb-4">
                <label className="text-gray-800" htmlFor="telefono">Fecha de Reservacion:</label>
                <input id="fecha" type="date" className="mt-2 block w-full p-3 bg-gray-50" name="fecha" min="2023-03-01" max="2023-12-31"/>
            </div>

            <div className="mb-4">
                <label className="text-gray-800" htmlFor="notas">Notas:</label>
                <textarea as="textarea" id="notas" type="text" className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self" placeholder="Notas del Cliente" name="notas"/>
            </div>
        </>
    )
}