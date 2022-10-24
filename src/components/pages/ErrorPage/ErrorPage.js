import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);
    return (
        <div>
            {/* <Header></Header> */}
            <h1 className='text-6xl font-600 my-10'>Ops! Unexpected Error Occured</h1>
            <h3 className='text-3xl font-bold  text-red-500'>{error && (error.statusText || error.message)}</h3>
            {/* <h3 className='text-3xl font-600'>{error.statusText || error.message}</h3> */}
            <h4 className='text-4xl font-bold mt-5'>{error.status} </h4>
        </div>
    );
};

export default ErrorPage;