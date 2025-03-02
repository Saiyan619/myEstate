import React from 'react'
import { useState, useEffect } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import HouseCard from '../home/components/HouseCard'
import SkeletonHomeCard from '../home/components/SkeletonHomeCard'
import HouseFilterModal from './HouseFilterModal'

const HouseHomePage = () => {

    const [allHouses, setAllHouses] = useState([])
    
    useEffect(() => {
      getHouseAll()
    }, [])
    
    
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
      <div className='flex flex-col justify-center items-center p-4'>
          
          <div>
              <h1 className='text-3xl'>Find More Properties Here</h1>
              <HouseFilterModal />
          </div>
          
          <div>
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
    
    </div>
  )
}

export default HouseHomePage
