import React from 'react';
import { useAuth, UserButton, useUser } from '@clerk/clerk-react';
import Nav from '../GlobalComponents/Nav'

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div>
      <Nav />
      <UserButton />
      <h1>Welcome to your Dashboard, {user?.firstName}!</h1>
    </div>
  );
};

export default Dashboard;
