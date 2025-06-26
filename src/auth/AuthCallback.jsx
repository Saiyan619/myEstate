import { useEffect, useState } from 'react';
import { useUser, useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import GlobalApi from '../Utils/GlobalApi';

const AuthCallback = () => {
  const { user, isLoaded } = useUser();
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  
  useEffect(() => {

      if (user) {
        createAUser()
      } 

  }, [isLoaded, isSignedIn, user, navigate]);
    
  
  const createAUser = async () => {
    console.log("creating user in database.")
        try {
          const userData = {
            clerkId: user?.id,
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.primaryEmailAddress?.emailAddress,
          }
          const response = await GlobalApi.createUser(userData)
          console.log("user created:", response.data)
                  navigate('/');

        } catch (error) {
          setError(false)
          console.error(error)
          throw new Error();
      } 
    
    }
  



  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm text-gray-500">Redirecting to homepage...</p>
        </div>
      </div>
    );
  } else if (isLoaded) {
        return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-2">
            Loading User Data...
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm text-gray-500">Retrieving...</p>
        </div>
      </div>)
  }



  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Setting up your account...
        </h2>
        <p className="text-gray-600">Please wait while we complete your setup.</p>
      </div>
    </div>
  );
};

export default AuthCallback;