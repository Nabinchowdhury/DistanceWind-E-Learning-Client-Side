import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../../Header/Header';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <Header></Header>
            <h1 className='text-6xl font-600 my-10'>Ops! Unexpected Error Occured</h1>
            <h3 className='text-3xl font-bold  text-red-500'>{error && (error.statusText || error.message)}</h3>
            <h4 className='text-4xl font-bold mt-5'>{error.status} </h4>
        </div>
    );
};

export default ErrorPage;