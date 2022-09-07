import React from 'react'
import { setBackgroundImage } from '../../utils/helpers'
const HomeHero = () => {

    return (
        <div>
            <section className='py-10' style={setBackgroundImage('/images/hero-bg.jpg')}>
                <div className="container">
                    <div className="flex gap-8 flex-wrap">
                        {/* Hero left banner  */}
                        <div className=' flex-1  md:py-14 md:px-12 py-10 px-6 rounded-lg  ' style={setBackgroundImage('/images/hero-s-1.jpg')}>
                            <div className='flex flex-col justify-between h-full'>
                                <div>
                                    <h2 className="md:text-3xl sm:text-2xl text-xl font-bold text-title">
                                        Active Summer With <br /> Juice Milk 300ml
                                    </h2>
                                    <p className='text-color md:mt-7 mt-4'>New arrivals with nature fruits, juice <br />milk, essendtlm for summer</p>
                                </div><a href="/" className='btn-white md:mt-14 mt-10'>Shop Now</a>
                            </div>

                        </div>
                        {/* Hero Right banner  */}
                        <div className='md:w-1/3 w-full md:py-14 md:px-12 py-10 px-6 rounded-lg ' style={setBackgroundImage('/images/hero-s-2.jpg', { backgroundPosition: 'bottom right', backgroundColor: '#fac251', backgroundSize: "unset" })}>
                            <div className='flex flex-col justify-between h-full'>
                                <div>
                                    <h2 className="md:text-3xl sm:text-2xl text-xl font-bold text-title">
                                        20% SALE OFF
                                    </h2>
                                    <p className='text-title md:mt-7 mt-4 font-semibold'>synthetic seeds <br /> net 2.0 OZ</p>
                                </div>
                                <a href="/" className='btn-white md:mt-14 mt-10'>Shop Now</a>

                            </div>


                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default HomeHero