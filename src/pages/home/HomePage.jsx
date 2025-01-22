import React from 'react';
import { useState } from 'react';
import Hero from './components/Hero';
import Nav from '../../GlobalComponents/Nav';
import HouseCard from './components/HouseCard';
import GlobalApi from '../../Utils/GlobalApi';

const HomePage = () => {
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
     <Nav />
      <Hero />
<button onClick={getHouseAll}>get house test</button>
      <h2 className='text-4xl font-bold text-center'>Find your Dream house Here</h2>

      {allHouses.map((item, index) => {
        return <HouseCard key={index} item={item} />
      })}
       
    </div>
  );
};

export default HomePage;

