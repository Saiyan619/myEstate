import { useAuth, RedirectToSignIn } from '@clerk/clerk-react';

const RequireAuth = ({ children }) => {
  const { isSignedIn, isLoaded } = useAuth();
 if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (!isSignedIn) {
    return <RedirectToSignIn redirectUrl="/auth/callback" />;
  }
  
  return <>{children}</>;
};

export default RequireAuth;