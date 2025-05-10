
import React, { useState } from "react";
import "./NewCars.css";

import {carFilters} from "../Data/filtersData"; 
import FilterComponent from "../Components/FilterComponent";

import CardComponent from "../Components/CardComponent";

import new_car1 from '../Components/Assets/new_car1.webp';
import new_car2 from '../Components/Assets/new_car2.webp';
import new_car3 from '../Components/Assets/new_car3.webp';

const NewCars = () => {

  const newCars = [
    {
      id : '4',
      title: 'Ford Everest',
      description: 'Tough, spacious, and tech-equipped SUV.',
      image:new_car1,
      brand : 'Ford',
      fuelType : 'Diesel',
    },
    {
      id : '5',
      title: 'Porsche 911', 
      description:'Fast, iconic, and luxurious',
      image:new_car2,
      brand: 'Porsche',
      fuelType : 'Petrol',
    },
    {
      id:'6',
      title:'Land Rover Range Velar',
      description:'Stylish, advanced, and off-road ready.',
      image:new_car3,
      brand : 'LandRover',
      fuelType : 'Hybrid'
    },

  ]; 

  const [filteredCars, setFilteredCars] = useState(newCars);

  const handleFilterChange = (selectedFilters) => {
    const filtered = newCars.filter((car) => {
      return (
        (selectedFilters.brand === "All" || car.brand === selectedFilters.brand) &&
        (selectedFilters.fuelType === "All" || car.fuelType === selectedFilters.fuelType)
      );
    });
    setFilteredCars(filtered);
  };

  return (
    <div className="new-page">
      <h1>Explore Our Latest Collection</h1>
      <h3>Browse our collection of top-quality, brand-new cars available just for you.</h3>

      {/* Filter Component */}
      <FilterComponent filters={carFilters} onFilterChange={handleFilterChange} />

      {/* Display Cars */}
      <div className="row">
        {filteredCars.map((newcar) => (
          <div key={newcar.id} className="col-md-4 mb-4">
            <CardComponent
              id={newcar.id}
              title={newcar.title}
              description={newcar.description}
              image={newcar.image}
              buttonLabel="Details"
              onButtonClick={(id) => console.log(`Details for car ID: ${id}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCars;

