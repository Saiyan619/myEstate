import React from 'react';
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Nav from '../../GlobalComponents/Nav';
import HouseCard from './components/HouseCard';
import GlobalApi from '../../Utils/GlobalApi';
import HomeSectionOne from './homepageSections/homeSectionOne';
import Footer from './Footer';
import { useUser } from '@clerk/clerk-react';

const HomePage = () => {
  const { user } = useUser();
  console.log(user.id)
  console.log(user.firstName)
  console.log(user.lastName)
  console.log(user.primaryEmailAddress.emailAddress)
  const [allHouses, setAllHouses] = useState([])

  useEffect(() => {
    createAUser()
    getHouseAll()
  }, [user])
  

  const createAUser = async () => {
    if (user) {
      try {
        const userData = {
          clerkId: user?.id,
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.primaryEmailAddress?.emailAddress,
        }
        const response = await GlobalApi.createUser(userData)
        console.log(response.data)
      } catch (error) {
        console.error(error)
        throw new Error();
      }
    } else {
      console.log('User does not exist!')
    }
  
  }

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

      <div className='flex flex-col items-center pb-10'>
      <div className='flex gap-4 items-center justify-center'>
      {allHouses.map((item, index) => {
        return <HouseCard key={index} item={item} />
      })}


      </div>

      <div className='text-center mt-10'>
        <button onClick={createAUser} className='btn btn-primary'>Browse more Properties</button>
      </div>
     </div>

    

      
      <HomeSectionOne />

<Footer />

    </div>
  );
};

export default HomePage;

