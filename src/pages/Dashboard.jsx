import React from 'react';
import { useAuth, UserButton, useUser } from '@clerk/clerk-react';

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <UserButton />
      <h1>Welcome to your Dashboard, {user?.firstName}!</h1>
    </div>
  );
};

export default Dashboard;
