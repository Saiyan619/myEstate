import React from 'react'
import { useState, useEffect } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from '@clerk/clerk-react'

const DeleteHouse = ({ id, ownerId, clerkId, postedBy }) => {
    
  const [disableBtn, setdisableBtn] = useState(true)

  useEffect(() => {
    if (postedBy) {
      checkOwner()
   }

  }, [postedBy])
  

  const checkOwner = () => {
    if (postedBy === ownerId) { 
      setdisableBtn(false)
    } else {
      setdisableBtn(true)
    }
  }

  console.log(ownerId)
  console.log(postedBy)
  
    const deleteAHouse = async () => {
        try {
          if (postedBy === ownerId) { 
            console.log(id)
                const response = await GlobalApi.deleteHouse(id);
                console.log(response.data)
            } else {
                console.log("id does not exist or you are not the owner")
            }
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button  className={`btn btn-outline btn-error mb-5 ${disableBtn ? "btn-disabled" : ""} flex items-center gap-2`}onClick={()=>document.getElementById('my_modal_6').showModal()}>Delete House</button>
<dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Are you sure?</h3>
    <p className="py-4">You cannot retrieve property once deleted.</p>
                  <div className="modal-action">
                  <button onClick={deleteAHouse} className="btn btn-error">Delete</button>

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

export default DeleteHouse
