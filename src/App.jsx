import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './auth/RequireAuth';
import Dashboard from './pages/dashboard/Dashboard';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import HomePage from './pages/home/HomePage';
import CreateHouse from './pages/HousePosting/CreateHouse';
import HouseDetails from './pages/houseDetails/HouseDetails';
import UserProfile from './pages/userProfile/UserProfile';


const App = () => {


  return (
    <Routes>
      
      {/* Public Routes */}
      <Route path="/sign-in/*" element={<SignIn />} />
      <Route path="/sign-up/*" element={<SignUp />} />

      {/* Protected Routes */}
      <Route path="/"
        element={
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        }
      />

      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/:id"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />

      <Route
        path="/post-house"
        element={
          <RequireAuth>
            <CreateHouse />
          </RequireAuth>
        }
      />    
      
      <Route
        path="/house/:id"
        element={
          <RequireAuth>
            <HouseDetails />
          </RequireAuth>
        }
      />  
      
      <Route
        path="/user/:id"
        element={
          <RequireAuth>
            <UserProfile />
          </RequireAuth>
        }
      />
     
    </Routes>
  );
};

export default App;
