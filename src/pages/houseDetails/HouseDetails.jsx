import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../../Utils/GlobalApi'
import ContactOwnerForm from './ContactOwnerForm'

const HouseDetails = () => {
  const { id } = useParams()
  const [houseDetails, setHouseDetails] = useState({})
  const baseUrl = 'http://localhost:5000/'

  useEffect(() => {
    getHouseDetail()
  }, [id])
  
  // Function to get the details of the house
  const getHouseDetail = async () => {
    try {
      if (!id) {
        console.error("getHouseDetails() Error: ID is undefined");
        return;
      }
      const response = await GlobalApi.getHouseDetails(id)
      console.log(response.data)
      setHouseDetails(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  console.log(houseDetails?.images)
  console.log(`${baseUrl}${houseDetails?.images?.[0]}`)

  return (
    <div>
      <div className="carousel w-full">
        {houseDetails?.images?.map((item, index) => (
          <div id={`slide${index + 1}`} key={index} className="carousel-item relative w-full">
            <img
              src={`${baseUrl}${item}`}
              alt={`House image ${index + 1}`}
              className="w-full object-cover h-96"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a 
                href={`#slide${index === 0 ? houseDetails?.images?.length : index}`} 
                className="btn btn-circle"
              >
                ❮
              </a>
              <a 
                href={`#slide${index === houseDetails?.images?.length - 1 ? 1 : index + 2}`} 
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4">
        <h1 className="text-3xl font-bold">{houseDetails?.title}</h1>
        <p className="text-xl text-gray-600">{houseDetails?.location}</p>
        <div className="flex gap-4 my-4">
          <span className="badge badge-lg">{houseDetails?.rooms} Rooms</span>
          <span className="badge badge-lg">{houseDetails?.bathrooms} Bathrooms</span>
          <span className="badge badge-lg">${houseDetails?.price?.toLocaleString() || 'N/A'}</span>
        </div>
        <p className="my-4">{houseDetails?.description}</p>
      </div>


      <div>
        <ContactOwnerForm />
      </div>
    </div>
  )
}

export default HouseDetails