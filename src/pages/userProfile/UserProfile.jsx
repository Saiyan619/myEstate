import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from '@clerk/clerk-react'

const UserProfile = () => {
    const { id } = useParams()
    const {user} = useUser()

    useEffect(() => {
     getUserDetails()
    }, [])
    

    const [userDetails, setuserDetails] = useState({})

  
    const getUserDetails = async () => {
        try {
            if (!id) {
                console.log("id does not exist")
            }
            const response = await GlobalApi.getUserById(id)
            console.log(response.data)
            setuserDetails(response.data)
            setPermit()
        } catch (error) {
            console.error(error)
        }
    }

    const setPermit = () => {
        if (user?.id === userDetails?.clerkId) {
            console.log("this is your acc", userDetails?.savedHouses)
        } else {
            console.log("this is not your acc")
        }
    }
    
  return (
      <div>
      UserProfile
        
    </div>
  )
}

export default UserProfile
