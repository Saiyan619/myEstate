import React from 'react'
import GlobalApi from '../../Utils/GlobalApi'

const DeleteHouse = ({ id, ownerId, clerkId }) => {
    
    const deleteAHouse = async () => {
        try {
            if (id && ownerId && clerkId===ownerId ) {
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
<button className="btn" onClick={()=>document.getElementById('my_modal_6').showModal()}>Delete House</button>
<dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
                  <div className="modal-action">
                  <button onClick={deleteAHouse} className="btn">Delete</button>

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
