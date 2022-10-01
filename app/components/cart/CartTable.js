import React from 'react'
import Quantity from '../shared/Quantity';
import { MdDelete } from 'react-icons/md';
import CartTableRow from './CartTableRow';
import CartTableMobile from './CartTableMobile';

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
              {/* Table body   */}
              <tbody>
                 <CartTableRow/>
              </tbody>
          </table>

          {/* for small devices */}
      <CartTableMobile/>
      <CartTableMobile/>
      <CartTableMobile/>
    </div>
  )
}

export default CartTable