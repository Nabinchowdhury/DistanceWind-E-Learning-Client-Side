import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Signup = () => {
    const { createNewUser, providerSignin, updateUserProfile, setLoading } = useContext(AuthContext)
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const photoURL = form.photoURL.value
        const profile = { displayName: name, photoURL: photoURL }
        createNewUser(email, password)
            .then(result => {
                const user = result.user
                console.log("log in successfull", user)
                form.reset()
                updateUserProfile(profile)
                    .then(() => { })
                    .catch(() => { })
                navigate('/courses')
                setError("")
                setLoading(false)
                toast.success('Successfully Signed in!');
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
                toast.error('Sign in failed!');
            })
    }

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGithubSignin = () => {
        providerSignin(githubProvider)
            .then(result => {
                const user = result.user
                console.log("Sign in Successfull", user)
                toast.success('Successfully Signed in!');
                navigate("/courses")
            }).catch(error => {
                toast.error('Sign in failed!');
                setError(error.message)
            })
    }
    const handleproviderSignin = () => {
        providerSignin(googleProvider)
            .then(result => {
                const user = result.user
                console.log("Sign in Successfull", user)
                toast.success('Successfully Signed in!');
                navigate("/courses")
            }).catch(error => {
                setError(error.message)
                toast.error('Sign in failed!');
            })
    }
    return (

        <div >
            <form className="hero mt-20 mb-10 " onSubmit={handleSubmit}>
                <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body bg-white">
                        <h4 className='text-black font-bold ms-2 text-xl'>Sign up</h4>

                        <div className="form-control border-0 ">
                            <label className="label">
                                <span className="label-text text-lg text-black">Full Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Full Name" className="input w-full p-2 bg-slate-100 text-black" />
                        </div>

                        <div className="form-control border-0 ">
                            <label className="label">
                                <span className="label-text text-lg text-black">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Photo URL" className="input w-full p-2 bg-slate-100 text-black" />
                        </div>

                        <div className="form-control border-0 ">
                            <label className="label">
                                <span className="label-text text-lg text-black">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input w-full p-2 bg-slate-100 text-black" required />
                        </div>

                        <div className="form-control border-0">
                            <label className="label">
                                <span className="label-text text-lg text-black">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input w-full p-2 bg-slate-100 text-black" required />
                        </div>

                        <p className='text-red-500 font-bold'>{error}</p>
                        <div className="form-control border-0 my-2">
                            <button className="btn btn-primary font-bold w-full">Sign up</button>
                        </div>
                        <p className='text-black text-center'>ALready have an account?
                            <Link to="/login" className='ml-1 underline text-yellow-400 font-medium hover:text-yellow-500'>Log in</Link> </p>
                    </div>
                </div>
            </form>

            <div className='flex justify-center items-center mt-4'>
                <hr className=' border-white w-1/12' />
                <p className='mx-2'>OR</p>
                <hr className=' border-white w-1/12' />
            </div>

            <div className='flex flex-col items-center mx-10'>
                <button className='btn btn-dark w-full sm:w-1/2 lg:w-1/4 my-2 font-medium' onClick={handleGithubSignin}>Sign in with Github</button>
                <button className='btn btn-warning w-full sm:w-1/2 lg:w-1/4 my-2 font-medium' onClick={handleproviderSignin}>Sign in with Google</button>
            </div>
        </div >
    );
};

export default Signup;