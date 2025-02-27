import React from 'react'
import { Link } from 'react-router-dom'

const UserProfilePropertyCards = ({ item }) => {
    const baseUrl = 'http://localhost:5000/'

  return (
    <div>
      <div>
            <div className="card bg-base-100 h-70 lg:h-80 w-52 lg:w-72 shadow-xl">
        <figure>
          <img
                          src={`${baseUrl}${item.images[0]}`}
                          alt="Shoes" />
        </figure>
        <div className="card-body">
                        <h1 className="card-title">{item?.title}</h1>
                        <h2 className="card-title">${item?.price}</h2>
                        <p>{item?.description}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/house/${item._id}`}>
                            <button className="btn btn-primary">See details</button>
                            </Link>
          </div>
        </div>
      </div>
          </div>
    </div>
  )
}

export default UserProfilePropertyCards
