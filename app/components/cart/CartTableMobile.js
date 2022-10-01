import React from 'react'
import Quantity from '../shared/Quantity'
import { MdDelete } from 'react-icons/md';


const CartTableMobile = () => {
  return (
      <div className="md:hidden  flex gap-3 mb-5 border-b pb-3">
          <div>
              <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Fi0.wp.com%2Fdemo4.drfuri.com%2Ffarmart2%2Fwp-content%2Fuploads%2Fsites%2F11%2F2020%2F02%2F04_4a.jpg%3Fresize%3D300%252C300%26ssl%3D1&w=384&q=75" alt="" className='w-28 h-28' />
          </div>
          <div className="flex-grow space-y-1">
              <h1 className="text-lg font-bold text-title">Soft Mochi & Galeot Ice Cream</h1>
              <p className="text-sm text-gray-500">Colors: Black</p>
              <p className="text-sm text-gray-500">Sizes: M</p>
              <p className="text-sm text-gray-500">Price: <span className='text-primary'>$100</span> </p>
              <div className="pt-3">
                  <Quantity />
              </div>
              <p className="text-sm text-gray-500">Total Price: <span className='text-green'>$100</span> </p>
          </div>

          <div className='mt-2'>
              <MdDelete className='text-2xl cursor-pointer' />
          </div>
      </div>
  )
}

export default CartTableMobile