import FooterCard from '../FooterCard'

const ProductDetails = ({ price = 30.23, oldPrice }) => {
    return (
        <div className='py-12 bg-[#f5f5f5]'>
            <div className="container">
                <div className="p-7 bg-white rounded-2xl">
                    <div className="flex flex-wrap lg:flex-row flex-col lg:gap-0 gap-7">
                        {/* Image  */}
                        <div className="lg:w-2/5 w-full lg:border-r">
                            <img src=" https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2020/02/02_1a.jpg?resize=800%2C600&ssl=1" alt="" loading="lazy" />
                        </div>

                        {/* Details */}
                        <div className="lg:w-2/5 w-full px-5 md:pl-10 pl-0">
                            <div className="text-color mb-4">
                                <a href="/">Home</a>
                                <span className="mx-2">/</span>
                                <a href="/">Shop</a>
                                <span className="mx-2">/</span>
                                <a href="/">Fruits</a>
                                <span className="mx-2">/</span>

                                <span className="text-title">Bar S - Classic Bun Lenght Franks</span>
                            </div>
                            <h4 className='md:text-xl text-base font-bold mb-2 text-orange'>MartFury</h4>
                            <h1 className="text-title md:text-3xl text-xl font-semibold mb-5">Bar S - Classic Bun Lenght Franks</h1>
                            <span className="text-color text-xs">⭐⭐⭐⭐⭐(1 customer review)</span>

                            <div className="mt-3">

                                {/* product contaty */}
                                <span className="text-sm text-color mb-2 block">
                                    500g
                                </span>
                                {/* product rate */}
                                <div className="flex items-center gap-1">

                                    <span className={`text-xl font-extrabold ${oldPrice ? 'text-orange' : 'text-green'}`} >
                                        ${price}
                                    </span>
                                    {oldPrice && (<span className="text-lg line-through text-gray-400">${oldPrice}</span>)}

                                </div>
                            </div>

                            <div className="mt-5 mb-3 bg-[#EBFAE9] w-fit px-4 py-2 border border-[#82d45e]  rounded-md">
                                Availability: <span className="text-green ml-1">In stock</span>
                            </div>
                            <div className="border-t"></div>
                            <div className="my-5">
                                <span className="text-sm pb-2 block text-color">Quantity:</span>
                                <div className="flex gap-2">
                                    <div className="flex  border">
                                        <button className="w-10  flex items-center bg-[#F5F5F5] justify-center">-</button>

                                        <div className='w-10  flex items-center justify-center'>1</div>

                                        <button className="w-10  flex items-center bg-[#F5F5F5] justify-center">+</button>
                                    </div>
                                    <button className='btn-white bg-primary'>
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                            <div className="border-t my-7"></div>
                            <div className="flex flex-col gap-2">
                                <p className='text-gray-900'><span className='text-color'>SKU:</span>#veg20967</p>
                                <p className='text-gray-900'><span className='text-color'>Brand:</span>mangogn</p>
                                <p className='text-gray-900'><span className='text-color'>Vendor</span>MargFury</p>
                                <p className='text-gray-900'><span className='text-color'>Category</span>Breakfast Cereals, Chocolate & Sweets, Crisps, Snacks & Nuts, Food</p>
                                <p className='text-gray-900'><span className='text-color'>Tag</span>Best SEllers</p>
                            </div>

                        </div>
                        <div className="lg:w-1/5 w-full">
                            <div className="bg-[#F3F3F3] px-5 p-7 rounded-md">
                                <FooterCard
                                    image="/icons/f (1).svg"
                                    title="Free Shopping"
                                    subtitle="For all orders over $200"
                                />
                                <div className="border-t my-5"></div>
                                <FooterCard
                                    image="/icons/f (2).svg"
                                    title="1 & 1 Reaturns"
                                    subtitle="Cancelation after 1 day"
                                />
                                <div className="border-t my-5"></div>

                                <FooterCard
                                    image="/icons/f (3).svg"
                                    title="Secure Payment"
                                    subtitle="Gurantee secure apyments"
                                />
                                <div className="border-t my-5"></div>

                            </div>

                            <div className="bg-[#F3F3F3] px-5 mt-5 p-7 rounded-md">
                                <p className="font-bold text-title">Hotline Order:</p>
                                <span className="text-color">Mon - Fri: 7:00 AM - 18:00 PM</span>
                                <p className="text-xl md:text-2xl font-bold text-title mt-5">+8 856 332 65-66</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProductDetails