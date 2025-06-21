import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/image_01.png';
import { SlHome } from "react-icons/sl";
import { TbWorld } from "react-icons/tb";
import { GiOnTarget } from "react-icons/gi";
import { GiCommercialAirplane } from "react-icons/gi";
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={image} alt="logo" />
        <h1>Destination <span>Explorer</span></h1>
      </div>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home <SlHome/></Link>
        <Link to="/about">About <TbWorld/></Link>
        <Link to="/dining">Dining Spots <GiOnTarget/></Link>
        <Link to="/destination">Destination <GiCommercialAirplane/></Link>
      </div>

      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default NavBar;
