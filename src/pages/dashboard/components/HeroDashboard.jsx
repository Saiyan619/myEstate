import React from 'react'

const HeroDashboard = () => {
  return (
      <div className='p-4'>
          <div className='bg-blue-500 p-4 rounded-2xl'>
          <h1 className='text-lg font-bold'>Welcome to your Dashboard, Mr Olaniyi</h1>

          <div className='flex gap-10 mt-5'>
              
          <div className="stats shadow">
  <div className="stat">
    <div className="stat-title">Total Houses Posted</div>
    <div className="stat-value">5</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
              </div>
              
              <div className="stats shadow">
  <div className="stat">
    <div className="stat-title">Saved Houses</div>
    <div className="stat-value">15</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
              </div>
              
              <div className="stats shadow">
  <div className="stat">
    <div className="stat-title">Post New House</div>
    <div className="stat-value">+</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
              </div>
              
          </div>

    </div>
    </div>
  )
}

export default HeroDashboard
