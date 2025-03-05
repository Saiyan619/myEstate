import React from 'react'

const HouseFilterModal = ({getFilterHouse,title,
    location,
    type,
    minPrice,
    maxPrice,
    settitle,
    setLocation,
    setType,
    setMinPrice,
    setMaxPrice}) => {
   

  return (
      <div className='mt-3'>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button 
        className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105" 
        onClick={()=>document.getElementById('my_modal_5').showModal()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        Search Houses
      </button>
      
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white rounded-xl shadow-xl p-6 max-w-md mx-auto">
                  <h3 className="font-bold text-2xl text-gray-800 mb-6 border-b pb-2">Find Your Dream Home</h3>
          
          <div className="space-y-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium text-gray-700">Title</span>
              </div>
              <input 
                type="text" 
                placeholder="Enter title" 
                className="input input-bordered w-full bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md"
                onChange={(e) => settitle(e.target.value)}
                value={title}
              />
              <div className="label"></div>
                      </label>
            
                      <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium text-gray-700">Location</span>
              </div>
              <input 
                type="text" 
                placeholder="Enter location" 
                className="input input-bordered w-full bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
              <div className="label"></div>
            </label>                   



            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium text-gray-700">Property Type</span>
              </div>
              <select 
                onChange={(e) => setType(e.target.value)} 
                className="select select-bordered w-full bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md"
                value={type}
              >
                <option disabled selected>Select type</option>
                <option>Bungalow</option>
                <option>Duplex</option>
                <option>Mansion</option>
                <option>Penthouse</option>
                <option>Apartment</option>
              </select>
              <div className="label"></div>
            </label>

            <div className="flex flex-col space-y-2">
              <span className="font-medium text-gray-700">Price Range</span>
              <div className="flex space-x-4 items-center">
                <label className="form-control w-full">
                  <input 
                    type="number"  
                    placeholder="Min" 
                    className="input input-bordered w-full bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md"
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    value={minPrice}
                  />
                </label>

                <span className="text-gray-500">to</span>

                <label className="form-control w-full">
                  <input 
                    type="number"  
                    placeholder="Max" 
                    className="input input-bordered w-full bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md"
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    value={maxPrice}
                  />
                </label>
              </div>
            </div>
          </div>
          
          <div className="modal-action mt-8 flex justify-between">
            <form method="dialog" className="w-full flex space-x-4">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn border border-gray-300 hover:bg-gray-100 text-gray-700 flex-1">Cancel</button>
              <button 
                className="btn bg-blue-600 hover:bg-blue-700 text-white flex-1"
                onClick={getFilterHouse}
                type="button"
              >Apply Filters</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default HouseFilterModal