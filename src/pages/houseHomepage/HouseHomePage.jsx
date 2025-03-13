import React from "react";
import { useState, useEffect } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import HouseCard from "../home/components/HouseCard";
import SkeletonHomeCard from "../home/components/SkeletonHomeCard";
import HouseFilterModal from "./HouseFilterModal";
import Nav from "../../GlobalComponents/Nav";
import FilteredCard from "./FilteredCard";

const HouseHomePage = () => {
  const [filterHouseCards, setFilterHouseCards] = useState([]);
  const [allHouses, setAllHouses] = useState([]);
  const [title, settitle] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [hasSearched, setHasSearched] = useState(false); 


  useEffect(() => {
    getHouseAll();
  }, []);

  const getFilterHouse = async () => {
    try {
      const filterData = {
        title,
        location,
        type,
        minPrice,
        maxPrice,
      };
      const response = await GlobalApi.filterHouse(filterData);
      document.getElementById("my_modal_5").close(); 
      console.log(response.data);
      setFilterHouseCards(response.data);
      setHasSearched(true);
    } catch (error) {
      console.error(error);
    }
  };
  

  const getHouseAll = async () => {
    try {
      const response = await GlobalApi.getAllHouse();
      console.log(response.data);
      setAllHouses(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Nav />
      <div className="flex flex-col justify-center items-center p-4">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-3xl">Find More Properties Here</h1>
          <HouseFilterModal
            getFilterHouse={getFilterHouse}
            title={title}
            location={location}
            type={type}
            minPrice={minPrice}
            maxPrice={maxPrice}
            settitle={settitle}
            setLocation={setLocation}
            setType={setType}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />
        </div>

        <div>

        {hasSearched && (
  filterHouseCards.length > 0 ? (
              <div>
                <div><span>{filterHouseCards?.length} Houses Found!🎊</span></div>
      {filterHouseCards.map((item, index) => (
        <div key={index}>
          <FilteredCard item={item} />
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center">
      <span>No Properties found</span>
    </div>
  )
)}

 

          {!allHouses || allHouses.length === 0 ? (
            <div className="flex gap-4 items-center flex-wrap justify-center mt-4">
              <SkeletonHomeCard />
              <SkeletonHomeCard />
              <SkeletonHomeCard />
            </div>
          ) : (
            <div className="flex gap-4 items-center flex-wrap justify-center">
              {allHouses.map((item, index) => {
                return <HouseCard key={index} item={item} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HouseHomePage;
