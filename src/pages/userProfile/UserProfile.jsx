import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from '@clerk/clerk-react'
import { MapPin, Phone, Mail, Home, Bookmark, Calendar, Edit, User } from 'lucide-react';
import Nav from '../../GlobalComponents/Nav'
import UserProfileModal from './UserProfileModal'



const UserProfile = () => {
    const { id } = useParams()
    const {user} = useUser()

    useEffect(() => {
     getUserDetails()
    }, [])
    

    const [userDetails, setuserDetails] = useState({})

  
    const getUserDetails = async () => {
        try {
            if (!id) {
                console.log("id does not exist")
            }
            const response = await GlobalApi.getProfileByClerkId(id)
            console.log(response.data)
            setuserDetails(response.data)
            setPermit()
        } catch (error) {
            console.error(error)
        }
    }

    const setPermit = () => {
        if (user?.id === userDetails?.clerkId) {
            console.log("this is your acc", userDetails?.savedHouses)
        } else {
            console.log("this is not your acc")
        }
    }
  // Format date for better display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32"></div>
            <div className="px-6 py-4 flex flex-col md:flex-row items-center md:items-end -mt-16 relative">
              <div className="bg-white p-2 rounded-full shadow-lg">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  <User size={48} />
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 flex-1 text-center md:text-left">
                <h1 className="text-2xl font-bold text-gray-900 capitalize">{userDetails.firstName} {userDetails.lastName}</h1>
                <p className="text-gray-600 flex items-center justify-center md:justify-start mt-1">
                  <MapPin size={16} className="mr-1" />
                  {userDetails.location ? userDetails.location : 'No location provided'}
                </p>
                <p className="text-sm text-gray-500 mt-1">Member since {formatDate(userDetails.createdAt)}</p>

              </div>

            </div>
          </div>

          {/* Profile Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-md p-6 col-span-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="mr-3 text-blue-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-800">{userDetails.email}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="mr-3 text-blue-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-800">{userDetails.phone ? userDetails.phone : 'No phone provided'}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="mr-3 text-blue-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-800">{userDetails.location ? userDetails.location : 'No location provided'}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Activity Summary */}
            <div className="bg-white rounded-lg shadow-md p-6 col-span-2">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Activity</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-2">
                    <Home className="mr-2 text-blue-600" size={20} />
                    <h3 className="font-medium text-blue-900">Properties Posted</h3>
                  </div>
                  <p className="text-3xl font-bold text-blue-600">{userDetails?.postedHouses?.length}</p>
                  <p className="text-sm text-blue-700 mt-1">Active listings</p>
                <UserProfileModal id={id} postedHouses={userDetails?.postedHouses} />
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <div className="flex items-center mb-2">
                    <Bookmark className="mr-2 text-purple-600" size={20} />
                    <h3 className="font-medium text-purple-900">Saved Properties</h3>
                  </div>
                  <p className="text-3xl font-bold text-purple-600">{userDetails?.savedHouses?.length}</p>
                  <p className="text-sm text-purple-700 mt-1">Saved listings</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 md:col-span-2">
                  <div className="flex items-center mb-2">
                    <Calendar className="mr-2 text-gray-600" size={20} />
                    <h3 className="font-medium text-gray-900">Account Details</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-500">User ID</p>
                      <p className="text-gray-800 truncate" title={userDetails.userId}>
                        {userDetails?.userId?.substring(0, 12)}...
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Created</p>
                      <p className="text-gray-800">{formatDate(userDetails.createdAt)}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Last Updated</p>
                      <p className="text-gray-800">{formatDate(userDetails.updatedAt)}</p>
                    </div>
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

export default UserProfile;