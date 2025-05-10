import React, { useState } from "react";
import './SecondHand.css';
import {carFilters} from "../Data/filtersData";
import FilterComponent from "../Components/FilterComponent";

import CardComponent from "../Components/CardComponent";

import sh1_car from '../Components/Assets/sh1_car.webp';
import sh2_car from '../Components/Assets/sh2_car.webp';
import sh3_car from '../Components/Assets/sh3_car.webp';

const SecondHand = () => {

  const oldCars = [

    {
      id: 1,
      title: 'Peugeot 307',
      description: 'Affordable yet cool car for your everyday rides.',
      image: sh1_car,
      
    },

    {
      id:2,
      title : 'Mahindra KUV 100', 
      description: 'Reliable and fuel-efficient, perfect for daily commutes.',
      image:sh2_car,

    },

    {
      id:3,
      title:'Fiat Panda City Cross',
      description:'Coquette and affordable car. ',
      image:sh3_car,

    },
  ];

  const [filteredCars, setFilteredCars] = useState(oldCars);

  const handleFilterChange = (selectedFilters) => {
    const filtered = oldCars.filter((car) => {
      return (
        (selectedFilters.brand === "All" || car.brand === selectedFilters.brand) &&
        (selectedFilters.fuelType === "All" || car.fuelType === selectedFilters.fuelType)
      );
    });
    setFilteredCars(filtered);
  };

  return (
    <div className="second-page">
      <h1>Looking For Something Affordable and Reliable?</h1>
      <h2>Browse our collection of good-quality, second-hand cars picked just for you. </h2>
      
      <FilterComponent filters={carFilters} onFilterChange={handleFilterChange}/>

      <div className="row">
        {filteredCars.map((oldcar) => (
          <div key={oldcar.id} className="col-md-4 mb-4">
            <CardComponent
              id={oldcar.id}
              title={oldcar.title}
              description={oldcar.description}
              image={oldcar.image}
              buttonLabel="Details"
              onButtonClick={(id) => console.log(`Details for car ID: ${id}`)}
            />
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default SecondHand;
