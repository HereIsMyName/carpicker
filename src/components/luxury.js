import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Bread3 from '../components/bread3.js';
import suv from '../images/suv.jpeg';
import hatchback from '../images/hatchback.jpeg';
import { connect } from 'react-redux';

class Luxurys extends Component {
    state= {
        luxurys: [
            {carClass: 'luxury', model: 'Lexus'},
            {carClass: 'luxury', model: 'BMW'},
            {carClass: 'luxury', model: 'Mercedez-Benz'},
            {carClass: 'luxury', model: 'INFINITI'},
            {carClass: 'luxury', model: 'Cadillac CT6'},
            {carClass: 'luxury', model: 'Jaguar XE'},
            {carClass: 'luxury', model: 'Porche Cayenne'},
            {carClass: 'luxury', model: 'Audi A4'}
        ]
    }

    handleClick = (cars) => {
        this.props.addCar(cars)
    }


    render() {
        const { luxurys } = this.state
        const { cars }   = this.props
        let hatchbackList = luxurys.map((hatchback, i) => {
            let cName = cars.find(car => car.model === hatchback.model) ? 'picked': ''
            return (
                <div style={{margin: '0 auto', width: '60%',textAlign: 'center'}} key={hatchback.model}>
                    <p>{hatchback.model} <button  className={cName} onClick={() => this.handleClick(hatchback)}>{cName ? 'Added' : 'Add Car'}</button></p>
                </div>
                
            )
        });
        
        return (
            <div>
                <Bread3 title='Luxurys' />
                <div className ='modelBody'>
                <h2>Luxury Vehicles</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(Luxurys);


