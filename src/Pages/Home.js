import React from 'react';
//import Hero from '../Components/Hero/Hero';
import Carousel  from 'react-bootstrap/Carousel';

import './Home.css';

import car_1 from '../Components/Assets/car_1.png';
import car_2 from '../Components/Assets/car_2.png';
import car_3 from '../Components/Assets/car_3.png';
import car_4 from '../Components/Assets/car_4.png' ;

import CardComponent from '../Components/CardComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import sh1_car from '../Components/Assets/sh1_car.webp';
import sh2_car from '../Components/Assets/sh2_car.webp';
import sh3_car from '../Components/Assets/sh3_car.webp';

import new_car1 from '../Components/Assets/new_car1.webp';
import new_car2 from '../Components/Assets/new_car2.webp';
import new_car3 from '../Components/Assets/new_car3.webp';



const Home = () => {


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

  const newCars = [
    {
      id : '4',
      title: 'Ford Everest',
      description: 'Tough, spacious, and tech-equipped SUV.',
      image:new_car1,
    },
    {
      id : '5',
      title: 'Porsche 911', 
      description:'Fast, iconic, and luxurious',
      image:new_car2,
    },
    {
      id:'6',
      title:'Land Rover Range Velar',
      description:'Stylish, advanced, and off-road ready.',
      image:new_car3,
    },

  ]; 

  const handleButtonClick = () => {
    console.log("Car with ID ${id} clicked.");
    // redirecting to details here
  }

  return (


    <div className='home-page'>

      <h2 className='slogan'>Revving Up Deals on New and Used Wheels</h2>
      <Carousel>
          
        <Carousel.Item>
          <img src={car_1} alt='' />

          <Carousel.Caption>
            <h3>RENAULT CLIO</h3>
            <p>starting at 64 950 DT</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={car_2} alt='' />
          <Carousel.Caption>
            <h3>BMW I5</h3>
            <p>starting at 333 200 DT</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img src={car_3} alt='' />
          <Carousel.Caption>
            <h3>SUZUKI JIMNY 5P</h3>
            <p>starting at 129 900 DT</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img src={car_4} alt='' />
          <Carousel.Caption>
            <h4>PEUGEOT 2008</h4>
            <p>starting at 97 900 DT</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <hr className='line'/>
      



      <Container className='oldcar'>

        <h3 className='deals'>Don't miss these deals!</h3>

        <Row>
         { oldCars.map((oldcar) => (

          <Col md={4} key={oldcar.id}>

           <CardComponent
            id={oldcar.id}
            title={oldcar.title}
            description={oldcar.description}
            image={oldcar.image}
            buttonLabel="Details"
            onButtonClick={handleButtonClick} 
            />

          </Col>
        ))}
        </Row>
      </Container> 

      <hr className='line' />


      <Container className='newcar'>
        <h3 className='deals'>New Arrivals!</h3>
        <Row>
         { newCars.map((newcar) => (
          <Col md={4} key={newcar.id}>

            <CardComponent
              id={newcar.id}
              title={newcar.title}
              description={newcar.description}
              image={newcar.image}
              buttonLabel='Details'
              onButtonClick={handleButtonClick}
            />
           
          </Col>
        ))}
        </Row>
      </Container> 
      


    
    </div>


  );
}

export default Home;
