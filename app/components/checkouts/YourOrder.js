
import React from "react";
import { FormBtn } from "../shared/Form";

const YourOrder = ({ placeOrder }) => {

    return (
      <div>
        <h3 className="text-2xl mb-4 ">Your Orders</h3>
        <div className="bg-gray-50  p-5 rounded-md">
          <div className="flex justify-between border-b">
            <h2 className="text-lg font-bold">PRODUCT</h2>
            <h2 className="text-lg font-bold">TOTAL</h2>
          </div>
          <div className="space-y-3 bg-white">
            <div className="flex justify-between border-b py-5 px-5">
              <h2 className="text-base font-medium">
                Soft Mochi & Galeto Ice Cream{" "}
                <span className="text-gray-400">(x2)</span>
              </h2>
              <h2 className="text-base font-semibold ml-2">$41.39</h2>
            </div>
            <div className="flex justify-between border-b py-5 px-5">
              <h2 className="text-base font-medium">
                Soft Mochi & Galeto Ice Cream{" "}
                <span className="text-gray-400">(x2)</span>
              </h2>
              <h2 className="text-base font-semibold ml-2">$41.39</h2>
            </div>
            <div className="flex justify-between border-b py-5 px-5">
              <h2 className="text-base font-medium">
                Soft Mochi & Galeto Ice Cream{" "}
                <span className="text-gray-400">(x2)</span>
              </h2>
              <h2 className="text-base font-semibold ml-2">$41.39</h2>
            </div>
          </div>

          {/* Total amount as per product  */}

          <div className="flex justify-between py-5 border-b">
            <h2 className="text-lg font-bold">Subtotal</h2>
            <h2 className="text-lg font-bold text-green">$200.00</h2>
          </div>

          <div className="py-5 border-b space-y-3">
            <div className="text-title">Shipping</div>
            <ul className="">
              <li className="">- Flat rate</li>
            </ul>
          </div>
          <div className="flex justify-between py-5 border-b">
            <h2 className="text-lg font-bold">Total</h2>
            <h2 className="text-lg font-bold text-green">$200</h2>
          </div>
          <div className="pt-5">
            <h2 className="text-lg font-bold">Payment method</h2>
            <p className="text-gray-500 mt-3"> - Pay with a Credit/Debit Card</p>
          </div>
        </div>
        <FormBtn
          title="Place Order"
          className="w-full py-3 mt-5"
          onClick={placeOrder}
        />

      </div>
    )
  
}

export default YourOrder
