import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaCoins, FaDollarSign } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { ThemeContext } from '../layout/Main/Main';

const PremiumAccess = () => {
    const premiumCourse = useLoaderData()
    const { title, image, Duration, lessons, price, coins } = premiumCourse

    const { ETheme } = useContext(ThemeContext)
    const { user } = useContext(AuthContext)

    const [premiumState, setPremiumState] = useState('')
    const [coupon, setCoupon] = useState(true)
    const [Lcoins, setLcoins] = useState(0)
    const [buyButton, setBuyButton] = useState(false)

    const generateRandomNumbers = () => {
        const randomNumber = Math.round(Math.random() * 10000);
        if (randomNumber && randomNumber > 10 && randomNumber < 2000) {
            return randomNumber
        }
        else {
            return generateRandomNumbers()
        }
    }


    const handleCouponCoins = () => {
        setCoupon(!coupon)
        const achievedCoins = generateRandomNumbers()
        setLcoins(achievedCoins)

    }
    const handleBuying = () => {
        if (buyButton) {
            return toast.error("Already collected")
        }
        const remainingCoins = Lcoins - coins
        if (remainingCoins < 0) {
            setPremiumState(`Hi there! Bad Luck You have not got enough coins to get Premium Access. But Don't worry! I use Google pay, Bkash, Nagad and Online transaction! Send me ${price} Dollars and you will become premium.`)
            return toast.error("Sorry!! You have no access")
        }
        else {
            setPremiumState(`Wow! You are really a lucky client. You got our premium course of ${title}. You have just saved ${price} Dollars!`)
            setBuyButton(true)
            setLcoins(remainingCoins)
            return toast.success("Congrats! You Succeessfully got the Course")
        }

    }



    return (

        <div className={`flex flex-col lg:grid lg:grid-cols-6 xl:grid-cols-4 gap-4 mt-10`} >


            <div className={`lg:col-span-2 xl:col-span-1 `}>
                <div className={`mt-6 sticky top-20 h-auto`}>
                    <div className={`${ETheme ? 'themeLight' : "themeDark"}  rounded-2xl md:w-3/4 mx-auto lg:w-full `}>
                        <div className="card  bg-black opacity-70  shadow-xl ">
                            <div className="card-body text-white">
                                <h2 className="card-title mx-auto  ">Offers and Achievements</h2>
                                <p className=''>You Have {Lcoins} coins</p>
                                <p className=''>{premiumState}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className={`lg:col-span-4 xl:col-span-3 `}>

                <div className=' md:w-3/4 mx-auto'>
                    <div className={`${coupon ? "block" : "hidden"} `}>

                        <div className={`card w-full  shadow-xl image-full ${ETheme ? 'themeLight' : "themeDark"}`}>
                            <figure><img src="" alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-green-500">Offer!</h2>
                                <p>Copngratulation!! You Have won a Lucky Coupon Card. Click on draw to scratch the Coupon.</p>
                                <div className="card-actions justify-end">

                                    <label htmlFor="my-modal-6" className="btn modal-button btn-primary font-bold" onClick={handleCouponCoins}>Scratch now !</label>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="card xl:card-side bg-transparent shadow-xl mt-7 ">
                        <figure className='xl:w-1/2'><img className='h-full w-full' src={image} alt="Album" /></figure>


                        <div className="card-body border">
                            <h1 className='text-center font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl  mb-5 underline'>Get Premium Access</h1>
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

            <div >
                <input type="checkbox" id="my-modal-6" className="modal-toggle " />
                <div className="modal modal-bottom sm:modal-middle ">

                    <div className="modal-box ">

                        <h3 className="font-bold text-lg ">Hurray !!! {user?.displayName || user?.email} </h3>
                        <p className="py-4 text-red-700">Hurray!!! You have got {Lcoins} coins. Amazing! Now u can use them to buy courses.</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn btn-error">Claim Now</label>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default PremiumAccess;