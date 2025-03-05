import React, { useState, useEffect } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import { useUser } from "@clerk/clerk-react";
import { Edit } from "lucide-react";

const EditHouseModal = ({ id, ownerId, clerkId }) => {
  const { user } = useUser();
  const [houseDetails, setHouseDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [rooms, setRooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [images, setImages] = useState([]);
  const [postedBy, setPostedBy] = useState(user?.id || "");

  // Fetch house details when component mounts or id changes
  useEffect(() => {
    if (id) {
      getHouseDetail();
    }
  }, [id]);

  // Set form values when house details are loaded
  useEffect(() => {
    if (houseDetails) {
      setTitle(houseDetails.title || "");
      setDescription(houseDetails.description || "");
      setPrice(houseDetails.price || 0);
      setLocation(houseDetails.location || "");
      setType(houseDetails.type || "");
      setRooms(houseDetails.rooms || 0);
      setBathrooms(houseDetails.bathrooms || 0);
      setPostedBy(houseDetails.postedBy || user?.id || "");
      // Don't set images i don't want to display the old file objects
    }
  }, [houseDetails, user?.id]);

  const getHouseDetail = async () => {
    try {
      if (!id) {
        console.error("getHouseDetails() Error: ID is undefined");
        return;
      }
      setLoading(true);
      if (id && ownerId && clerkId === ownerId) { 
        const response = await GlobalApi.getHouseDetails(id);
        setHouseDetails(response.data);
        console.log("Loaded house details:", response.data);
      }
     
    } catch (error) {
      console.error("Error fetching house details:", error);
    } finally {
      setLoading(false);
    }
  };

  function handleImages(e) {
    setImages([...e.target.files]);
  }

  const editHouseDetails = async () => {
    try {
      if (!user) {
        console.log("User not logged in");
        return;
      }

      if (id && ownerId && clerkId === ownerId) {
        
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("location", location);
      formData.append("type", type);
      formData.append("rooms", rooms);
      formData.append("bathrooms", bathrooms);
      formData.append("postedBy", postedBy);

      // Append images only if new ones were selected
      if (images.length > 0) {
        images.forEach(image => formData.append("images", image));
      }

      const response = await GlobalApi.editHouse(id, formData);
      console.log("House updated successfully:", response.data);
      
      // Close modal after successful update
      document.getElementById("my_modal_5").close();
      
      // You might want to trigger a refresh of the parent component
      // This could be done via a callback prop if needed
      }else{
        console.log("You are not the owner of this house");
      }

    } catch (error) {
      console.error("Error updating house:", error);
    }
  };

  return (
    <div>
      <button 
        className="btn btn-outline flex items-center gap-2" 
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        <Edit size={16} /> Edit Profile
      </button>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Edit Property</h3>

          {loading ? (
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-md"></span>
            </div>
          ) : (
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4" encType="multipart/form-data">
              <div>
                <label className="label">Title</label>
                <input 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  type="text" 
                  placeholder="Title" 
                  className="input input-bordered w-full" 
                />
              </div>
              
              <div>
                <label className="label">Description</label>
                <textarea 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  placeholder="Description" 
                  className="textarea textarea-bordered w-full h-24" 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">Price</label>
                  <input 
                    value={price} 
                    onChange={(e) => setPrice(parseFloat(e.target.value) || 0)} 
                    type="number" 
                    placeholder="Price" 
                    className="input input-bordered w-full" 
                  />
                </div>
                
                <div>
                  <label className="label">Location</label>
                  <input 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)} 
                    type="text" 
                    placeholder="Location" 
                    className="input input-bordered w-full" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="label">Type</label>
                  <input 
                    value={type} 
                    onChange={(e) => setType(e.target.value)} 
                    type="text" 
                    placeholder="Type" 
                    className="input input-bordered w-full" 
                  />
                </div>
                
                <div>
                  <label className="label">Rooms</label>
                  <input 
                    value={rooms} 
                    onChange={(e) => setRooms(parseInt(e.target.value) || 0)} 
                    type="number" 
                    placeholder="Rooms" 
                    className="input input-bordered w-full" 
                  />
                </div>
                
                <div>
                  <label className="label">Bathrooms</label>
                  <input 
                    value={bathrooms} 
                    onChange={(e) => setBathrooms(parseInt(e.target.value) || 0)} 
                    type="number" 
                    placeholder="Bathrooms" 
                    className="input input-bordered w-full" 
                  />
                </div>
              </div>
              
              <div>
                <label className="label">Images</label>
                <input 
                  onChange={handleImages} 
                  type="file" 
                  className="file-input file-input-bordered w-full" 
                  multiple 
                />
                <p className="text-xs mt-1 text-gray-500">
                  {houseDetails?.images?.length > 0 ? 
                    `Current images: ${houseDetails.images.length}. Upload new ones to replace them.` : 
                    "No current images. Upload some to add them."}
                </p>
              </div>

              <div className="flex justify-end mt-6 space-x-4">
                <button 
                  type="button" 
                  onClick={() => document.getElementById("my_modal_5").close()} 
                  className="btn btn-outline"
                >
                  Cancel
                </button>
                <button 
                  type="button" 
                  onClick={editHouseDetails} 
                  className="btn btn-primary"
                >
                  Save Changes
                </button>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default EditHouseModal;