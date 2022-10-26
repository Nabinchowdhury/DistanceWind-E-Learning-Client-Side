import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { FaArrowLeft, FaCoins, FaDollarSign } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import LeftNav from '../Courses/LeftNav/LeftNav';
import { ThemeContext } from '../layout/Main/Main';

const PremiumAccess = () => {
    const premiumCourse = useLoaderData()
    console.log(premiumCourse)
    const { id, title, image, Duration, lessons, price, coins } = premiumCourse

    const { ETheme } = useContext(ThemeContext)
    const [coursNames, setCourseNames] = useState([])
    const [Lcoins, setLcoins] = useState(0)
    const [coupon, setCoupon] = useState(false)
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

                        <div className="card  bg-black opacity-70  shadow-xl">
                            <div className="card-body ">
                                <h2 className="card-title mx-auto text-white ">Offers and Achievements</h2>
                                <p className='text-white'>You Have {Lcoins} coins</p>
                            </div>
                        </div>
                        {
                            coursNames.map(courses => <LeftNav key={courses.categoryId} courseAll={courses}></LeftNav>)
                        }
                    </div>
                </div>
            </div>
            <div className={`lg:col-span-4 xl:col-span-3 `}>

                <div className='h-screen '>
                    <div className={`${coupon ? "block" : "hidden"} `}>
                        <h1>there willl be something</h1>
                        <div className="mockup-window border border-base-300">
                            <div className="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
                        </div>
                    </div>



                    <div className="card xl:card-side bg-transparent shadow-xl mt-7 sticky top-20">
                        <figure><img className='h-full w-full' src={image} alt="Album" /></figure>


                        <div className="card-body">
                            <h2 className="card-title font-bold text-xl">Course : {title}</h2>

                            <div className='flex justify-center items-center'><p className='flex justify-left items-center text-xl'>Price: {price}  <FaDollarSign ></FaDollarSign> / {coins} <FaCoins className='ml-2'></FaCoins> </p>
                                <button className='btn btn-outline btn-primary font-bold'><FaArrowLeft className='mr-2'></FaArrowLeft> Get Course</button>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni possimus laudantium, quod quae praesentium error porro maxime numquam laborum exercitationem dolor accusamus voluptates delectus, perspiciatis, soluta eius sunt omnis voluptatum.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PremiumAccess;