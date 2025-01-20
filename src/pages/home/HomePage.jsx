import React from 'react';
import Hero from './components/Hero';
import Nav from '../../GlobalComponents/Nav';
import HouseCard from './components/HouseCard';
import GlobalApi from '../../Utils/GlobalApi';

const HomePage = () => {

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
     <Nav />
      <Hero />
<button onClick={getHouseAll}>get house test</button>
      <h2 className='text-4xl font-bold text-center'>Find your Dream house Here</h2>
        <HouseCard />
    </div>
  );
};

export default HomePage;

