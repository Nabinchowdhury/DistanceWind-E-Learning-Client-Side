import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div >
            <div className="hero mt-20 ">
                <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body bg-white">
                        <h4 className='text-black font-bold ms-2 text-xl'>Log In</h4>
                        <div className="form-control border-0 ">
                            <label className="label">
                                <span className="label-text text-lg text-black">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input w-full p-2 bg-slate-100" />

                        </div>
                        <div className="form-control border-0">
                            <label className="label">
                                <span className="label-text text-lg text-black">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input w-full p-2 bg-slate-100" />

                            <p className="text-right my-3">
                                <Link className='underline  text-yellow-400 fw-semibold hover:text-yellow-500'> Forgot Password?</Link>
                            </p>
                        </div>
                        <div className="form-control border-0 my-2">
                            <button className="btn btn-outline-warning fw-bold w-full">Log in</button>
                        </div>
                        <p className='text-black text-center'>Don't have an account?    <Link to="/signup" className='ml-1 underline text-yellow-400 fw-semibold hover:text-yellow-500'>Create an account</Link> </p>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-start mt-4'>
                <hr className='border-2 border-white w-1/12' />
                <p className='mx-2'>OR</p>
                <hr className='border-2 border-white w-1/12' />
            </div>

            <div className='flex flex-col items-center mx-10'>
                <button className='btn btn-primary w-full sm:w-1/2 lg:w-1/4 my-2 fw-semibold rounded-pill'>Sign in with Facebook</button>
                <button className='btn btn-warning w-full sm:w-1/2 lg:w-1/4 my-2 fw-semibold rounded-pill '>Sign in with Google</button>
            </div>
        </div >

    );
};

export default Login;