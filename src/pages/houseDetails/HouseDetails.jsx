import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../../Utils/GlobalApi'
import ContactOwnerForm from './ContactOwnerForm'
import Nav from '../../GlobalComponents/Nav'

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
    <div className='bg-gray-50'>
      <Nav />
      <div className="carousel w-full ">
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

      <div className='flex justify-between sm:p-10 flex-wrap'>
      <div className="p-4">
        <h1 className="text-3xl font-bold">{houseDetails?.title}</h1>
        <h1 className="text-2xl font-bold text-blue-600">${houseDetails?.price?.toLocaleString() || 'N/A'}</h1>
        <h1 className="text-sm font-bold">Owned By: {houseDetails?.owner?.firstName}{" "}{houseDetails?.owner?.lastName}</h1>
        <p className="text-xl text-gray-600">{houseDetails?.location}</p>
        <div className="flex gap-4 my-4 flex-wrap">
          <span className="badge badge-lg">
          <img className='w-4 mb-1 mr-2' src="/icons8-bedroom-50.png" alt="icon" />
            {houseDetails?.rooms} Rooms
          </span>
          <span className="badge badge-lg">
          <img className='w-4 mb-1 mr-2' src="/icons8-bathroom-50.png" alt="icon" />
            {houseDetails?.bathrooms} Bathrooms
          </span>
          <span className="badge badge-lg">${houseDetails?.price?.toLocaleString() || 'N/A'}</span>
        </div>

        <div>
          <span className='text-xl font-semibold'>Description</span>
          <p className="my-4">{houseDetails?.description}</p>
        </div>
      </div>


      <div>
        <ContactOwnerForm ownerEmail={houseDetails?.owner?.email}/>
      </div>
      </div>
      
    </div>
  )
}

export default HouseDetails