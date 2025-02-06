import React from 'react'

const HouseCard = ({item}) => {
  return (
    <div className='flex items-center justify-center flex-wrap gap-20 mt-20'>
      <div className="card bg-base-100 w-72 shadow-xl">
  <figure>
    <img
      src="./Image.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex items-center'>
      <p className='text-gray-400'><span className='text-purple-700 font-bold text-2xl'>$2000</span>/Year</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>
          </div>
    <h2 className="card-title uppercase font-bold">beverly springfield</h2>
          <div className="badge badge-secondary">NEW</div>
    <p>2821 Lake Sevilla, Palm Habour, Tx</p>
    <div className="card-actions flex items-center justify-between">
            {/* <button className="btn btn-primary">Buy Now</button> */}
              <div className='flex items-center gap-1'>
                <img className='w-4' src="./icons8-bedroom-50.png" alt="icon" />
                <span className='text-sm'>4 Bedrooms</span>
              </div>

              <div className='flex items-center gap-1'>
                <img className='w-4' src="./icons8-bathroom-50.png" alt="icon" />
                <span className='text-sm'>5 Bathrooms</span>
              </div>
    </div>
  </div>
</div> 
    </div>
  )
}

export default HouseCard
