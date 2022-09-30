import Link from 'next/link'
import React from 'react'

const Breadcrumb = ({  items  }) => {
  return (
      <div className="text-color">
          
          {items.map((item, index) => (
              <span key={index}>
                  {items.length - 1 !== index ? (
                      <>
                          <Link href={item.href}><a href={item.href}>{item.label}</a></Link>
                          <span className="mx-2">/</span>
                      </>
                  ) : (
                          <span className="text-title">{item.label}</span>
                  )}
                  
    </span>
))}



          
      </div>
  )
}

export default Breadcrumb