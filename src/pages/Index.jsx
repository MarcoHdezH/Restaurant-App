import React from 'react'
import image from '../../public/images/Kommi.webp';

export const Index = () => {
  return (
    <>
      <h1 className='text-center font-bold text-5xl p-5  text-purple-900'>Tokio Dinner Restaurant</h1>
      <div className="p-10 flex Centrar">
          <img src={image}/>
      </div>
    </>
  )
}