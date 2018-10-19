import React from 'react';
import CarSelector from './carSelector';
import { Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

const CarAdder = ({cars, handleClick}) => {
  const carList = cars.length ? (
    cars.map(car => {
      return (
        <div className='carSelection' key={car.model}>
          <span>{car.model}</span>
          <br />  
          <span>class: {car.carClass}</span>
          <img src={require(`../images/${car.carClass}.jpeg`)} />
          <br />
          <button onClick={() => {handleClick(car.model)}}>Remove</button>
        </div>
      )
    })
  ) : (
    <p>No cars have been selected</p>
  )
  return (
    <div>
      <div className ='infoBody'>
      <h4>Cars shown represent the class of vehicle</h4>
        {carList}
      </div>
    </div>
  )
}


export default CarAdder;
