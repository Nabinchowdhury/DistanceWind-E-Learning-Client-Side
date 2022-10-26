import React, { useContext, useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCoins, FaDollarSign } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { ThemeContext } from '../../layout/Main/Main';
import LeftNav from '../LeftNav/LeftNav';

const CourseDetails = () => {
    const seeDetails = useLoaderData()
    console.log(seeDetails)
    const { id, title, image, Duration, lessons, price, coins } = seeDetails

    const { ETheme } = useContext(ThemeContext)
    const [coursNames, setCourseNames] = useState([])

    useEffect(() => {
        fetch(`https://b610-learning-platform-server-nabinchowdhury.vercel.app/courses`)
            .then(res => res.json())
            .then(data => setCourseNames(data))
    })
    return (
        <div className='flex flex-col lg:grid lg:grid-cols-6 xl:grid-cols-4 gap-4 ' >
            <div className='lg:col-span-2 xl:col-span-1 '>
                <div className={`mt-6 sticky top-20 h-auto`}>
                    <div className={`${ETheme ? 'themeLight' : "themeDark"}  rounded-2xl `}>
                        {
                            coursNames.map(courses => <LeftNav key={courses.categoryId} courseAll={courses}></LeftNav>)
                        }
                    </div>
                </div>
            </div>
            <div className={`lg:col-span-4 xl:col-span-3 `}>

                <div className='h-screen '>
                    <div className="card xl:card-side bg-transparent shadow-xl mt-7 sticky top-20">
                        <figure><img className='h-full w-full' src={image} alt="Album" /></figure>


                        <div className="card-body">
                            <h2 className="card-title font-bold text-xl">Course : {title}</h2>

                            <div className='flex justify-center items-center'><p className='flex justify-left items-center text-xl'>Price: {price}  <FaDollarSign ></FaDollarSign> / {coins} <FaCoins className='ml-2'></FaCoins> </p>
                            </div>
                            <p>Dedicated time needed: {Duration}/ day </p>
                            <p>Course Lessons : {lessons}/ week</p>
                            <p>Details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni possimus laudantium, quod quae praesentium error porro maxime numquam laborum exercitationem dolor accusamus voluptates delectus, perspiciatis, soluta eius sunt omnis voluptatum.</p>

                            <div className="card-actions justify-left h-32">
                                <div className="stats w-full stats-vertical sm:stats-horizontal shadow h-32">

                                    <div className="stat place-items-center">
                                        <div className="stat-title">Duration</div>
                                        <div className="stat-value">{Duration}/day</div>
                                        <div className="stat-desc">From January 1st to February 1st</div>
                                    </div>

                                    <div className="stat place-items-center">
                                        <div className="stat-title">Lessons</div>
                                        <div className="stat-value text-secondary">{lessons}/week</div>
                                        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                                    </div>

                                    <div className="stat place-items-center">
                                        <div className="stat-title">Achieve on complete</div>
                                        <div className="stat-value flex justify-left items-center">{coins / 10} <FaCoins className='ml-2'></FaCoins></div>
                                        <div className="stat-desc">↘︎ 90 (14%)</div>
                                    </div>

                                </div>
                            </div>
                            <Link to={`/premium/${id}`}><button className='btn btn-error font-bold w-full md:w-1/2 mt-5'>Get Premium Access<FaArrowRight className='ml-2'></FaArrowRight> </button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CourseDetails;