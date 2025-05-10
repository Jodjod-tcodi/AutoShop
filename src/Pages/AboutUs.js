import React from 'react';
import './AboutUs.css';

const AboutUs = () => {

  return (

    <div className='all'>
      <div className='about-us'>

        <h1>About AutoShop</h1>
        <p>Welcome to AutoShop, your trusted platform for buying new ans secondhand cars.</p>
        
      </div>

      <div className='overview'>

        <h2>Company Overview</h2>
        <p>At AutoShop, we strive to make car purchasing a seamless experience. Whether, you're looking for a reliable second-hand vehicule or the latest model, we have a range of options for every need and budget.</p>
        
      </div>

      <div className='mission'>
        <h2>Our Mission</h2>
        <p>Our mission is to provide customers with high-quality vehicles and exceptional service, ensuring that every car purchase is a confident and satisfying experience.</p>

      </div>

      <div className='values'>
        <h2>Our Core Values</h2>
        <ul>
          <li>Customer Satisfaction</li>
          <li>Quality and Integrity</li>
          <li>Innovation</li>
          <li>Trancperancy</li>
        </ul>
      </div>

    </div>
  );
};

export default AboutUs
