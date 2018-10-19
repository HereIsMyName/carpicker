import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <div className="navlist">
      <ul>
        <NavLink to='/selections'><li className="nav-item">Selections</li></NavLink>
        <li className='nav-item' id='navI2'><NavLink to='/cars' style={{ color: 'rgb(49, 41, 41)' }}>Cars</NavLink></li>
      </ul>
    </div>
  );
}

export default Navigation;