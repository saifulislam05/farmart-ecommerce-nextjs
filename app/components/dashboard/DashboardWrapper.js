import React from 'react'
import DashboardNavigation from './DashboardNavigation'

const DashboardWrapper = ({children}) => {
    return (
        <div className="bg-white py-10 px-5">
            <div className="mx-auto max-w-5xl">
                <div className="flex flex-nowrap md:flex-wrap">
                    <div className="md:w-1/4 w-full">
                        <DashboardNavigation/>
                    </div>
                    <div className="flex-1">
                        {children}
                    </div>
                </div>
            </div>
  </div>
        )
}

export default DashboardWrapper