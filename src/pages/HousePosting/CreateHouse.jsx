import React, { useState } from "react";
import Nav from "../../GlobalComponents/Nav";
import GlobalApi from "../../Utils/GlobalApi";
import { useUser } from "@clerk/clerk-react";

const CreateHouse = () => {
  const { user } = useUser();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [rooms, setRooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [images, setImages] = useState([]); // Array of images
  const [postedBy, setPostedBy] = useState(user.id);

  function handleImages(e) { 
        // Convert FileList to an array
    setImages([...e.target.files]);
  }
  // console.log(user)
  // console.log(postedBy)

  const createNewHouse = async () => {
    try {
      if (user) {
        const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("location", location);
      formData.append("type", type);
      formData.append("rooms", rooms);
      formData.append("bathrooms", bathrooms);
      formData.append("postedBy", postedBy);

      // Ensure images are properly appended
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]); // Append each file
    }
      const response = await GlobalApi.createHouse(formData);

      console.log(response.data);
      } else {
        console.log("user does not exist")
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Nav />
      <div className="flex items-center justify-center flex-col gap-5 p-10">
        <div className="text-center">
          <span className="text-4xl font-bold">Post A House</span>
          <p className="text-gray-400">Make sure to fill in the inputs below for proper detailing of your House.</p>
        </div>
      <div className="flex flex-col items-center gap-4 mt-7 ">
        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" />
        <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" />
        <input onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price" className="input input-bordered w-full max-w-xs" />
        <input onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Location" className="input input-bordered w-full max-w-xs" />
        <input onChange={(e) => setType(e.target.value)} type="text" placeholder="Type" className="input input-bordered w-full max-w-xs" />
        <input onChange={(e) => setRooms(e.target.value)} type="number" placeholder="Rooms" className="input input-bordered w-full max-w-xs" />
        <input onChange={(e) => setBathrooms(e.target.value)} type="number" placeholder="Bathrooms" className="input input-bordered w-full max-w-xs" />
        <input onChange={handleImages} type="file" className="file-input file-input-bordered w-full max-w-xs" multiple />
      </div>

      <div>
      <button onClick={createNewHouse} className="btn btn-accent">Create House</button>
      </div>
      </div>
      

    </div>
  );
};

export default CreateHouse;
