import React, { Children } from 'react'
import Auth from '../components/auth';
import DashboardWrapper from '../components/dashboard/DashboardWrapper';
import Breadcrumb from '../components/shared/Breadcrumb';

const DashboardLayout = ({ children }) => {
  const user= {}
  return (
    <main>
      <div className="bg-[#F5F5F5] p-5">
        <div className="mx-auto max-w-5xl">
          <Breadcrumb />
        </div>
      </div>
      {user?( <DashboardWrapper>{children}</DashboardWrapper>):(<Auth/>)}
     
    </main>
  );
};

export default DashboardLayout