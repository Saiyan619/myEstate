import React from 'react';
import { useAuth, UserButton, useUser } from '@clerk/clerk-react';
import Nav from '../../GlobalComponents/Nav'
import ProfileCards from './components/ProfileCards';
import HeroDashboard from './components/HeroDashboard';

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div>
      <Nav />
      {/* <UserButton /> */}
      <HeroDashboard />
      {/* <h1>Welcome to your Dashboard, {user?.firstName}!</h1> */}

      <div>
        <ProfileCards />
      </div>
    </div>
  );
};

export default Dashboard;
