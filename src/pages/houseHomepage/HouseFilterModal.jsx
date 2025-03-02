import React from 'react'

const HouseFilterModal = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Search Houses</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
          
                  <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Location</span>
  </div>
  <input type="text" placeholder="setLocation" className="input input-bordered w-full max-w-xs" />
  <div className="label">
  </div>
</label>                   


          
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Location</span>
  </div>
  <input type="text"  placeholder="setLocation" className="input input-bordered w-full max-w-xs" />
  <div className="label">
  </div>
                  </label>


                  <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Type</span>
  </div>
  <select className="select select-bordered">
              <option disabled selected>Pick one</option>
    <option>bungalow</option>
    <option>duplex</option>
    <option>mansion</option>
    <option>penthouse</option>
    <option>apartment</option>
  </select>
  <div className="label">
  </div>
                  </label>

                  <div className='flex'>
                  <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Price</span>
  </div>
  <input type="number"  placeholder="Price" className="input input-bordered w-24 max-w-xs" />
  <div className="label">
  </div>
                  </label>

                  <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Price</span>
  </div>
  <input type="number"  placeholder="Price" className="input input-bordered w-24 max-w-xs" />
  <div className="label">
  </div>
</label> 
          
                </div>
          
                  <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default HouseFilterModal
