import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Bread3 from '../components/bread3.js';
import suv from '../images/suv.jpeg';
import motorcycle from '../images/moto.jpeg';
import { connect } from 'react-redux';

class Motos extends Component {
    state= {
        motos: [
            {carClass: 'moto', model: 'Harley Davidson'},
            {carClass: 'moto', model: 'Kawazaki'},
            {carClass: 'moto', model: 'Yamaha'},
            {carClass: 'moto', model: 'Ducati'},
            {carClass: 'moto', model: 'Honda'},
            {carClass: 'moto', model: 'BMW'},
            {carClass: 'moto', model: 'Suzuki'}
        ]
    }

    handleClick = (cars) => {
        this.props.addCar(cars)
    }


    render() {
        const { motos } = this.state
        const { cars }   = this.props
        let hatchbackList = motos.map((hatchback, i) => {
            let cName = cars.find(car => car.model === hatchback.model) ? 'picked': ''
            return (
                <div style={{margin: '0 auto', width: '60%',textAlign: 'center'}} key={hatchback.model}>
                    <p>{hatchback.model} <button  className={cName} onClick={() => this.handleClick(hatchback)}>{cName ? 'Added' : 'Add'}</button></p>
                </div>
                
            )
        });
        
        return (
            <div>
                <Bread3 title='Motos' />
                <div className ='modelBody'>
                <h2>Motos</h2>
                <h3>Select desired vehicles</h3>
                {hatchbackList}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      cars: state.cars
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        addCar: (cars) => { dispatch({type: 'ADD_CAR', cars}) },
        deleteCar: (model) => { dispatch({type: 'DELETE_CAR', model}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Motos);

