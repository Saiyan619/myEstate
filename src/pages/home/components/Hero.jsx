import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='p-4 rounded-md'>
      <div
  className="hero min-h-screen rounded-3xl"
  style={{
      backgroundImage: "url(./pexels-binyaminmellish-106399.jpg)",
        }}>
        
  <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Buy, Rent, Sell your property easily</h1>
      <p className="mb-5">
      Seamlessly buy, rent, or sell properties with confidence. Experience hassle-free transactions, trusted listings, and expert support every step of the way.
      </p>
                        <Link to="/post-house"><button className='btn btn-primary'>Get Started</button></Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero
