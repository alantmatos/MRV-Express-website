import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import logoImage from './logo.png';

const Navbar = () => {

  return (
    <div className='navbar-container'>

      <div className='logo-container'>

        <div className="deconstructed">
          MVR Express
          <div>MVR Express</div>
          <div>MVR Express</div>
          <div>MVR Express</div>
          <div>MVR Express</div>
        </div>

      </div>

      <div className='home-buttons'>
        <Link className='links' to="/">INICIO</Link>
        <Link className='links' to="/services">SERVIÇOS</Link>
        <Link className='links' to="/contact">CONTATO</Link>
      </div>

      <div className='weather-container'>
        <div className='weather'>  </div>
      </div>


    </div>
  )
}

export default Navbar



// MVR Express
{/* <img className='logo-image' src={logoImage}></img> */ }