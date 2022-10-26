import React, { useContext, useEffect, useState } from 'react';
import { FaArrowRight, FaCoins, FaDollarSign, FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

import LeftNav from '../LeftNav/LeftNav';
import Pdf from "react-to-pdf";
import { ThemeContext } from '../../layout/Main/Main';

const CourseDetails = () => {
    const seeDetails = useLoaderData()
    const { id, title, image, Duration, lessons, price, coins, details } = seeDetails

    const { ETheme } = useContext(ThemeContext)
    const [coursNames, setCourseNames] = useState([])

    const ref = React.createRef();
    useEffect(() => {
        fetch(`https://b610-learning-platform-server.vercel.app/courses`)
            .then(res => res.json())
            .then(data => setCourseNames(data))
    })
    return (


        <div className='flex flex-col-reverse lg:flex-col lg:grid lg:grid-cols-6 xl:grid-cols-4 gap-4 mb-10'>
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

                <div className=' '>

                    <div className="card xl:card-side bg-transparent shadow-xl mt-7 sticky top-20 border">
                        <figure className='xl:w-1/2'><img className='h-full w-full' src={image} alt="Album" /></figure>


                        <div className="card-body" ref={ref}>
                            <h1 className='text-center font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl  mb-5'>Course Details</h1>
                            <h2 className="card-title font-bold text-xl">Course : {title}</h2>

                            <div className='flex flex-col sm:flex-row justify-center items-left'>
                                <p className='flex justify-left items-center text-xl font-medium'>Price: {price}  <FaDollarSign ></FaDollarSign> / {coins} <FaCoins className='ml-2'></FaCoins>
                                </p>
                                <Pdf targetRef={ref} filename={`${title}.pdf`}>
                                    {({ toPdf }) => <button className='btn btn-secondary' onClick={toPdf}>Download PDF <FaDownload className='ml-2'></FaDownload></button>}
                                </Pdf>

                            </div>
                            <p><li> <span className='underline font-medium'>Dedicated time needed</span>:  {Duration}/ day </li></p>
                            <p><li> <span className='underline font-medium'>Course Lessons </span>:  {lessons}/ week </li></p>
                            <p><li> <span className='underline font-medium'>Details</span>:  {details} </li></p>

                            <div className="card-actions justify-left ">
                                <div className="stats w-full stats-vertical md:stats-horizontal shadow ">

                                    <div className="stat place-items-center">
                                        <div className="stat-title">Duration</div>
                                        <div className="stat-value text-2xl">{Duration}/day</div>
                                        <div className="stat-desc">From January 1st to February 1st</div>
                                    </div>

                                    <div className="stat place-items-center">
                                        <div className="stat-title">Lessons</div>
                                        <div className="stat-value text-secondary text-3xl">{lessons}/week</div>
                                        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                                    </div>

                                    <div className="stat place-items-center">
                                        <div className="stat-title">Achieve on complete</div>
                                        <div className="stat-value flex justify-left items-center">{coins / 10} <FaCoins className='ml-2'></FaCoins></div>
                                        <div className="stat-desc">↘︎ 90 (14%)</div>
                                    </div>

                                </div>
                            </div>
                            <Link to={`/premiumCheckout/${id}`}><button className='btn btn-error font-bold w-full md:w-1/2 mt-5'>Get Premium Access<FaArrowRight className='ml-2'></FaArrowRight> </button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CourseDetails;