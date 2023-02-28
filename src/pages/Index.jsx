import React from 'react'
import image from '../../public/images/Kommi.webp';
import image1 from '../../public/images/Image 1.jpg';
import image2 from '../../public/images/Image 2.jpg';
import { Footer } from '../components/Footer';

export const Index = () => {
  return (
    <>
      <h1 className='text-center font-bold text-5xl p-5  text-purple-900'>Tokio Night Restaurant</h1>
      <section>
        <div className='lg:flex justify-evenly p-5'>

          <div className='p-5'>
            <img src={image1} />
          </div>

          <div className='p-5'>
            <h2 className='text-4xl mb-5 text-center lg:text-left uppercase font-bold'>Nosotros</h2>
            <p className='text-xl text-justify'>Tokyo Night se define por ser un ícono de la cocina japonesa en México.<br></br>Fundado en 1994 por el Dr.Katsumi Kumoto Kawasaki, es considerado hasta el día de hoy, como unos de los mejores restaurantes de todo el país.
            <br></br>El restaurante a cargo de Urban Group se ha posicionado, como el templo gastronómico que fusiona la arquitectura y el arte oriental culinario bajo los más altos estándares de calidad.</p>
          </div>

        </div>

        <div className='lg:grid grid-cols-2 gap-4 p-5'>

          <div className='p-5 lg:w-50'>
            <h2 className='text-4xl mb-5 text-center lg:text-left uppercase font-bold'>Arquitectura</h2>
            <p className='text-xl text-justify'>Los restaurantes Tokyo Night cuentan con espacios diseñados por los afamados estudios
              Rojkind Arquitectos y Esrawe Studio, que llevaron a otro nivel los conceptos de la
              arquitectura contemporánea en este tipo de locales.<br></br><br></br>
              Los propietarios de Tokyo Night, Katsumi Kumoto y los empresarios Jorge Echenique y Jack Sourasky,
              decidieron ir más allá de la rica experiencia sensorial de la tradicional comida japonesa y apostaron
              por sumar también la experiencia arquitectónica.
            </p>
          </div>

          <div className='p-5'>
            <img src={image2} />
          </div>

        </div>

      </section>

      <Footer/>
    </>
  )
}