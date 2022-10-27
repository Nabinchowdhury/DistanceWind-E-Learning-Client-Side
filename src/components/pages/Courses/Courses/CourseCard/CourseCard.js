import React from 'react';
import { useContext } from 'react';
import { FaArrowRight, FaCoins, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../layout/Main/Main';

const CourseCard = ({ course }) => {
    // console.log(course)
    const { ETheme } = useContext(ThemeContext)
    const { coins, id, image, price, title } = course
    return (
        <div>
            <div className={`card ${ETheme ? "bg-slate-200" : "bg-gray-700"} w-11/12 h-full shadow-xl `}>
                <figure><img src={image} alt="" className='w-full h-56' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">{coins} <FaCoins className='ml-2'></FaCoins></div>
                    </h2>
                    <p className='flex items-end'>Price: {price} <FaDollarSign className=' my-1'></FaDollarSign></p>
                    <div className="card-actions  mt-5">
                        <Link to={`/course/${id}`}><button className='btn btn-warning'>See Details <FaArrowRight className='ml-2'></FaArrowRight></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;