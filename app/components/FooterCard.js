import React from 'react'

const FooterCard = ({ title, subtitle, image }) => {
    return (
        <div className='flex gap-5 items-center'>
            <img
                loading='lazy'
                src={image}
                className='w-10 h-10 object-contain'
            />
            <div>
                <h5 className='text-lg font-bold'>{title}</h5>
                <span className='text-sm'>{subtitle}</span>
            </div>
        </div>
    )
}

export default FooterCard