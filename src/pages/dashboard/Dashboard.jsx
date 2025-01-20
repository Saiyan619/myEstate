import React from 'react';
import { useAuth, UserButton, useUser } from '@clerk/clerk-react';
import Nav from '../../GlobalComponents/Nav'
import ProfileCards from './components/ProfileCards';
import HeroDashboard from './components/HeroDashboard';
import EditDetails from './components/EditDetails';

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div>
      <Nav />
      <div className='p-4'>
      <HeroDashboard />
      <div className='mt-5'>
        <ProfileCards />
        </div>

       
        </div>
    </div>
  );
};

export default Dashboard;
