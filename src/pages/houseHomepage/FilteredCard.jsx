import React from 'react'
import { Link } from 'react-router-dom';


const FilteredCard = ({item}) => {
  console.log(item?.owner?._id)
  const baseUrl = 'http://localhost:5000/'
  // const imagePath = `${baseUrl}${item?.images[0]}`.replace(/\\/g, "/");
// console.log(imagePath)

return (
    <div className='flex items-center justify-center flex-wrap gap-20 mt-10'>
      <div className="card bg-base-100 w-72 shadow-xl">
  <figure>
          {/* {item?.images?.length > 0 && ( */}
            <img src={item?.images[0]} alt="House" />
          {/* )} */}
  </figure>
  <div className="card-body">
    <div className='flex items-center'>
            <p className='text-gray-400'><span className='text-purple-700 font-bold text-2xl'>${item.price}</span>/Year</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>
          </div>
          
          <h2 className="card-title uppercase font-bold">{item?.title}</h2>
          <div className="badge badge-secondary">NEW</div>
          <p>{item?.location}</p>
    <div className="card-actions flex justify-between flex-col">
            {/* <button className="btn btn-primary">Buy Now</button> */}
              <div className='flex items-center gap-1'>
                <img className='w-4' src="./icons8-bedroom-50.png" alt="icon" />
                <span className='text-sm'>{item?.bathrooms} Bedrooms</span>
              </div>

              <div className='flex items-center gap-1'>
                <img className='w-4' src="./icons8-bathroom-50.png" alt="icon" />
              <span className='text-sm'>{item?.rooms} Bathrooms</span>
            </div>

            <div className='mt-4'>
              <span className='text-sm'>Posted By</span>
              <div className='flex items-center gap-1'>
              <div className="avatar placeholder">
  <div className="bg-neutral text-neutral-content w-6 rounded-full">
    <span className="text-xs">UI</span>
  </div>
                </div>

              <Link to={`/user/${item?.owner?.clerkId}`}>
              <span className='text-xs capitalize cursor-pointer'>{item?.owner?.firstName}{" "}{item?.owner?.lastName}</span>
              </Link>  
              </div>
          </div>
            
            <Link to={`/house/${item?._id}`}>
              <button className='btn'> Check House</button>
            </Link>
    </div>
  </div>
</div> 
    </div>
  )
}

export default FilteredCard