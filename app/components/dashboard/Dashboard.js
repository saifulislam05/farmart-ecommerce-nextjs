import React from 'react'


const Dashboard = () => {
    return (
      <div className="px-5">
        <h1 className='text-center text-xl font-bold mb-4' >Welcome to your Dashboard</h1>
        <img
          className='rounded-xl w-2/5 mx-auto '
          loading="lazy"
          src="images/dashboard.gif"
          alt="personal setting"
        />
       
      </div>
    );
}

export default Dashboard