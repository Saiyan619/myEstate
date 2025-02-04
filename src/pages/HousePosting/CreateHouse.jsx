import React from 'react'
import { useState } from 'react';
import Nav from '../../GlobalComponents/Nav';


// title,
// description,
// price,
// location,
// type,
// rooms,
// bathrooms,
// images,
// postedBy
const CreateHouse = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState(0);
  const [Location, setLocation] = useState("");
  const [Type, setType] = useState("");
  const [Rooms, setRooms] = useState(0);
  const [Bathrooms, setBathrooms] = useState(0);
  const [Images, setImages] = useState([]);
  const [PostedBy, setPostedBy] = useState("615f1d4a3f2e8c3d1c6d1a4b");


  const createNewHouse = async () => {
    try {
    //   const title = document.querySelector('input[placeholder="title"]').value;
    //   const description = document.querySelector('input[placeholder="description here"]').value;
    //   const price = document.querySelector('input[placeholder="price here"]').value;
    //   const location = document.querySelector('input[placeholder="location here"]').value;
    //   const type = document.querySelector('input[placeholder="type here"]').value;
    //   const rooms = document.querySelector('input[placeholder="rooms here"]').value;
    //   const bathrooms = document.querySelector('input[placeholder="bathrooms here"]').value;
    //   const images = document.querySelector('input[type="file"]').files;
    //   const postedBy = '615f1d4a3f2e8c3d1c6d1a4b';

    //   const formData = new FormData();
    //   formData.append('title', title);
    //   formData.append('description', description);
    //   formData.append('price', price);
    //   formData.append('location', location);
    //   formData.append('type', type);
    //   formData.append('rooms', rooms);
    //   formData.append('bathrooms', bathrooms);
    //   formData.append('postedBy', postedBy);

    //   for (let i = 0; i < images.length; i++) {
    //     formData.append('images', images[i]);
    //   }

    //   const response = await fetch('http://localhost:5000/createHouse', {
    //     method: 'POST',
    //     body: formData
    //   });

    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
      //   console.log(error);
      
      const data = {
        title: Title,
        description: Description,
        price: Price,
        location: Location,
        type: Type,
        rooms: Rooms,
        bathrooms: Bathrooms,
        postedBy: PostedBy
      }

      

    } catch (error) {
      consoloe.log(error)
      }
      
  }
  return (
    <div>
      <Nav />
      <div>
      <input type="text" placeholder="title" className="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="description here" className="input input-bordered w-full max-w-xs" />
      <input type="number" placeholder="price here" className="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="location here" className="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="type here" className="input input-bordered w-full max-w-xs" />
      <input type="number" placeholder="rooms here" className="input input-bordered w-full max-w-xs" />
      <input type="number" placeholder="bathrooms here" className="input input-bordered w-full max-w-xs" />
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
        {/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
      </div>
    </div>
  )
}

export default CreateHouse
