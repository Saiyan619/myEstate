import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import RequireAuth from './auth/RequireAuth';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import { useUser } from '@clerk/clerk-react';


const App = () => {
  const { user } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    naVtoDashboard()
  }, [user])
  
  const naVtoDashboard = async () => {
    if (user) {
      navigate('/dashboard')
    }
  }
  return (
    <Routes>
      
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in/*" element={<SignIn />} />
      <Route path="/sign-up/*" element={<SignUp />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default App;
