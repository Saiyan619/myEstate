import React from 'react'
import { useState, useEffect } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import HouseCard from '../home/components/HouseCard'
import SkeletonHomeCard from '../home/components/SkeletonHomeCard'

const HouseHomePage = () => {

      const [allHouses, setAllHouses] = useState([])
    
    const getHouseAll = async () => {
      try {
        const response = await GlobalApi.getAllHouse()
        console.log(response.data)
        setAllHouses(response.data)
      } catch (error) {
        console.error(error)
      }
    }
  return (
      <div>
          <button className='btn'onClick={getHouseAll}>test api</button>
          {!allHouses || allHouses.length === 0 ?
           (  <div className='flex gap-4 items-center flex-wrap justify-center'>
            <SkeletonHomeCard />
            <SkeletonHomeCard />
            <SkeletonHomeCard />
          </div>)
        :

(<div className='flex gap-4 items-center flex-wrap justify-center'>
  {allHouses.map((item, index) => {
    return <HouseCard key={index} item={item} />
  })}
    </div>)
      }
    
    </div>
  )
}

export default HouseHomePage
