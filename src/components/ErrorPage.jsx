
import React from 'react'
import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className='space-y-8'>
            <h1 className='text-center text-6xl font-extrabold text-purple-900 mt-20'>Tokio Dinner Restaurant</h1>
            <p className='text-center'> Tenemos un Problema...</p>
            <p className='text-center'>{error.message}</p>
        </div>
    )
}

