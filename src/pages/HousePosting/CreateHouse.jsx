import React, { useState } from "react";
import Nav from "../../GlobalComponents/Nav";
import GlobalApi from "../../Utils/GlobalApi";

const CreateHouse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [rooms, setRooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [images, setImages] = useState([]); // Array of images
  const [postedBy, setPostedBy] = useState("615f1d4a3f2e8c3d1c6d1a4b");

  function handleImages(e) { 
    setImages([...e.target.files]); // Convert FileList to an array
  }

  const createNewHouse = async () => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Nav />
      <div>
        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" />
        <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" />
        <input onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price" className="input input-bordered w-full max-w-xs" />
        <input onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Location" className="input input-bordered w-full max-w-xs" />
        <input onChange={(e) => setType(e.target.value)} type="text" placeholder="Type" className="input input-bordered w-full max-w-xs" />
        <input onChange={(e) => setRooms(e.target.value)} type="number" placeholder="Rooms" className="input input-bordered w-full max-w-xs" />
        <input onChange={(e) => setBathrooms(e.target.value)} type="number" placeholder="Bathrooms" className="input input-bordered w-full max-w-xs" />
        <input onChange={handleImages} type="file" className="file-input file-input-bordered w-full max-w-xs" multiple />
      </div>
      <button onClick={createNewHouse} className="btn btn-accent">Create House</button>
    </div>
  );
};

export default CreateHouse;
