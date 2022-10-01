import React from 'react'

const Quantity = () => {
    return (
        <div className="flex  border">
            <button className="w-8  flex items-center bg-[#F5F5F5] justify-center">-</button>

            <div className='flex-grow flex items-center justify-center'>1</div>

            <button className="w-8  flex items-center bg-[#F5F5F5] justify-center">+</button>
        </div>
    )
}

export default Quantity