// Cars added to carSelector page are created here

import React from 'react';

const CarAdder = ({cars, handleClick}) => {
  const carList = cars.length ? (
    cars.map(car => {
      return (
        <div className='carSelection' key={car.model}>
          <span>{car.model}</span>
          <br />  
          <span>class: {car.carClass}</span>
          <img src={require(`../images/${car.carClass}.jpeg`)} alt={car.carClass}/>
          <br />
          <button onClick={() => {handleClick(car.model)}}>Remove</button>
        </div>
      )
    })
  ) : (
    <p>Vehicles selected are displayed here</p>
  )
  return (
    <div>
      <div className ='infoBody'>
      <h4>Cars shown represent vehicle class</h4>
        {carList}
      </div>
    </div>
  )
}


export default CarAdder;
