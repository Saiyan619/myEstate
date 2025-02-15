import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom' //Make sure it's react router dom not just react router(that's why youre id was undefined)
import GlobalApi from '../../Utils/GlobalApi'

const HouseDetails = () => {
  const { id } = useParams()

  const [houseDetails, setHouseDetails] = useState({})
  const baseUrl = 'http://localhost:5000/'


  useEffect(() => {
    getHouseDetail()
  }, [id])
  

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
  console.log(`${baseUrl}${houseDetails.images?.[0]}`)


  return (
    <div>
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
        </div>

        {/* {houseDetails.images.map((item, index => {
          return(<div>item</div>)
        }))} */}
        {/* {houseDetails?.images.map((item, index) => {
          return (<div key={index}>
            <img src={item} alt="images" />
          </div>)
        })} */}
</div>
    </div>
  )
}

export default HouseDetails
