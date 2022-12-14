import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { ThemeContext } from '../layout/Main/Main';

const UserProfile = () => {

    const { user, updateUserProfile, setLoading } = useContext(AuthContext)
    const { ETheme } = useContext(ThemeContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value || user?.displayName
        const photoURL = form.photoURL.value || user?.photoURL
        const profile = { displayName: name, photoURL: photoURL }
        updateUserProfile(profile)
            .then(() => {
                toast.success('Successfully updated! Please Reload the page to view your updates');
                setLoading(false)
            })
            .catch(() => { toast.error('Ops!'); })


    }
    return (
        <form className="hero mt-20 mb-10" onSubmit={handleSubmit}>
            <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                <div className="card-body bg-white">
                    <h4 className='text-black font-bold ms-2 text-xl'>Edit Profile</h4>

                    <div className='mt-5'>
                        <Link className="tooltip tooltip-bottom" data-tip={user?.displayName || user?.email}>
                            {user?.photoURL ? <img src={user?.photoURL} alt="" className='h-32 rounded-full' /> : <FaUserCircle className='rounded-full text-6xl mt-1'></FaUserCircle>}
                        </Link>
                        <p className='font-bold text-xl'>User Name: {user?.displayName ? user.displayName : "anonymous"}</p>
                    </div>
                    <div className="form-control border-0 ">
                        <label className="label">
                            <span className="label-text text-lg text-black">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" value={user?.email} className={`input w-full p-2 bg-slate-100 ${ETheme ? "text-black " : "text-white"} font-bold `} disabled />
                    </div>

                    <div className="form-control border-0 ">
                        <label className="label">
                            <span className="label-text text-lg text-black">Change User Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Change User Name" className="input w-full p-2 bg-slate-100 text-black" />
                    </div>

                    <div className="form-control border-0 ">
                        <label className="label">
                            <span className="label-text text-lg text-black">Photo URL</span>
                        </label>
                        <input type="text" name="photoURL" placeholder="Photo URL" className="input w-full p-2 bg-slate-100 text-black" />
                    </div>






                    <div className="form-control border-0 my-2">
                        <button className="btn btn-primary font-bold w-full">Update</button>
                    </div>

                </div>
            </div>
        </form>
    );
};

export default UserProfile;