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
    <div style={{display: 'inline-block', padding: '37px 21px', border: '1px solid black'}}>
      <p>Vehicles selected are displayed here</p>
    </div>
  )
  return (
    <div>
      <div className ='infoBody'>
      <h2>Cars Selected</h2>
      <h4>Cars shown represent vehicle class</h4>
        {carList}
      </div>
    </div>
  )
}


export default CarAdder;
