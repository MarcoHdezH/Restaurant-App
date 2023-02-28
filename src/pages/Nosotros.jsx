import React from 'react'
import image from '../../public/images/Kommi.webp';
import { Footer } from '../components/Footer';

export const Nosotros = () => {
    return (
        <>
            <h1 className='text-center font-bold text-5xl p-5  text-purple-900'>Sobre Tokio Dinner</h1>
            <div className="p-10 flex Centrar">
                <img src={image} />
            </div>

            <Footer/>
        </>
    )
}