import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftNav from '../Courses/LeftNav/LeftNav';
import { ThemeContext } from '../layout/Main/Main';

const PremiumAccess = () => {
    const premiumCourse = useLoaderData()
    const { ETheme } = useContext(ThemeContext)
    const [coursNames, setCourseNames] = useState([])
    const [coins, setCoins] = useState(0)
    useEffect(() => {
        fetch(`https://b610-learning-platform-server-nabinchowdhury.vercel.app/courses`)
            .then(res => res.json())
            .then(data => setCourseNames(data))
    })
    return (
        <div className='flex flex-col lg:grid lg:grid-cols-6 xl:grid-cols-4 gap-4 ' >
            <div className='lg:col-span-2 xl:col-span-1 '>
                <div className={`mt-20 sticky top-20 h-auto`}>
                    <div className={`${ETheme ? 'themeLight' : "themeDark"}  rounded-2xl `}>

                        <div className="card  bg-black opacity-70  shadow-xl">
                            <div className="card-body ">
                                <h2 className="card-title mx-auto text-white border">Offers and Achievements</h2>
                                <p className='text-white'>You Have {coins} coins</p>

                            </div>
                        </div>
                        {
                            coursNames.map(courses => <LeftNav key={courses.categoryId} courseAll={courses}></LeftNav>)
                        }
                    </div>
                </div>
            </div>
            <div className={`lg:col-span-4 xl:col-span-3`}>


                {

                }

            </div>
        </div>
    );
};

export default PremiumAccess;