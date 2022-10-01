import React from 'react'
import Quantity from '../shared/Quantity';
import { MdDelete } from 'react-icons/md';
import CartTableRow from './CartTableRow';

const CartTable = () => {
  return (
      <div className='my-5 '>
          <table className="w-full md:table hidden">
              {/* Table Head  */}
              <thead className='bg-gray-100 p'>
                  <tr className="text-left">
                      <th className="text-title "></th>
                      <th className="text-title py-5">Product</th>
                      <th className="text-title py-5">Price</th>
                      <th className="text-title py-5">Quantity</th>
                      <th className="text-title py-5">Total</th>
                  </tr>
              </thead>
              {/* Table body  */}
              <tbody>
                 <CartTableRow/>
              </tbody>
          </table>

          {/* for small devices */}
          <div className="md:hidden  flex">
              <div>
                  <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Fi0.wp.com%2Fdemo4.drfuri.com%2Ffarmart2%2Fwp-content%2Fuploads%2Fsites%2F11%2F2020%2F02%2F04_4a.jpg%3Fresize%3D300%252C300%26ssl%3D1&w=384&q=75" alt="" className='w-28 h-28' />
              </div>
              <div className="flex-grow space-y-1">
                  <h1 className="text-lg font-bold text-title">Soft Mochi & Galeot Ice Cream</h1>
                  <p className="text-sm text-gray-500">Colors: Black</p>
                  <p className="text-sm text-gray-500">Sizes: M</p>
                  <p className="text-sm text-gray-500">Price: <span className='text-primary'>$100</span> </p>
              </div>
              <div className='mt-4'>
                  <MdDelete className='text-2xl cursor-pointer'/>
              </div>
          </div>
    </div>
  )
}

export default CartTable