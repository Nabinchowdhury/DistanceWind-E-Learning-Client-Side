import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
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
                            <input type="email" name="email" placeholder="Email" className="input w-full p-2 bg-slate-100 text-black" />

                        </div>
                        <div className="form-control border-0">
                            <label className="label">
                                <span className="label-text text-lg text-black">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input w-full p-2 bg-slate-100 text-black" />

                            <p className="text-right my-3">
                                <Link className='underline  text-yellow-400 font-medium hover:text-yellow-500'> Forgot Password?</Link>
                            </p>
                        </div>
                        <div className="form-control border-0 my-2">
                            <button className="btn btn-primary font-bold w-full">Sign up</button>
                        </div>
                        <p className='text-black text-center'>Already have an account?    <Link to="/login" className='ml-1 underline text-yellow-400 font-medium hover:text-yellow-500'>Log in</Link> </p>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center mt-4'>
                <hr className=' border-white w-1/12' />
                <p className='mx-2'>OR</p>
                <hr className=' border-white w-1/12' />
            </div>

            <div className='flex flex-col items-center mx-10'>
                <button className='btn btn-dark w-full sm:w-1/2 lg:w-1/4 my-2 font-medium '>Sign in with Github</button>
                <button className='btn btn-warning w-full sm:w-1/2 lg:w-1/4 my-2 font-medium '>Sign in with Google</button>
            </div>
        </div >
    );
};

export default Signup;