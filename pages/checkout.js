
import React from 'react'
import BillingInfo from '../app/components/checkouts/BillingInfo'
import YourOrders from '../app/components/checkouts/YourOrders'
import Breadcrumb from '../app/components/shared/Breadcrumb'

const Checkout = () => {
    return (
        <main>
            <div className=" p-5">
                <div className="mx-auto max-w-5xl">
                    <Breadcrumb/>
                </div>

            <div className="p-5">
                <div className="mx-auto max-w-5xl mt-10">
                    <h1 className="text-4xl text-center text-title font-bold mb-10 ">Checkout</h1>
                        <div className="flex flex-wrap md:flex-nowrap">
                            <div className="w-fulll md:w-[60%]">
                                <BillingInfo/>
                            </div>
                            <div className="w-fulll md:w-[40%]">
                                <YourOrders/>
                            </div>
</div>
                </div>
            </div>
            </div>
        </main>
    )
}

export default Checkout