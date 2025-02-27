import React from 'react'
import { Link } from 'react-router-dom'

const UserPropertyCards = ({item}) => {  
  return (
    <div>
      <div className="card bg-base-100 h-62 lg:80 w-62 lg:w-80 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
                  <h1 className="card-title">{item?.title}</h1>
                  <h2 className="card-title">{item?.price}</h2>
                  <p>{item?.description}</p>
                  <div className="card-actions justify-end">
                      <Link to={`/house/${item._id}`}>
                      <button className="btn btn-primary">See details</button>
                      </Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserPropertyCards
