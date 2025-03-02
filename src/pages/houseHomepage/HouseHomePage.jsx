import React from 'react'
import { useState, useEffect } from 'react'
import GlobalApi from '../../Utils/GlobalApi'

const HouseHomePage = () => {

    const getHouseAll = async () => {
        try {
            const response = await GlobalApi.getAllHouse()
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

  return (
      <div>
          <button className='btn'onClick={getHouseAll}>test api</button>
      HouseHomePage
      HouseHomePage
    </div>
  )
}

export default HouseHomePage
