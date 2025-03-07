import React, { useState, useEffect } from 'react';
import GlobalApi from '../../Utils/GlobalApi';

const EditProfileModal = ({ userDetails, fetchMyDetails }) => {
  // Initialize form state with empty values to avoid undefined errors
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: ''
  });
  
  // Update formData whenever userDetails changes just to make sure
  useEffect(() => {
    if (userDetails && Object.keys(userDetails).length > 0) {
      setFormData({
        firstName: userDetails.firstName || '',
        lastName: userDetails.lastName || '',
        email: userDetails.email || '',
        phone: userDetails.phone || '',
        location: userDetails.location || ''
      });
    }
  }, [userDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await GlobalApi.editProfile({
        clerkId: userDetails.clerkId,
        ...formData
      });

      console.log(response.data);
      document.getElementById("edit_profile_modal").close();
      // Refresh user details after successful update
      fetchMyDetails();
      
    } catch (error) {
      console.error(error);
    } 
  };

  return (
    <div>
      <button 
        className="btn btn-primary" 
        onClick={() => document.getElementById('edit_profile_modal').showModal()}>
        Edit Profile
      </button>
      
      <dialog id="edit_profile_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Edit Your Profile</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="input input-bordered w-full" 
                  required
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="input input-bordered w-full" 
                  required
                />
              </div>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full" 
                required
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input input-bordered w-full" 
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input 
                type="text" 
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="input input-bordered w-full" 
              />
            </div>
            
            <div className="modal-action">
              <div className="flex justify-between w-full">
                <button 
                  type="button" 
                  className="btn btn-ghost" 
                  onClick={() => document.getElementById('edit_profile_modal').close()}>
                  Cancel
                </button>  
                
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  >
                  Save Changes
                </button>
              
              </div>
            </div>
          </form>
        </div>
        
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
};

export default EditProfileModal;