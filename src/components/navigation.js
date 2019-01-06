import React from 'react';
import { NavLink } from 'react-router-dom';
import {Responsive} from 'semantic-ui-react'; 
import { connect } from 'react-redux';

const Navigation = (props) => {
  return (
    <div className="navlist">
      <ul>
        <NavLink to='/selections'><li className="nav-item">Selections {props.cars.length}</li></NavLink>
        <Responsive minWidth={700}>
          <li className='nav-item' id='navI2'><NavLink to='/cars' style={{ color: 'rgb(49, 41, 41)' }}>Cars</NavLink></li>
        </Responsive>
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps, null)(Navigation);