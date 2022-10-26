import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaCoins, FaDollarSign } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { ThemeContext } from '../layout/Main/Main';

const PremiumAccess = () => {
    const premiumCourse = useLoaderData()
    console.log(premiumCourse)
    const { id, title, image, Duration, lessons, price, coins } = premiumCourse

    const { ETheme } = useContext(ThemeContext)
    const [Lcoins, setLcoins] = useState(0)
    const [coupon, setCoupon] = useState(true)
    const [buyButton, setBuyButton] = useState(false)

    const handleCouponCoins = () => {
        setCoupon(!coupon)
    }
    const handleBuying = () => {
        if (buyButton) {
            return toast.error("Already collected")
        }
        toast.success("You Succeessfully got the Course")
        setBuyButton(true)
    }

    return (
        <div className={`flex flex-col lg:grid lg:grid-cols-6 xl:grid-cols-4 gap-4 mt-10`} >


            <div className={`lg:col-span-2 xl:col-span-1 `}>
                <div className={`mt-6 sticky top-20 h-auto`}>
                    <div className={`${ETheme ? 'themeLight' : "themeDark"}  rounded-2xl w-3/4 mx-auto lg:w-full `}>
                        <div className="card  bg-black opacity-70  shadow-xl ">
                            <div className="card-body ">
                                <h2 className="card-title mx-auto text-white ">Offers and Achievements</h2>
                                <p className='text-white'>You Have {Lcoins} coins</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className={`lg:col-span-4 xl:col-span-3 `}>

                <div className='lg:h-screen w-3/4 mx-auto'>
                    <div className={`${coupon ? "block" : "hidden"} `}>
                        <h1>there willl be something</h1>
                        <div className={`card w-full  shadow-xl image-full ${ETheme ? 'themeLight' : "themeDark"}`}>
                            <figure><img src="" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-green-500">Offer!</h2>
                                <p>Copngratulation!! You Have won a Lucky Coupon Card. Click on draw to scratch the Coupon.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary" onClick={handleCouponCoins}>Scratch now</button>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="card xl:card-side bg-transparent shadow-xl mt-7 sticky top-20">
                        <figure className='xl:w-1/2'><img className='h-full w-full' src={image} alt="Album" /></figure>


                        <div className="card-body">
                            <h2 className="card-title font-bold text-xl">Course : {title}</h2>
                            <p className='flex justify-left items-center text-xl'>Price: {price}  <FaDollarSign ></FaDollarSign> / {coins} <FaCoins className='ml-2'></FaCoins> </p>

                            <button className={`btn btn-outline btn-secondary font-bold `} onClick={handleBuying}> {buyButton ? "Collected" : "Get Course"} <FaDollarSign className='ml-2'></FaDollarSign></button>

                        </div>
                    </div>
                    <div className="stats w-full stats-vertical md:stats-horizontal shadow ">

                        <div className="stat place-items-center">
                            <div className="stat-title">Duration</div>
                            <div className="stat-value text-xl">{Duration}/day</div>
                            <div className="stat-desc">From January 1st to February 1st</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Lessons</div>
                            <div className="stat-value text-secondary text-xl">{lessons}/week</div>
                            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">On completion</div>
                            <div className="stat-value flex justify-left items-center text-xl">{coins / 10} <FaCoins className='ml-2'></FaCoins></div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default PremiumAccess;