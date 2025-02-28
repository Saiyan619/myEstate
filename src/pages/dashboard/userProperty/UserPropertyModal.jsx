import React, { useState } from 'react';
import GlobalApi from '../../../Utils/GlobalApi';
import UserPropertyCards from './UserPropertyCards';

const UserPropertyModal = ({ id, postedHouses }) => {
  const [properties, setProperties] = useState([]);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength 
      ? `${text.substring(0, maxLength)}...` 
      : text;
  };

  const fetchProperties = async () => {
    try {
      if (!postedHouses || postedHouses.length === 0) return;
        const responses = await GlobalApi.getProfileByClerkId(id)
        console.log(responses.data)
        setProperties(responses.data)
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  return (
    <div>
      <button className="btn" onClick={() => {
        fetchProperties();
        document.getElementById('my_modal_4').showModal();
      }}>
        View All
      </button>
      
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl"> 
          <h3 className="font-bold text-lg">Your Properties</h3>

                  <div className='p-4 flex  gap-5'>
                  {properties?.postedHouses?.length > 0 ?
                      (properties?.postedHouses?.map((item, index) => {
                          return (<div className='' key={index}> <UserPropertyCards item={item} /> </div>)
                    }))
           : (
            <p>No properties found.</p>
          )}

                  </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UserPropertyModal;
