import './App.css';
import API from './api';

import React, { useState, useEffect } from 'react';


import Navbar from './Components/Navbar/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';



import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp'; 

import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './Components/Footer/Footer';

import SecondHand from './Pages/SecondHand';
import NewCars from './Pages/NewCars';

import Contact from './Pages/Contact';
import PrivacyPolicy from './Pages/PrivacyPolicy';


function App() {

  const [message, setMessage] = useState('');

    useEffect(() => {
        API.get('/api/test')
            .then((response) => setMessage(response.data.message))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


  return (
    <>
      <BrowserRouter>

        <Navbar /> 


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<SecondHand category="cars" />}/>
          <Route path="/new" element={<NewCars category="new" />} />
          <Route path="/aboutus" element={<AboutUs />} />

          {/*}
          <Route path="/product">
            <Route path=":productId" element={<Product />} />
          </Route>
          */}
          
          <Route path="/signin" element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />

          <Route path='/contact' element={<Contact />}/>
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />

        </Routes>

        <Footer/>
          
      </BrowserRouter>
      
    </>
  );
}

export default App;



