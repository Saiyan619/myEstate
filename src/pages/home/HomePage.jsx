import React from 'react';
import Hero from './components/Hero';
import Nav from '../../GlobalComponents/Nav';
import HouseCard from './components/HouseCard';

const HomePage = () => {
  return (
    <div>
     <Nav />
      <Hero />

      <h2 className='text-4xl font-bold text-center'>Find your Dream house Here</h2>
        <HouseCard />
    </div>
  );
};

export default HomePage;

