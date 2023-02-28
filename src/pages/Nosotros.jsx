import React from 'react'
import { Footer } from '../components/Footer';
import image from '../../public/images/Image 3.jpg';
import image2 from '../../public/images/Image 4.jpg';

export const Nosotros = () => {
    return (
        <>
            <h1 className='text-center font-bold text-5xl p-5  text-purple-900'>Tokio Night Menú</h1>
            <div className='p-20'>
                <div className='text-center'>
                    <h2 className='font-bold uppercase text-3xl mb-10'>Entradas</h2>
                    <p className='text-md uppercase'>Almejas a la Mantequilla <span className='uppercase font-bold'>360</span></p>
                    <p className='text-md uppercase'>Edadame <span className='uppercase font-bold'>180</span></p>
                    <p className='text-md uppercase'>Shishito <span className='uppercase font-bold'>360</span></p>
                    <p className='text-md uppercase'>Rib eye con espárragos <span className='uppercase font-bold'>410</span></p>
                </div>

                <div className='text-center mt-20'>
                    <h2 className='font-bold uppercase text-3xl mb-10'>Crudos</h2>
                    <p className='text-md uppercase'>Atún miso <span className='uppercase font-bold'>230</span></p>
                    <p className='text-md uppercase'>Salmón Yuzu <span className='uppercase font-bold'>250</span></p>
                    <p className='text-md uppercase'>Pulpo Serranito <span className='uppercase font-bold'>280</span></p>
                    <p className='text-md uppercase'>Tataki <span className='uppercase font-bold'>295</span></p>
                    <p className='text-md uppercase'>hamachi <span className='uppercase font-bold'>350</span></p>
                    <p className='text-md uppercase'>Ostiones 6 piezas <span className='uppercase font-bold'>550</span></p>
                </div>

                <div className='text-center mt-20'>
                    <h2 className='font-bold uppercase text-3xl mb-10'>tempura</h2>
                    <p className='text-md uppercase'>camaron <span className='uppercase font-bold'>390</span></p>
                    <p className='text-md uppercase'>mixto <span className='uppercase font-bold'>440</span></p>
                </div>

                <div className='text-center mt-20'>
                    <h2 className='font-bold uppercase text-3xl mb-10'>Ensaladas</h2>
                    <p className='text-md uppercase'>Espinaca <span className='uppercase font-bold'>190</span></p>
                    <p className='text-md uppercase'>Alga <span className='uppercase font-bold'>240</span></p>
                    <p className='text-md uppercase'>Hongos <span className='uppercase font-bold'>460</span></p>
                </div>

                <div className='text-center mt-20'>
                    <h2 className='font-bold uppercase text-3xl mb-10'>Arroz</h2>
                    <p className='text-md uppercase'>Gohan <span className='uppercase font-bold'>110</span></p>
                    <p className='text-md uppercase'>yakimeshi <span className='uppercase font-bold'>120</span></p>
                    <p className='text-md uppercase'>vegetariano <span className='uppercase font-bold'>175</span></p>
                    <p className='text-md uppercase'>onigiri con miso <span className='uppercase font-bold'>120</span></p>
                </div>

                <div className='text-center mt-20'>
                    <h2 className='font-bold uppercase text-3xl mb-10'>Especiales</h2>
                    <p className='text-md uppercase'>Spider <span className='uppercase font-bold'>340</span></p>
                    <p className='text-md uppercase'>Alaska <span className='uppercase font-bold'>340</span></p>
                    <p className='text-md uppercase'>Ninja <span className='uppercase font-bold'>360</span></p>
                    <p className='text-md uppercase'>Arcoiris <span className='uppercase font-bold'>430</span></p>
                </div>

            </div>

            <div className='gap-10 p-20 lg:grid grid-cols-2'>
                    <img className='m-5' src={image}></img>
                    <img className='m-5' src={image2}></img>
                </div>
            

            <Footer/>
        </>
    )
}