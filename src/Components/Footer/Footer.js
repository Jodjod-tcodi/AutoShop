import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot">
        
        <p>© 2024 AutoShop. All Rights Reserved.</p>

        <div className="foot-links">
          
          <Link to="/aboutus">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacypolicy">Privacy Policy</Link>

        </div>
      </div>
    </div>
  );
};

export default Footer;



