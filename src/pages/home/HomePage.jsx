import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Nav from '../../GlobalComponents/Nav';
import HouseCard from './components/HouseCard';
import GlobalApi from '../../Utils/GlobalApi';
import HomeSectionOne from './homepageSections/HomeSectionOne';
import Footer from './Footer';
import SkeletonHomeCard from './components/SkeletonHomeCard';
import { Link } from 'react-router-dom';

const HomePage = () => {

  const [allHouses, setAllHouses] = useState([])

  useEffect(() => {
    getHouseAll()
    
  }, [allHouses])
  

  

  const getHouseAll = async () => {
    try {
      const response = await GlobalApi.getAllHouse()
      console.log(response.data)
      setAllHouses(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  //Limiting the amount of houses seen on the Homepage
  const firstFiveHouses = allHouses.slice(0, 5);

  return (
    <div>
     <Nav />
      <Hero />
      
      <h2 className='text-4xl font-bold text-center mt-10'>Find your Dream house Here</h2>


      {!allHouses || allHouses.length === 0 ?
           (  <div className='flex gap-4 items-center flex-wrap justify-center'>
            <SkeletonHomeCard />
            <SkeletonHomeCard />
            <SkeletonHomeCard />
          </div>)
        :

(<div className='flex gap-4 items-center flex-wrap justify-center'>
  {firstFiveHouses.map((item, index) => {
    return <HouseCard key={index} item={item} />
  })}
    </div>)
      }
    
      <div className='flex flex-col items-center pb-10'>
     
        <div className='text-center mt-10'>
          <Link to={'/house'}>
          <button className='btn btn-primary'>Browse more Properties</button>
          </Link>
      
      </div>
     </div>

    

      
      <HomeSectionOne />

<Footer />

    </div>
  );
};

export default HomePage;

