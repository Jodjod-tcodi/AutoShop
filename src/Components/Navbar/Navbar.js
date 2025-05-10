import React from 'react'
import './Navbar.css' 
import logo from '../Assets/logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const[menu, setMenu] = useState("home");

  return (

    <div className='navbar'>

        <div className="nav-logo">
            <img src={logo} alt='' style={{width:'350px', height: 'auto'}} />
            
        </div>

        <ul className="nav-menu">

            <li onClick={()=>{setMenu("home")}}> <Link style={{textDecoration : 'none' }}  to='/'>Home</Link> {menu==="home" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("secondHand")}}><Link  style={{textDecoration : 'none' }}  to='/cars'>Second-Hand</Link>{menu==="secondHand" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("new")}}><Link  style={{textDecoration : 'none' }}  to='/new'>New</Link>{menu==="new" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("aboutus")}}><Link style={{textDecoration : 'none' }}  to='/aboutus'>About Us</Link> {menu==="aboutus" ? <hr/> : <></>}</li>

        </ul>

          <Link to='/login'> <button>Sign In</button> </Link>

    </div>
  )
}

export default Navbar