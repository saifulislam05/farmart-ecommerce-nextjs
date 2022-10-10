import React from 'react'

const YourOrders = () => {
  return (
    <div>
      <h3 className="text-2xl mb-4 ">Your Orders</h3>
      <div className="bg-gray-100  p-5 rounded-md">
        <div className="flex justify-between border-b">
          <h2 className="text-lg font-bold">PRODUCT</h2>
          <h2 className="text-lg font-bold">TOTAL</h2>
        </div>
        <div className="py-5 border-b space-y-3 bg-white">

          <div className="flex justify-between border-b py-5">
            <h2 className="text-base font-medium">Soft Mochi & Galeto Ice Cream <span className="text-gray-400">(x2)</span></h2>
            <h2 className="text-base font-semibold ml-2">$41.39</h2>
          </div>

          <div className="flex justify-between border-b py-5">
            <h2 className="text-base font-medium">Soft Mochi & Galeto Ice Cream <span className="text-gray-400">(x1)</span></h2>
            <h2 className="text-base font-semibold ml-2">$41.39</h2>
          </div>

          <div className="flex justify-between border-b py-5">
            <h2 className="text-base font-medium">Soft Mochi & Galeto Ice Cream <span className="text-gray-400">(x1)</span></h2>
            <h2 className="text-base font-semibold ml-2">$41.39</h2>
          </div>

        </div>
        <div className="flex justify-between py-5">
          <h2 className="text-xl font-bold">Subtotal</h2>
          <h2 className="text-xl font-bold text-green">$200.00</h2>
        </div>
      </div>
    </div>
  );
}

export default YourOrders