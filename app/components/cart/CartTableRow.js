import React from 'react'
import Quantity from '../shared/Quantity';
import { MdDelete } from 'react-icons/md';

const CartTableRow = () => {
  return (
      <tr className='border-b border-r border-l'>
                      <td className="py-5 pl-3">
                          <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Fi0.wp.com%2Fdemo4.drfuri.com%2Ffarmart2%2Fwp-content%2Fuploads%2Fsites%2F11%2F2020%2F02%2F04_4a.jpg%3Fresize%3D300%252C300%26ssl%3D1&w=384&q=75" alt="" className='w-2h-28 h-28 object-cover rounded-md' />
                      </td>
                          <td className="py-5"> 
                          <div className="flex items-center">
                              <div className="">
                                  <h1 className="text-lg font-bold text-title">Product Name</h1>
                                  <p className="text-sm text-gray-500">Colors: Black</p>
                                  <p className="text-sm text-gray-500">Sizes: M</p>
                              </div>
                          </div>
                      </td>
                      <td className="py-5">$ 100</td>
                      <td className="py-5">
                          <div className='w-fit'> 
                          <Quantity/>
                          </div>
                      </td>
                      <td className="py-5 ">
                          <MdDelete className='text-2xl cursor-pointer'/>
                      </td>
                  </tr>
            
  )
}

export default CartTableRow