import React from 'react'

const ProfileCards = () => {
  return (
    <div className='flex justify-center'>
       
          <div>
              
              <div className='flex flex-col'>
                  
              <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
                  </div>

                  <div>
                      <div><span> Mr. Hassan Magdy</span></div>
                    
                      <div className='flex flex-col'>
                          <span>arokoyueb@gmail.com</span>
                          <span>08169615422</span>
                          <span>Nigeria</span>
                     </div>
                  </div>

              </div>
         
              
             
          </div>
          

          <div>
              
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
  )
}

export default ProfileCards
