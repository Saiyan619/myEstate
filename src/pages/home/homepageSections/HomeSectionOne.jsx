import React from 'react'

const HomeSectionOne = () => {
  return (
    <div className='bg-blue-950 text-white pt-20'>
          <div className='flex items-center justify-center gap-64'>
              <h3 className='text-4xl font-semibold '>We make it easy for <br /> <span className='text-purple-700 '>tenants</span> and <span className='text-purple-700 '>landlord</span></h3>
              <p className='text-gray-200 text-sm'>
                  Wheter its selling your current home, getting <br /> financing or buying a new home, we make it easy and <br /> effienct.
                  The best part? Youll save a bunch of money <br /> and time with our services.
              </p>
      </div>

          {/* <div className='flex items-center justify-center gap-64'>
          <div className="card bg-primary text-primary-content w-96">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
              </div>

              <div className="card bg-primary text-primary-content w-96">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>
          </div> */}


          <div className="flex items-center justify-center mt-32 flex-col pb-20">
              <span className='text-2xl font-bold'>Our Numbers Dont Lie</span>
          <div className="stats bg-transparent text-white mt-12">
  <div className="stat place-items-center">
    <div className="stat-value">7.4%</div>
    <div className="stat-desc text-gray-400">↗︎ Property Return Value</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-value">4,200</div>
    <div className="stat-desc text-gray-400">↗︎ Propety in Sell & Rent</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-value">1,200</div>
    <div className="stat-desc text-gray-400">↗ LandLords Connected</div>
  </div>
</div>
          </div>
          

          <div className="hero bg-white min-h-1/2 pt-20 pb-20">
  <div className="hero-content text-center flex items-center justify-center">
                  <div className="max-w-md">
                      <span className='text-purple-700'>No spam promise</span>
      <h1 className="text-4xl font-bold text-black">Are you a House Owner?</h1>
      <p className=" text-gray-500">
        Discover ways to increase your home value and get homelisted. No spam
                      </p>
                      <p className='text-gray-400'>Join +10,000 other House Owners in our estate community</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default HomeSectionOne
