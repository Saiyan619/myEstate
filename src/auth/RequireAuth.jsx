import React from 'react';
import { useAuth, RedirectToSignIn } from '@clerk/clerk-react';

const RequireAuth = ({ children }) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return <>{children}</>;
};

export default RequireAuth;
