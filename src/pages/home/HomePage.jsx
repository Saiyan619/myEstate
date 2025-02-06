import React from 'react';
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Nav from '../../GlobalComponents/Nav';
import HouseCard from './components/HouseCard';
import GlobalApi from '../../Utils/GlobalApi';

const HomePage = () => {
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
    <div>
     <Nav />
      <Hero />
      <h2 className='text-4xl font-bold text-center'>Find your Dream house Here</h2>

      <div className='flex gap-4 items-center justify-center'>
      {allHouses.map((item, index) => {
        return <HouseCard key={index} item={item} />
      })}
      </div>
       
    </div>
  );
};

export default HomePage;

