import React, { useState } from "react";
import Nav from "../../GlobalComponents/Nav";
import GlobalApi from "../../Utils/GlobalApi";
import { useUser } from "@clerk/clerk-react";
import { ToastContainer } from "react-toastify";
import { useGlobalContext } from "../../Utils/Context";

const CreateHouse = () => {
  const { user } = useUser();
  const { postNotify, postNotifyError, setLoader, loader } = useGlobalContext();
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

  console.log(type)
  // console.log(user)
  // console.log(postedBy)


  const createNewHouse = async () => {
    try {
      setLoader(true)
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

        setLoader(false)
        postNotify()
      console.log(response.data);
      } else {
        setLoader(false)
        console.log("user does not exist")
      }
      
    } catch (error) {
      setLoader(false)
      postNotifyError()
      console.log(error);
    }
  };

  return (
    <div>
      <Nav />

      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      <div className="flex items-center justify-center flex-col gap-5 p-10">
        <div className="text-center">
          <span className="text-4xl font-bold">Post A House</span>
          <p className="text-gray-400">Make sure to fill in the inputs below for proper detailing of your House.</p>
        </div>
      <div className="flex flex-col items-center gap-4 mt-7 ">
       
          {/* <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" /> */}
       
          <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Title</span>
  </div>
  <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="input input-bordered w-full max-w-xs" />
  <div className="label">
  </div>
</label>
     
          {/* <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" /> */}
        

              <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Price</span>
  </div>
  <input type="number" onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="input input-bordered w-full max-w-xs" />
  <div className="label">
  </div>
</label> 
         
         
          {/* <input onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price" className="input input-bordered w-full max-w-xs" /> */}
        
          
          <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Location</span>
  </div>
  <input type="text" onChange={(e) => setLocation(e.target.value)} placeholder="setLocation" className="input input-bordered w-full max-w-xs" />
  <div className="label">
  </div>
</label> 
         
          
          {/* <input onChange={(e) => setLocation(e.target.value)} type="text" placeholder="setLocation" className="input input-bordered w-full max-w-xs" /> */}
        
          

          <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Type</span>
  </div>
  <select onChange={(e) => setType(e.target.value)} value={type} className="select select-bordered">
              <option disabled selected>Pick one</option>
              <option>Bungalow</option>
                <option>Duplex</option>
                <option>Mansion</option>
                <option>Penthouse</option>
                <option>Apartment</option>
  </select>
  <div className="label">
  </div>
          </label>
          
          {/* <input onChange={(e) => setType(e.target.value)} type="text" placeholder="Type" className="input input-bordered w-full max-w-xs" /> */}
       
          <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Rooms</span>
  </div>
  <input type="number" onChange={(e) => setRooms(e.target.value)} placeholder="Rooms" className="input input-bordered w-full max-w-xs" />
  <div className="label">
  </div>
</label> 
       
          {/* <input onChange={(e) => setRooms(e.target.value)} type="number" placeholder="Rooms" className="input input-bordered w-full max-w-xs" /> */}
      
          
          <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">BathRooms</span>
  </div>
  <input type="number" onChange={(e) => setBathrooms(e.target.value)} placeholder="Bathrooms" className="input input-bordered w-full max-w-xs" />
  <div className="label">
  </div>
</label> 
      
          {/* <input onChange={(e) => setBathrooms(e.target.value)} type="number" placeholder="Bathrooms" className="input input-bordered w-full max-w-xs" /> */}
      
          <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Images</span>
  </div>
  <input type="file" onChange={handleImages} className="file-input file-input-bordered w-full max-w-xs" multiple />
  <div className="label">
  </div>
</label> 
      
          {/* <input onChange={handleImages} type="file" className="file-input file-input-bordered w-full max-w-xs" multiple /> */}
      
          
        <label className="form-control">
  <div className="label">
    <span className="label-text">Description</span>
  </div>
  <textarea onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description"  className="textarea textarea-bordered h-24 w-80"></textarea>
  <div className="label">
  </div>
</label>
        </div>

      <div>
          <button onClick={createNewHouse} className="btn btn-primary">
          <span className={`${loader ? "loading" : ''} loading-spinner`}></span>
            Create House
          </button>
      </div>
      </div>
      

    </div>
  );
};

export default CreateHouse;
