import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import RequireAuth from './auth/RequireAuth';
import Dashboard from './pages/Dashboard';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import { useUser } from '@clerk/clerk-react';
import HomePage from './pages/home/HomePage';


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
      <Route path="/" element={<SignIn />} />
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
      <Route path="/homepage"
        element={
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default App;
