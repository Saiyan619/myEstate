import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from '../../Utils/GlobalApi';
import ContactOwnerForm from './ContactOwnerForm';
import Nav from '../../GlobalComponents/Nav';
import { Edit } from 'lucide-react';
import EditHouseModal from './EditHouseModal';
import DeleteHouse from './DeleteHouse';
import { useUser } from '@clerk/clerk-react';

const HouseDetails = () => {
  const { user } = useUser();
  const { id } = useParams();
  const [houseDetails, setHouseDetails] = useState({});
  const baseUrl = 'http://localhost:5000/';

  useEffect(() => {
    getHouseDetail();
  }, [id]);

  // Function to get the details of the house
  const getHouseDetail = async () => {
    try {
      if (!id) {
        console.error("getHouseDetails() Error: ID is undefined");
        return;
      }
      const response = await GlobalApi.getHouseDetails(id);
      console.log(response.data);
      setHouseDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // After a successful edit, refresh the house details
  const refreshDetails = () => {
    getHouseDetail();
  };

  return (
    <div>
            <Nav />

        <div className="container mx-auto px-4 py-8">
      
      {/* Image Gallery */}
      <div className="carousel w-full rounded-lg overflow-hidden mb-8 max-h-96">
        {houseDetails?.images?.map((item, index) => (
          <div key={index} id={`slide${index}`} className="carousel-item relative w-full">
            <img 
              src={`${baseUrl}${item}`} 
              alt={`House image ${index + 1}`} 
              className="w-full object-cover h-96" 
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#slide${index === 0 ? houseDetails.images.length - 1 : index - 1}`} className="btn btn-circle">❮</a>
              <a href={`#slide${index === houseDetails.images.length - 1 ? 0 : index + 1}`} className="btn btn-circle">❯</a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Property details */}
      <div className="flex justify-between sm:p-10 flex-wrap">
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-2">{houseDetails?.title}</h1>
          <p className="text-2xl text-primary font-semibold mb-4">
            ${houseDetails?.price?.toLocaleString() || 'N/A'}
            </p>
            <p>{houseDetails?.type}</p>
          <p className="mb-4 mt-4">
            Owned By: {houseDetails?.owner?.firstName}{" "}{houseDetails?.owner?.lastName}
          </p>
          <p className="text-gray-600 mb-4">{houseDetails?.location}</p>
          
          <div className="flex gap-4 my-4 flex-wrap">
          <span className="badge badge-lg">
          <img className='w-4 mb-1 mr-2' src="/icons8-bedroom-50.png" alt="icon" />
            {houseDetails?.rooms} Rooms
          </span>
          <span className="badge badge-lg">
          <img className='w-4 mb-1 mr-2' src="/icons8-bathroom-50.png" alt="icon" />
            {houseDetails?.bathrooms} Bathrooms
          </span>
        </div>
          
          {/* Edit button - only show if the current user is the owner */}
          <div className="mb-6">
            <EditHouseModal  postedBy={houseDetails?.postedBy} clerkId={houseDetails?.owner?.clerkId} ownerId={user?.id} id={id} onUpdate={refreshDetails} />
          </div>

          <div>
            <DeleteHouse postedBy={houseDetails?.postedBy}  clerkId={houseDetails?.owner?.clerkId} ownerId={user?.id} id={id} />
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <p className="text-gray-700">{houseDetails?.description}</p>
          </div>
        </div>
        
        <div>
          <ContactOwnerForm ownerDetails={houseDetails?.owner} />
        </div>
      </div>
    </div>
  </div>
  );
};

export default HouseDetails;