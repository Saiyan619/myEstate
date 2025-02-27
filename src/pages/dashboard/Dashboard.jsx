import React, { useState, useEffect } from 'react';
import { User, Home, MapPin, Phone, Mail, Calendar, BookmarkIcon, Building, ExternalLink, Eye } from 'lucide-react';
import Nav from '../../GlobalComponents/Nav';
import { useParams } from 'react-router-dom';
import GlobalApi from '../../Utils/GlobalApi';
import UserPropertyModal from './userProperty/UserPropertyModal';

const UserDashboard = () => {
  const { id } = useParams()
    const [userDetails, setUserDetails] = useState({})
  
  const fetchMyDetails = async () => {
    try {
      const response = await GlobalApi.getProfileByClerkId(id)
      console.log(response.data)
      setUserDetails(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchMyDetails()
  }, [id])
  
  // const [userDetails, setUserDetails] = useState({
  //   _id: '67bcb1114b9041d0fee09c42', 
  //   clerkId: 'user_2tUtFlLQUmW5Gqpdjbs2YemAuDv', 
  //   __v: 2, 
  //   createdAt: '2025-02-24T17:49:04.783Z', 
  //   email: 'arokoyujr10@gmail.com',
  //   firstName: 'arokoyu',
  //   lastName: 'olaniyi',
  //   location: ' ',
  //   phone: 0,
  //   postedHouses: ['67bcc1676b3dbfa2eff1428e', '67bcc1acf809eb3a9d6c6e79'],
  //   savedHouses: [],
  //   updatedAt: '2025-02-24T17:49:04.784Z',
  //   userId: 'user_2tUtFlLQUmW5Gqpdjbs2YemAuDv'
  // });

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Function to generate a random "last updated" time for demo purposes
  const getRandomTimeAgo = () => {
    const times = ['2 days ago', '1 week ago', '3 hours ago', 'Just now', 'Yesterday'];
    return times[Math.floor(Math.random() * times.length)];
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <button onClick={fetchMyDetails} className='btn'>test api</button>
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 p-6 text-white">
            <h1 className="text-2xl font-bold">User Dashboard</h1>
            <p className="text-blue-100">Manage your profile and properties</p>
          </div>

          {/* User Profile Card */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* User Avatar & Basic Info */}
              <div className="md:w-1/3">
                <div className="bg-gray-50 rounded-lg p-6 shadow border border-gray-200">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <User size={48} className="text-blue-600" />
                    </div>
                    <h2 className="text-xl font-semibold">
                      {userDetails?.firstName ?? '?'} {userDetails?.lastName ?? '?'}
                    </h2>
                    <p className="text-gray-500 mt-1">Member since {formatDate(userDetails?.createdAt)}</p>
                    <div className="mt-4 w-full">
                      <div className="flex items-center mt-2">
                        <Mail className="text-gray-400 mr-2" size={16} />
                        <span className="text-gray-600">{userDetails?.email ?? 'No email provided'}</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <MapPin className="text-gray-400 mr-2" size={16} />
                        <span className="text-gray-600">{userDetails?.location?.trim() ? userDetails.location : 'No location provided'}</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <Phone className="text-gray-400 mr-2" size={16} />
                        <span className="text-gray-600">{userDetails?.phone ? userDetails.phone : 'No phone provided'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Properties */}
              <div className="md:w-2/3">
                <div className="bg-gray-50 rounded-lg p-6 shadow border border-gray-200 h-full">
                  <h3 className="text-lg font-semibold mb-4">Property Summary</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Posted Houses */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center">
                        <div className="p-2 bg-blue-100 rounded-md mr-3">
                          <Building className="text-blue-600" size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-500">Posted Houses</h4>
                          <p className="text-lg font-semibold">{userDetails?.postedHouses?.length ?? 0}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Saved Houses */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center">
                        <div className="p-2 bg-green-100 rounded-md mr-3">
                          <BookmarkIcon className="text-green-600" size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-500">Saved Houses</h4>
                          <p className="text-lg font-semibold">{userDetails?.savedHouses?.length ?? 0}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Posted Houses - Enhanced Component */}
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-md font-semibold">Your Properties</h4>
                      <UserPropertyModal id={id} postedHouses={userDetails?.postedHouses} />
                      </div>
                    
             
                  </div>
                </div>
              </div>
            </div>
            
            {/* Account Details */}
            <div className="mt-6">
              <div className="bg-gray-50 rounded-lg p-6 shadow border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Account Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="font-medium text-gray-500 w-32">User ID:</div>
                    <div className="text-gray-700 font-mono text-sm truncate">{userDetails?.userId ?? '?'}</div>
                  </div>
                  <div className="flex items-center">
                    <div className="font-medium text-gray-500 w-32">Clerk ID:</div>
                    <div className="text-gray-700 font-mono text-sm truncate">{userDetails?.clerkId ?? '?'}</div>
                  </div>
                  <div className="flex items-center">
                    <div className="font-medium text-gray-500 w-32">Created:</div>
                    <div className="text-gray-700">{formatDate(userDetails?.createdAt)}</div>
                  </div>
                  <div className="flex items-center">
                    <div className="font-medium text-gray-500 w-32">Last Updated:</div>
                    <div className="text-gray-700">{formatDate(userDetails?.updatedAt)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;